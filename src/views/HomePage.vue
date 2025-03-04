<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'; 

import homeCoffee from '/home-coffee.png';
import aboutCoffee from '/about-coffee.png';
import tinatangi from '/Tinatangi.jpg';
import somedays from '/Somedays.jpg';
import hbsb from '/HBSB.jpg';
import bfc from '/bfc.jpg';

const router = useRouter(); 

const goToLogin = () => {
  router.push({ name: 'login' }); 
};

// Search query
const searchQuery = ref('');

// Café list
const cafes = ref([
  { name: 'Tinatangi Cafe', image: tinatangi, route: '/tinatangi' },
  { name: 'Someday Brews', image: somedays, route: '/someday-brews' },
  { name: 'He Brews She Bakes', image: hbsb, route: '/he-brews-she-bakes' },
  { name: 'But First Coffee', image: bfc, route: '/but-first-coffee' }
]);

// Computed property for filtering
const filteredCafes = computed(() => {
  return cafes.value.filter(cafe =>
    cafe.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <div class="min-h-screen font-serif text-[#5B3926] bg-[#F5EDE0] text-base">

    <!--Navbar -->
    <nav class="fixed top-0 z-50 w-full bg-[#F8F5F0] shadow-md py-4">
      <div class="flex items-center justify-between px-8 mx-auto max-w-7xl">
        
        <!-- Logo -->
        <img :src="logo" alt="Logo" class="h-12">

        <!-- Navigation -->
        <div class="hidden space-x-6 text-lg md:flex">
          <a href="#" class="text-[#5B3926] hover:text-[#A67C52] font-semibold transition duration-300">Home</a>
          <a href="#cafe-directory" class="text-[#5B3926] hover:text-[#A67C52] font-semibold transition duration-300">Café Directory</a>
          <a href="#menu" class="text-[#5B3926] hover:text-[#A67C52] font-semibold transition duration-300">Menu</a>
          <a href="#about" class="text-[#5B3926] hover:text-[#A67C52] font-semibold transition duration-300">About</a>
        </div>

        <!-- Search Bar -->
        <div class="relative">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Search cafés..." 
            class="px-4 py-2 text-sm border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-[#5B3926]"
          >
        </div>
      </div>
    </nav>

    <!-- Home Section -->
    <header class="relative flex items-center justify-start h-[750px] bg-cover bg-center text-white px-10"
      :style="`background-image: url(${homeCoffee})`">
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
      <div class="relative z-10 max-w-xl">
        <p class="text-xl">Welcome to</p>
        <h1 class="text-6xl font-extrabold tracking-wide">BEAN THERE<span class="text-[#E3B897]">.</span></h1>
      </div>
    </header>

    <!-- Café Directory -->
    <section id="cafe-directory" class="py-24 bg-[#f8f5f0]">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="mb-20 text-4xl font-bold text-[#5B3926]">Café Directory</h2>
        
        <div v-if="filteredCafes.length === 0" class="text-xl font-semibold text-gray-500">No cafés found.</div>
        
        <div class="grid items-center grid-cols-1 gap-6 md:grid-cols-4">
          <div 
            v-for="cafe in filteredCafes" 
            :key="cafe.name" 
            class="flex flex-col items-center transition duration-300 transform hover:scale-105"
          >
            <img :src="cafe.image" :alt="cafe.name" class="object-cover rounded-lg shadow-lg w-60 h-60">
            <button 
              @click="router.push(cafe.route)" 
              class="mt-4 px-6 py-2 text-white bg-[#5B3926] rounded-full hover:bg-[#A67C52] text-lg shadow-md transition duration-300"
            >
              Visit Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 bg-[#5B3926] text-white">
      <div class="flex flex-col items-center max-w-6xl mx-auto md:flex-row">
        <div class="px-6 md:w-1/2">
          <h2 class="mb-6 text-4xl font-bold">About Us</h2>
          <p class="text-lg font-medium">
            Bean There is all about celebrating the vibrant café culture in Dasmariñas, Cavite, making it easier for people to discover and support local coffee spots.
          </p>
        </div>
        <div class="px-6 mt-6 md:w-1/2 md:mt-0 animate-float">
          <img :src="aboutCoffee" alt="About Coffee">
        </div>
      </div>
    </section>

    <!-- Feedback Section -->
    <section class="py-16 bg-[#F8F5F0] text-center">
      <div class="max-w-6xl mx-auto">
        <h2 class="mb-6 text-4xl font-bold text-[#5B3926]">Feedbacks</h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div class="feedback-card"><h3>Supreme Beans</h3><p>Best coffee shop in town!</p></div>
          <div class="feedback-card"><h3>High Quality</h3><p>Exceptional taste and texture.</p></div>
          <div class="feedback-card"><h3>Extraordinary</h3><p>Nothing compares to this coffee.</p></div>
          <div class="feedback-card"><h3>Affordable Price</h3><p>Worth every penny.</p></div>
        </div>
        <button @click="goToLogin" class="mt-10 px-10 py-2 bg-[#E3B897] text-white rounded-full text-lg font-semibold hover:bg-[#C69575] transition duration-300">Get Started</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-30px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
