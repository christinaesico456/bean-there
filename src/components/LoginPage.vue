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
    errorMessage.value = 'Please enter both username and password.'
    return
  }
  
  isLoading.value = true
  
  try {
    // Send request to backend with the correct URL
    const response = await axios.post('http://127.0.0.1:8000/accounts/login/', {
      username: username.value,
      password: password.value,
    })
    
    console.log('Login successful:', response.data)
    successMessage.value = 'Login successful! Redirecting...'
    
    // Extract token from response
    let token = null
    if (response.data.token) {
      token = response.data.token
    } else if (response.data.access) {
      token = response.data.access
    } else if (response.data.key) {
      token = response.data.key
    }
    
    if (!token) {
      console.error('No token found in response:', response.data)
      errorMessage.value = 'Login successful but no authentication token received.'
      isLoading.value = false
      return
    }
    
    // Store token in user store
    userStore.setToken(token)
    successMessage.value = 'Login successful!'
    
    try {
      // Fetch user profile data
      await userStore.fetchUserProfile()
      console.log('User profile fetched successfully')
      
      setTimeout(() => {
        // Redirect to homepage first
        router.push('/home')
      }, 300)
      
    } catch (profileError) {
      console.error('Error fetching user profile:', profileError)
      // If profile fetch fails, show error but don't redirect
      errorMessage.value = 'Error loading user profile. Please try again.'
      // Clear the token since we couldn't complete the login process
      userStore.setToken(null)
    }
    
  } catch (error) {
    console.error('Login error:', error)
    
    if (error.response && error.response.data) {
      if (typeof error.response.data === 'object') {
        if (error.response.data.non_field_errors) {
          errorMessage.value = error.response.data.non_field_errors[0]
        } else if (error.response.data.detail) {
          errorMessage.value = error.response.data.detail
        } else if (error.response.data.error) {
          errorMessage.value = error.response.data.error
        } else {
          errorMessage.value = 'Invalid credentials. Please try again.'
        }
      } else {
        errorMessage.value = error.response.data || 'Login failed. Please try again.'
      }
    } else {
      errorMessage.value = 'Network error. Please try again later.'
    }
  } finally {
    isLoading.value = false
  }
}
</script>