<template>
  <div class="flex h-screen">
    <!-- Left Side - Image -->
    <div class="w-1/2 bg-center bg-cover" style="background-image: url('/login-coffee.png');"></div>

    <!-- Right Side - Form -->
    <div class="w-1/2 bg-[#2D1B15] flex flex-col justify-center px-16 text-white">
      <h1 class="mb-8 text-4xl font-bold text-center">Sign up</h1>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block mb-1">Full Name</label>
          <input v-model="fullName" type="text" placeholder="Name..." class="w-full px-4 py-2 rounded bg-[#5B4642] text-white placeholder-gray-300" />
        </div>
        <div>
          <label class="block mb-1">Email</label>
          <input v-model="email" type="email" placeholder="Email Address..." class="w-full px-4 py-2 rounded bg-[#5B4642] text-white placeholder-gray-300" />
        </div>
        <div>
          <label class="block mb-1">Username</label>
          <input v-model="username" type="text" placeholder="Username..." class="w-full px-4 py-2 rounded bg-[#5B4642] text-white placeholder-gray-300" />
        </div>
        <div>
          <label class="block mb-1">Phone Number</label>
          <input v-model="phone" type="text" placeholder="Phone Number..." class="w-full px-4 py-2 rounded bg-[#5B4642] text-white placeholder-gray-300" />
        </div>
        <div>
          <label class="block mb-1">Password</label>
          <input v-model="password" type="password" placeholder="**********" class="w-full px-4 py-2 rounded bg-[#5B4642] text-white placeholder-gray-300" />
        </div>
        <div>
          <label class="block mb-1">Confirm Password</label>
          <input v-model="confirmPassword" type="password" placeholder="**********" class="w-full px-4 py-2 rounded bg-[#5B4642] text-white placeholder-gray-300" />
        </div>

        <div v-if="errorMessage" class="text-sm text-red-400">{{ errorMessage }}</div>
        <div v-if="successMessage" class="text-sm text-green-400">{{ successMessage }}</div>

        <button type="submit" class="w-full py-2 mt-4 bg-[#A87C4F] hover:bg-[#996840] text-white font-semibold rounded">
          Sign up
        </button>
        <p class="mt-2 text-sm text-center">
        <router-link to="/login" class="underline hover:text-gray-300">Log in</router-link>
        </p>
      </form>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user' 

const router = useRouter()
const userStore = useUserStore()

// Form fields
const fullName = ref('')
const email = ref('')
const username = ref('')
const phone = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')
const successMessage = ref('')
const isSubmitting = ref(false)

// Form submission handler
const handleSubmit = async () => {
  // Form validation
  if (!fullName.value || !email.value || !username.value || !phone.value || !password.value || !confirmPassword.value) {
    errorMessage.value = 'All fields are required.'
    return
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match.'
    return
  }

 isSubmitting.value = true 

  try {
    const nameParts = fullName.value.trim().split(' ')
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    const response = await axios.post('http://127.0.0.1:8000/accounts/register/', {
      first_name: firstName,
      last_name: lastName,
      email: email.value,
      username: username.value,
      phone: phone.value,
      password: password.value,
    }, {
      // Add proper headers
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })

    console.log('Registration response:', response.data)
    successMessage.value = 'Account created successfully! Redirecting to login...'
    
    // Auto login if the API returns a token
    if (response.data && response.data.token) {
      userStore.setToken(response.data.token)
      userStore.setUser({
        username: username.value,
        email: email.value,
        first_name: firstName,
        last_name: lastName
      })
      setTimeout(() => router.push('/'), 2000) // Redirect to home instead of login
    } else {
      // Otherwise redirect to login
      setTimeout(() => router.push('/login'), 2000)
    }
  } catch (error) {
    console.error('Registration error:', error)

    if (error.response && error.response.data) {
      if (typeof error.response.data === 'object') {
        if (error.response.data.email) {
          errorMessage.value = `Email error: ${error.response.data.email[0]}`
        } else if (error.response.data.username) {
          errorMessage.value = `Username error: ${error.response.data.username[0]}`
        } else if (error.response.data.error) {
          errorMessage.value = error.response.data.error
        } else if (error.response.data.detail) {
          errorMessage.value = error.response.data.detail
        } else {
          errorMessage.value = 'Registration failed. Please check your information.'
        }
      } else {
        errorMessage.value = 'Registration failed. Please try again.'
      }
    } else {
      errorMessage.value = 'Network error. Please try again later.'
    }
  } finally {
    isSubmitting.value = false // End loading state
  }
}
</script>