<template>
  <div class="flex h-screen">
    <!-- Left Side - Image -->
    <div class="w-1/2 bg-center bg-cover" style="background-image: url('/login-coffee.png');"></div>

    <!-- Right Side - Form -->
    <div class="w-1/2 bg-[#2D1B15] flex flex-col justify-center items-center text-white px-10">
      <!-- Logo -->
      <div class="mb-8">
        <div class="flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full">
          <span class="text-black">LOGO</span>
        </div>
      </div>

      <!-- Login Form -->
      <div class="w-full max-w-md">
        <input v-model="usernameOrEmail" type="email" placeholder="email" class="w-full p-3 mb-4 text-black bg-white rounded" />
        <input v-model="password" type="password" placeholder="password" class="w-full p-3 mb-2 text-black bg-white rounded" />
        <div class="mb-4 text-xs text-right text-gray-400 cursor-pointer">Forgot password?</div>

        <button @click="login" class="w-full bg-[#A37550] text-white py-3 rounded hover:bg-[#8B5E3B]">
          Sign in
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
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const usernameOrEmail = ref('')
const password = ref('')
const errorMessage = ref('')

const login = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/login/', {
      username: usernameOrEmail.value,
      password: password.value,
    })

    const token = response.data.token
    localStorage.setItem('token', token)
    userStore.setToken(token)

    router.push('/profile')
  } catch (error) {
    errorMessage.value =
      error.response?.data?.detail || 'Login failed. Please try again.'
  }
}
</script>
