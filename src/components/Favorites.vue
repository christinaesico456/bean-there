<template>
    <div class="p-6">
      <h2 class="mb-4 text-xl font-semibold">Favorite Cafes</h2>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="cafe in favoriteCafes" :key="cafe.id" class="p-4 border rounded-lg">
          <img :src="cafe.image" class="w-full mb-2 rounded-lg" />
          <h3 class="text-lg text-center">{{ cafe.name }}</h3>
          <button class="w-full bg-[#A37550] text-white py-2 rounded mt-2 hover:bg-[#8B5E3B]">
            See Menu
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const favoriteCafes = ref([
    { id: 1, name: "SOMEDAY BREWS", image: "/cafe1.png" },
    { id: 2, name: "HE BREWS SHE BAKES", image: "/cafe2.png" },
    { id: 3, name: "COFFEE HAVEN", image: "/cafe3.png" }
  ]);
  </script>
  