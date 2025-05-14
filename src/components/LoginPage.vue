<template>
  <div class="flex h-screen">
    <!-- Left Side - Image -->
    <div class="w-1/2 bg-center bg-cover" style="background-image: url('/login-coffee.png');"></div>
    <!-- Right Side - Form -->
    <div class="w-1/2 bg-[#2D1B15] flex flex-col justify-center items-center text-white px-10">
      <!-- Logo -->
      <div class="mb-8">
        <div class="flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full">
          <div><img src="/beanthere-logo.png" alt="Bean There Logo" class="h-auto w-13"></div>
        </div>
      </div>
      <!-- Login Form -->
      <div class="w-full max-w-md">
        <input 
          v-model="username" 
          type="text" 
          placeholder="Username" 
          class="w-full p-3 mb-4 text-black bg-white rounded" 
        />
        <input 
          v-model="password" 
          type="password" 
          placeholder="Password" 
          class="w-full p-3 mb-2 text-black bg-white rounded" 
        />
        <div v-if="errorMessage" class="mb-4 text-sm text-red-400">{{ errorMessage }}</div>
        <div v-if="successMessage" class="mb-4 text-sm text-green-400">{{ successMessage }}</div>
        <button 
          @click="login" 
          class="w-full bg-[#A37550] text-white py-3 rounded hover:bg-[#8B5E3B]"
          :disabled="isLoading"
        >
          <span v-if="isLoading">Signing in...</span>
          <span v-else>Sign in</span>
        </button>
        <div class="my-4 text-center">Or</div>
        <router-link to="/signup" class="w-full">
          <button class="w-full py-3 border border-white rounded">
            Create an account
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')
const isLoading = ref(false)

// Check if user is already logged in
onMounted(() => {
  if (userStore.isLoggedIn) {
    if (route.query.redirect) {
      router.push(route.query.redirect.toString())
    } else {
      router.push('/home')
    }
  }
})

const login = async () => {
  errorMessage.value = ''
  successMessage.value = ''
  
  // Form validation
  if (!username.value || !password.value) {
    errorMessage.value = 'Please enter both username/email and password.'
    return
  }
  
  isLoading.value = true
  
  try {
    // Send login request
    const response = await axios.post('http://127.0.0.1:8000/accounts/login/', {
      username: username.value,
      password: password.value,
    })
    
    // Extract token (focusing on the token structure we know our backend uses)
    const token = response.data.token || response.data.access

    if (!token) {
      throw new Error('No authentication token received')
    }
    
    // Store token
    userStore.setToken(token)
    
    // Fetch user profile
    await userStore.fetchUserProfile()
    console.log('User profile fetched successfully')
    
    // Only show success and redirect if everything worked
    successMessage.value = 'Login successful! Redirecting...'
    
    // Redirect after short delay
    setTimeout(() => {
      if (route.query.redirect) {
        router.push(route.query.redirect.toString())
      } else {
        router.push('/home')
      }
    }, 1000)
    
  } catch (error) {
    console.error('Login error:', error)
    
    // Clear token if we got one but failed later
    userStore.setToken(null)
    
    // Handle different error cases
      if (error.response && error.response.data) {
      const data = error.response.data
      if (typeof data === 'object') {
        errorMessage.value = 
          data.non_field_errors?.[0] ||
          data.detail ||
          data.error ||
          'Invalid credentials. Please try again.'
      } else {
        errorMessage.value = data || 'Login failed. Please try again.'
      }
    } else if (error.message === 'No authentication token received') {
      errorMessage.value = error.message
    } else {
      errorMessage.value = 'Network error. Please try again later.'
    }
  } finally {
    isLoading.value = false
  }
}
</script>