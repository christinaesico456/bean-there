<template>
    <div class="p-6">
      <h2 class="mb-4 text-xl font-semibold">Nina Esico</h2>
      <p class="mb-4 text-sm text-gray-500">User ID: 402091823</p>
      
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-gray-700">First Name</label>
          <input v-model="user.firstName" class="w-full p-2 border rounded" />
        </div>
        <div>
          <label class="block text-gray-700">Last Name</label>
          <input v-model="user.lastName" class="w-full p-2 border rounded" />
        </div>
      </div>
  
      <div class="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label class="block text-gray-700">Email</label>
          <input v-model="user.email" class="w-full p-2 border rounded" />
        </div>
        <div>
          <label class="block text-gray-700">Phone Number</label>
          <input v-model="user.phone" class="w-full p-2 border rounded" />
        </div>
      </div>
  
      <div class="mt-4">
        <label class="block text-gray-700">Bio</label>
        <textarea v-model="user.bio" class="w-full p-2 border rounded"></textarea>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from "vue";
  
  const user = reactive({
    firstName: "Nina",
    lastName: "Esico",
    email: "nina.esico@gmail.com",
    phone: "09457650347",
    bio: "My love language is coffee."
  });
  </script>
  