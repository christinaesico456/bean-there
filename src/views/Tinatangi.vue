<script setup>
import { ref } from 'vue';

const menu = ref({
  coffee: ['Caramel', 'Dark Mocha', 'Triple Treat'],
  riceMeals: ['Beef Tapa', 'Honey Garlic Chicken', 'Liempo Bacon'],
  nonCoffee: ['Strawberry', 'Blueberry', 'Caramel Vanilla'],
  pasta: ['Creamy Pesto', 'Chicken Alfredo', 'Spanish Sardines']
});
</script>

<template>
  <div class="min-h-screen font-serif text-white bg-[#4E2A16]">
    <!-- Hero Section -->
    <header class="relative flex items-center justify-center h-screen text-white bg-center bg-cover"
      :style="`background-image: url(${cafeBg})`">
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      <div class="relative z-10 text-center">
        <h1 class="text-5xl font-bold">Tinatangi Café</h1>
      </div>
    </header>

    <!-- Location & Hours -->
    <section class="grid grid-cols-2 text-center bg-[#603B24] py-8">
      <div>
        <h2 class="text-xl font-bold">Location</h2>
        <p>10 Juan And Santos Avenue, <br> Salitran, Dasmariñas, Cavite</p>
      </div>
      <div>
        <h2 class="text-xl font-bold">Opening Hours</h2>
        <p>Monday - Sunday: <br> 7 AM - 12 MN</p>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-12 px-6 bg-white text-[#4E2A16] text-center">
      <h2 class="text-2xl font-bold">ABOUT TINATANGI CAFE</h2>
      <p class="max-w-2xl mx-auto mt-2">Tinatangi Café is a coffee shop that provides specialty brews and a cozy ambiance. We focus on quality, craftsmanship, and local flavors. Our passion is to bring people together over a great cup of coffee.</p>
    </section>

    <!-- Café Offerings -->
    <section class="py-12 bg-[#4E2A16] text-center">
      <h2 class="mb-6 text-3xl font-bold">Café Offerings</h2>
      <div class="flex justify-center gap-6">
        <div class="bg-[#603B24] p-4 rounded-lg">☕ Coffee</div>
        <div class="bg-[#603B24] p-4 rounded-lg">🍵 Tea</div>
        <div class="bg-[#603B24] p-4 rounded-lg">🍰 Desserts</div>
        <div class="bg-[#603B24] p-4 rounded-lg">🍽️ Meals</div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="py-12 bg-[#3B2416] text-center">
      <h2 class="mb-6 text-3xl font-bold">Gallery</h2>
      <div class="grid max-w-4xl grid-cols-2 gap-4 mx-auto">
        <div class="w-full h-40 bg-gray-500"></div>
        <div class="w-full h-40 bg-gray-500"></div>
        <div class="w-full h-40 bg-gray-500"></div>
        <div class="w-full h-40 bg-gray-500"></div>
      </div>
    </section>

    <!-- Menu Section -->
    <section class="py-12 bg-[#4E2A16] text-center">
      <h2 class="mb-6 text-3xl font-bold">MENU</h2>
      <div class="grid max-w-4xl grid-cols-2 gap-8 mx-auto">
        <div>
          <h3 class="text-xl font-semibold">COFFEE BASED</h3>
          <ul class="mt-2" v-for="item in menu.coffee" :key="item">
            <li>- {{ item }}</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold">NON-COFFEE BASED</h3>
          <ul class="mt-2" v-for="item in menu.nonCoffee" :key="item">
            <li>- {{ item }}</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold">RICE MEALS</h3>
          <ul class="mt-2" v-for="item in menu.riceMeals" :key="item">
            <li>- {{ item }}</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold">PASTA</h3>
          <ul class="mt-2" v-for="item in menu.pasta" :key="item">
            <li>- {{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-6 text-center bg-[#3B2416]">
      <p>Follow us on Social Media</p>
      <div class="flex justify-center gap-6 mt-2">
        <span>📘 Facebook</span>
        <span>📸 Instagram</span>
        <span>🐦 Twitter</span>
      </div>
    </footer>
  </div>
</template>

  