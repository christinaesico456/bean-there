<template>
  <div class="flex flex-col min-h-screen px-10 py-16 bg-white">
    <!-- User Name -->
    <section class="mb-16 text-center">
      <h1 class="text-5xl font-extrabold text-[#2C0E0E] mb-2">
        {{ user.name }}
      </h1>
    </section>

    <!-- Favorite Cafes -->
    <section>
      <h2 class="text-3xl font-bold text-[#2C0E0E] mb-10 text-center">
        Favorite Cafes
      </h2>

      <!-- Loading state -->
      <div v-if="loading" class="flex items-center justify-center">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2C0E0E]"></div>
      </div>

      <!-- No favorites message -->
      <div v-else-if="favoriteCafes.length === 0" class="py-10 text-center">
        <p class="text-xl text-gray-600">You don't have any favorite cafes yet.</p>
        <router-link 
          to="/home" 
          class="mt-4 inline-block px-6 py-3 bg-[#2C0E0E] text-white rounded-lg hover:bg-[#4C2E2E] transition-colors">
          Explore Cafes
        </router-link>
      </div>

      <!-- Favorites grid -->
      <div v-else class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-for="cafe in favoriteCafes"
          :key="cafe.id"
          class="flex flex-col items-center p-6 transition duration-300 transform bg-white shadow-lg rounded-2xl hover:scale-105"
        >
          <!-- Image with hover zoom -->
          <div class="relative w-64 h-64 mb-6 overflow-hidden rounded-xl">
            <img
              :src="cafe.image || '/placeholder-cafe.jpg'"
              :alt="cafe.name"
              class="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            />
          </div>

          <!-- Cafe name -->
          <h3 class="mb-4 text-xl font-bold text-[#2C0E0E]">{{ cafe.name }}</h3>

          <!-- Heart button for unfavorite -->
          <div class="flex items-center justify-between w-full mb-4">
            <button 
              @click="toggleFavorite(cafe.id)"
              class="flex items-center text-red-500 transition hover:text-red-700">
              <span class="mr-2 text-2xl">❤️</span>
              <span>Remove from favorites</span>
            </button>
          </div>

          <!-- See Menu Button -->
          <router-link
            :to="`/cafe/${cafe.id}`"
            class="px-6 py-3 text-base font-semibold text-white transition-all duration-300 bg-[#2C0E0E] rounded-full shadow-md hover:bg-[#4C2E2E]"
          >
            See Menu
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, watch} from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const user = ref({
  name: '',
})

const favoriteCafes = ref([])
const loading = ref(true)
const route = useRoute()

// Fetch user details (name)
const getUserProfile = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/user/profile/', {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`, 
      },
    })
    user.value.name = response.data.name
  } catch (error) {
    console.error('Error fetching user profile:', error)
  }
}

// Fetch user's favorite cafes
const getFavorites = async () => {
  try {
    loading.value = true
    const response = await axios.get('http://127.0.0.1:8000/favorite/user/', {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    })
    
    // Assuming the response is an array of favorite objects that contain cafe details
    favoriteCafes.value = response.data.map(item => {
      if (item.cafe) {
        return {
          id: item.cafe.id,
          name: item.cafe.name,
          image: item.cafe.image
        }
      } else {
        // Alternative structure if the API returns a different format
        return {
          id: item.id,
          name: item.name,
          image: item.image
        }
      }
    })
  } catch (error) {
    console.error('Error fetching favorites:', error)
  } finally {
    loading.value = false
  }
}

// Toggle favorite status (remove from favorites in this case)
const toggleFavorite = async (cafeId) => {
  try {
    await axios.post(`http://127.0.0.1:8000/favorite/toggle/${cafeId}/`, {}, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    })
    
    // Remove the cafe from the local list
    favoriteCafes.value = favoriteCafes.value.filter(cafe => cafe.id !== cafeId)
  } catch (error) {
    console.error('Error removing favorite:', error)
  }
}

const setupFavoriteEventListener = () => {
  window.addEventListener('favoriteChanged', () => {
    // Refresh favorites when the event is triggered
    getFavorites()
  })
}

// Refresh favorites when navigating to this page
watch(
  () => route.path,
  (newPath) => {
    if (newPath === '/favorites') {
      getFavorites()
    }
  }
)

// Fetch both user profile and favorites when the component is mounted
onMounted(() => {
  getUserProfile()
  getFavorites()
  setupFavoriteEventListener()
})
</script>