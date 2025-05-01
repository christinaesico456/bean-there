<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="mb-6 text-2xl font-bold">Create an Account</h1>
    <form @submit.prevent="handleSubmit" class="p-8 bg-white rounded shadow-md w-96">
      <input v-model="firstName" type="text" placeholder="First Name" class="w-full p-2 mb-4 border rounded" />
      <input v-model="lastName" type="text" placeholder="Last Name" class="w-full p-2 mb-4 border rounded" />
      <input v-model="email" type="email" placeholder="Email" class="w-full p-2 mb-4 border rounded" />
      <input v-model="username" type="text" placeholder="Username" class="w-full p-2 mb-4 border rounded" />
      <input v-model="phone" type="text" placeholder="Phone Number" class="w-full p-2 mb-4 border rounded" />
      <input v-model="password" type="password" placeholder="Password" class="w-full p-2 mb-4 border rounded" />
      <input v-model="confirmPassword" type="password" placeholder="Confirm Password" class="w-full p-2 mb-6 border rounded" />

      <p v-if="errorMessage" class="mb-4 text-sm text-red-500">{{ errorMessage }}</p>
      <p v-if="successMessage" class="mb-4 text-sm text-green-500">{{ successMessage }}</p>

      <button type="submit" class="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        Sign Up
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

// Form fields
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const username = ref('')
const phone = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')
const successMessage = ref('')

// Submit function
const handleSubmit = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (!firstName.value || !lastName.value || !email.value || !username.value || !phone.value || !password.value || !confirmPassword.value) {
    errorMessage.value = 'All fields are required.'
    return
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match.'
    return
  }

  try {
    const response = await axios.post('http://localhost:8000/register/', {
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      username: username.value,
      phone: phone.value,
      password: password.value,
    })

    successMessage.value = 'Account created successfully! Redirecting to login...'
    setTimeout(() => router.push('/login'), 2000)
  } catch (error) {
    errorMessage.value = error.response?.data?.error || 'Registration failed.'
  }
}
</script> 
