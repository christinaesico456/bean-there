<template>
    <div class="flex h-screen">
      <Sidebar />
      <div class="flex-1 p-10 bg-white">
        <h2 class="text-2xl font-bold">User Profile</h2>
  
        <!-- Tabs -->
        <div class="flex mt-4 space-x-6 border-b">
          <button @click="activeTab = 'info'" 
                  :class="{'border-b-2 border-brown-900 font-bold': activeTab === 'info'}" 
                  class="pb-2">User Info</button>
          <button @click="activeTab = 'favorites'" 
                  :class="{'border-b-2 border-brown-900 font-bold': activeTab === 'favorites'}" 
                  class="pb-2">Favorites</button>
          <button @click="activeTab = 'settings'" 
                  :class="{'border-b-2 border-brown-900 font-bold': activeTab === 'settings'}" 
                  class="pb-2">Settings</button>
        </div>
  
        <!-- User Info Section -->
        <div v-if="activeTab === 'info'" class="mt-6">
          <h3 class="text-xl font-semibold">Nina Esico</h3>
          <p class="text-gray-600">User ID: 402091823</p>
          <p class="mt-2">"My love language is coffee."</p>
        </div>
  
        <!-- Favorites Section -->
        <div v-if="activeTab === 'favorites'" class="mt-6">
          <h3 class="text-xl font-semibold">Favorite Cafes</h3>
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div v-for="cafe in favoriteCafes" :key="cafe.name" class="p-4 bg-gray-100 rounded shadow-md">
              <img :src="cafe.image" alt="Cafe Image" class="object-cover w-full h-32 rounded" />
              <p class="mt-2 font-medium">{{ cafe.name }}</p>
              <button class="px-4 py-2 mt-2 text-white rounded bg-brown-900">See Menu</button>
            </div>
          </div>
        </div>
  
        <!-- Settings Section -->
        <div v-if="activeTab === 'settings'" class="mt-6">
          <h3 class="text-xl font-semibold">Edit Profile</h3>
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label class="block text-sm font-medium">First Name</label>
              <input type="text" class="w-full p-2 border rounded" v-model="user.firstName" />
            </div>
            <div>
              <label class="block text-sm font-medium">Last Name</label>
              <input type="text" class="w-full p-2 border rounded" v-model="user.lastName" />
            </div>
            <div>
              <label class="block text-sm font-medium">Email</label>
              <input type="email" class="w-full p-2 border rounded" v-model="user.email" />
            </div>
            <div>
              <label class="block text-sm font-medium">Phone Number</label>
              <input type="text" class="w-full p-2 border rounded" v-model="user.phone" />
            </div>
            <div class="col-span-2">
              <label class="block text-sm font-medium">Bio</label>
              <textarea class="w-full p-2 border rounded" v-model="user.bio"></textarea>
            </div>
          </div>
          <div class="mt-4">
            <button @click="saveChanges" class="px-6 py-2 text-white rounded bg-brown-900">Save Changes</button>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from "@/components/Sidebar.vue";
  
  export default {
    components: { Sidebar },
    data() {
      return {
        activeTab: "info", // Default tab
        user: {
          firstName: "Nina",
          lastName: "Esico",
          email: "nina.esico@gmail.com",
          phone: "09457675047",
          bio: "My love language is coffee."
        },
        favoriteCafes: [
          { name: "Someday Brews", image: "https://via.placeholder.com/150" },
          { name: "He Brews She Bakes", image: "https://via.placeholder.com/150" },
          { name: "Golden Roast", image: "https://via.placeholder.com/150" }
        ]
      };
    },
    methods: {
      saveChanges() {
        alert("Your changes have been saved!");
      }
    }
  };
  </script>
  