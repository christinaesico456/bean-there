<script setup>
import { useUserStore } from '@/stores/user'

const { user } = useUserStore()
</script>

<template>
  <div class="flex flex-col items-center p-12">
    <!-- Profile Header -->
    <div class="flex flex-col items-center w-full max-w-3xl mb-10">
      <div class="w-24 h-24 mb-4 overflow-hidden bg-gray-300 rounded-full">
        <img v-if="user.profilePicture" :src="user.profilePicture" alt="Profile Picture" class="object-cover w-full h-full" />
      </div>

      <div class="text-center">
        <h2 class="text-3xl font-bold text-[#3A1C1A]">{{ user.firstName }} {{ user.lastName }}</h2>
      </div>
    </div>

    <!-- Profile Display Section -->
    <div class="w-full max-w-3xl">
      <div class="grid grid-cols-2 gap-6">
        <div>
          <label class="block mb-2 text-gray-700">First Name</label>
          <span class="block w-full p-3 bg-gray-100 border rounded">{{ user.firstName }}</span>
        </div>
        <div>
          <label class="block mb-2 text-gray-700">Last Name</label>
          <span class="block w-full p-3 bg-gray-100 border rounded">{{ user.lastName }}</span>
        </div>
        <div>
          <label class="block mb-2 text-gray-700">Email</label>
          <span class="block w-full p-3 bg-gray-100 border rounded">{{ user.email }}</span>
        </div>
        <div>
          <label class="block mb-2 text-gray-700">Phone Number</label>
          <span class="block w-full p-3 bg-gray-100 border rounded">{{ user.phone }}</span>
        </div>
      </div>

      <div class="mt-6">
        <label class="block mb-2 text-gray-700">Bio</label>
        <span class="block w-full p-3 bg-gray-100 border rounded">{{ user.bio }}</span>
      </div>
    </div>
  </div>
</template>
