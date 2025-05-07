<template>
  <div class="flex flex-col min-h-screen px-10 py-16 bg-white">
    <!-- User Name and Quote -->
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

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-for="cafe in favoriteCafes"
          :key="cafe.id"
          class="flex flex-col items-center p-6 transition duration-300 transform bg-white shadow-lg rounded-2xl hover:scale-105"
        >
          <!-- Image with hover zoom -->
          <div
            class="relative w-64 h-64 mb-6 overflow-hidden rounded-xl"
            :class="cafe.imageBg"
          >
            <img
              :src="cafe.image"
              :alt="cafe.name"
              class="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            />
          </div>

          <!-- See Menu Button -->
          <router-link
            :to="`/cafe/${cafe.id}`"
            class="px-6 py-3 text-base font-semibold transition-all duration-300 rounded-full shadow-md"
            :class="cafe.buttonClass"
          >
            See Menu
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const user = ref({
  name: '',
})

const favoriteCafes = ref([])

// Fetch user details (name)
const getUserProfile = async () => {
  try {
    const response = await axios.get('/api/user/profile/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you're using localStorage for JWT
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
    const response = await axios.get('/api/user-favorites/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    favoriteCafes.value = response.data.map(item => item.cafe)
  } catch (error) {
    console.error('Error fetching favorites:', error)
  }
}

// Fetch both user profile and favorites when the component is mounted
onMounted(() => {
  getUserProfile()
  getFavorites()
})
</script>
