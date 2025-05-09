<template>
  <div class="flex flex-col items-center p-12">
    <!-- Loading state -->
    <div v-if="isLoading" class="py-8 text-center">
      <p class="text-xl">Loading profile data...</p>
    </div>
    
    <!-- Error state -->
    <div v-else-if="error" class="py-8 text-center">
      <p class="text-xl text-red-500">{{ error }}</p>
      <button 
        @click="retryFetch" 
        class="mt-4 px-4 py-2 bg-[#A37550] text-white rounded hover:bg-[#8B5E3B]"
      >
        Retry
      </button>
    </div>
    
    <!-- Profile content -->
    <div v-else class="w-full">
      <!-- Profile Header -->
      <div class="flex flex-col items-center w-full max-w-3xl mx-auto mb-10">
        <div class="w-24 h-24 mb-4 overflow-hidden bg-gray-300 rounded-full">
          <img v-if="user.profilePicture" :src="user.profilePicture" alt="Profile Picture" class="object-cover w-full h-full" />
          <div v-else class="flex items-center justify-center w-full h-full bg-[#A37550] text-white text-2xl font-bold">
            {{ userInitials }}
          </div>
        </div>

        <div class="text-center">
          <h2 class="text-3xl font-bold text-[#3A1C1A]">{{ user.firstName }} {{ user.lastName }}</h2>
          <p class="text-gray-600">@{{ user.username }}</p>
        </div>
      </div>

      <!-- Profile Display Section -->
      <div class="w-full max-w-3xl mx-auto">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label class="block mb-2 text-gray-700">First Name</label>
            <span class="block w-full p-3 bg-gray-100 border rounded">{{ user.firstName || 'Not provided' }}</span>
          </div>
          <div>
            <label class="block mb-2 text-gray-700">Last Name</label>
            <span class="block w-full p-3 bg-gray-100 border rounded">{{ user.lastName || 'Not provided' }}</span>
          </div>
          <div>
            <label class="block mb-2 text-gray-700">Email</label>
            <span class="block w-full p-3 bg-gray-100 border rounded">{{ user.email || 'Not provided' }}</span>
          </div>
          <div>
            <label class="block mb-2 text-gray-700">Phone Number</label>
            <span class="block w-full p-3 bg-gray-100 border rounded">{{ user.phone || 'Not provided' }}</span>
          </div>
        </div>

        <div class="mt-6">
          <label class="block mb-2 text-gray-700">Bio</label>
          <span class="block w-full p-3 bg-gray-100 border rounded min-h-[100px]">
            {{ user.bio || 'No bio provided yet.' }}
          </span>
        </div>
        
        <div class="flex justify-center gap-4 mt-8">
          <router-link 
            to="/settings" 
            class="px-6 py-2 text-white bg-[#4A2C2A] rounded hover:bg-[#603A36]"
          >
            Edit Profile
          </router-link>
          <button 
            @click="logout" 
            class="px-6 py-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-300"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()

// Use the store's refs
const isLoading = ref(false)
const error = ref('')
const user = ref({})

// Get user initials for avatar fallback
const userInitials = computed(() => {
  const first = user.value.firstName ? user.value.firstName.charAt(0).toUpperCase() : '';
  const last = user.value.lastName ? user.value.lastName.charAt(0).toUpperCase() : '';
  return first + last;
})

// Watch for changes in the store's user object
watch(() => userStore.user, (newUserData) => {
  user.value = newUserData
}, { deep: true })

// Fetch user data when component mounts
onMounted(async () => {
  if (!userStore.token) {
    // No token means user is not logged in
    router.push('/login');
    return;
  }
  
  isLoading.value = true
  
  try {
    // Fetch user profile data
    await userStore.fetchUserProfile();
    // Copy data from store to local ref
    user.value = userStore.user
    isLoading.value = false
  } catch (err) {
    error.value = err.message
    isLoading.value = false
    
    // If there's an error and it's related to authentication, redirect to login
    if (error.value && (error.value.includes('authentication') || error.value.includes('Not authenticated'))) {
      router.push('/login');
    }
  }
})

const retryFetch = async () => {
  isLoading.value = true
  error.value = ''
  
  try {
    await userStore.fetchUserProfile();
    user.value = userStore.user
    isLoading.value = false
  } catch (err) {
    error.value = err.message
    isLoading.value = false
  }
}

const logout = () => {
  userStore.logout();
  router.push('/login');
}
</script>