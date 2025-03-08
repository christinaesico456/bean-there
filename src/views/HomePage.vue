<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
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

const goToProfile = () => {
  router.push({ name: 'UserProfile' });
};

defineExpose({
  goToProfile,
  goToLogin
});
</script>

<template>
  <div class="min-h-screen font-serif text-[#5B3926] bg-[#F5EDE0] text-base">

    <!-- Navbar -->
    <nav class="fixed top-0 z-50 w-full bg-[#F8F5F0] shadow-md py-4">
      <div class="flex items-center justify-between px-8 mx-auto max-w-7xl">

        <!-- Logo -->
        <div><img src="/beanthere-logo.png" alt="Bean There Logo" class="w-12 h-auto"></div>

        <!-- Navigation Links -->
        <div class="hidden space-x-6 text-lg md:flex">
          <a href="#" class="text-[#5B3926] hover:text-[#A67C52] font-semibold">Home</a>
          <a href="#cafe-directory" class="text-[#5B3926] hover:text-[#A67C52] font-semibold">Café Directory</a>
          <a href="#feedbacks" class="text-[#5B3926] hover:text-[#A67C52] font-semibold">Feedbacks</a>
          <a href="#about" class="text-[#5B3926] hover:text-[#A67C52] font-semibold">About</a>
        </div>

        <!-- User Profile and Search Bar -->
        <div class="flex items-center space-x-4">
          <div class="relative">
            <input
              type="text"
              placeholder="Search"
              class="px-4 py-2 text-sm border rounded-full w-36 md:w-64 focus:outline-none focus:ring-2 focus:ring-[#5B3926]"
            />
          </div>

          <button
          @click="$router.push('/profile')"
          class="px-4 py-1 bg-[#5B3926] text-white rounded-full hover:bg-[#A67C52] transition duration-300"
          >
            Profile
          </button>
        </div>
      </div>
    </nav>

    <!-- Home Section -->
    <header class="relative flex items-center justify-start h-[1000px] bg-cover bg-center text-white px-10"
      :style="`background-image: url(${homeCoffee})`">
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
      <div class="relative z-10 max-w-xl">
        <p class="text-xl">Welcome to</p>
        <h1 class="text-6xl font-extrabold tracking-wide">BEAN THERE<span class="text-[#E3B897]">.</span></h1>
      </div>
    </header>

    <!-- Café Directory -->
    <section id="cafe-directory" class="py-32 bg-[#f8f5f0]">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="mb-20 text-4xl font-bold text-[#5B3926]">Café Directory</h2>
        <div class="grid items-center grid-cols-1 gap-6 md:grid-cols-4">
          <div class="flex flex-col items-center transition duration-300 transform hover:scale-105">
            <img :src="tinatangi" alt="Tinatangi Cafe" class="object-cover rounded-lg shadow-lg w-60 h-60">
            <button @click="router.push('/tinatangi')" class="mt-4 px-6 py-2 text-white bg-[#5B3926] rounded-full hover:bg-[#A67C52] text-lg shadow-md transition duration-300">Visit Now</button>
          </div>
          <div class="flex flex-col items-center transition duration-300 transform hover:scale-105">
            <img :src="somedays" alt="Someday Brews" class="object-cover rounded-lg shadow-lg w-60 h-60">
            <button @click="router.push('/someday-brews')" class="mt-4 px-6 py-2 text-white bg-[#003366] rounded-full hover:bg-[#002244] text-lg shadow-md transition duration-300">Visit Now</button>
          </div>
          <div class="flex flex-col items-center transition duration-300 transform hover:scale-105">
            <img :src="hbsb" alt="He Brews She Bakes" class="object-cover rounded-lg shadow-xl w-60 h-60">
            <button @click="router.push('/he-brews-she-bakes')" class="mt-4 px-6 py-2 text-[#5B3926] bg-[#F8F5F0] border border-[#5B3926] rounded-full hover:bg-[#E3D5C5] text-lg shadow-md transition duration-300">Visit Now</button>
          </div>
          <div class="flex flex-col items-center transition duration-300 transform hover:scale-105">
            <img :src="bfc" alt="But First Coffee" class="object-cover rounded-lg shadow-lg w-60 h-60">
            <button @click="router.push('/but-first-coffee')" class="px-6 py-2 mt-4 text-lg text-white transition duration-300 bg-black rounded-full shadow-md hover:bg-gray-800">Visit Now</button>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24 bg-[#5B3926] text-white">
      <div class="flex flex-col items-center max-w-6xl mx-auto md:flex-row">
        <div class="md:w-1/2">
          <h2 class="mb-12 text-4xl font-bold">About Us</h2>
          <p class="text-lg font-medium">Bean There is all about celebrating the vibrant café culture in Dasmariñas, Cavite, making it easier for people to discover and support local coffee spots. We believe every café has a story to tell, from the cozy corners perfect for deep conversations to the carefully crafted brews that keep us coming back. By shining a light on these hidden gems, we’re not just promoting great coffee—we’re building connections, supporting small businesses, and creating a space where everyone can experience the magic of a good café.</p>
        </div>
        <div class="mt-6 md-6 md:mt-0 animate-float">
          <img :src="aboutCoffee" alt="About Coffee">
        </div>
      </div>
    </section>

    <!-- Feedback Section -->
    <section id="feedbacks" class="py-32 px-8 bg-[#F8F5F0]">
      <div class="max-w-6xl mx-auto">
        <h2 class="mb-10 text-4xl font-bold text-center text-[#5B3926]">Feedbacks</h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div class="bg-white text-[#5B3926] p-6 rounded-lg shadow">
            <div class="flex items-center mb-2">
              <span class="mr-2 text-2xl">☕</span>
              <h3 class="font-semibold">Supreme Beans</h3>
            </div>
            <p>Best coffee shop in town!</p>
          </div>
          <div class="bg-white text-[#5B3926] p-10 rounded-xl shadow">
            <div class="flex items-center mb-2">
              <span class="mr-2 text-2xl">☕</span>
              <h3 class="font-semibold">High Quality</h3>
            </div>
            <p>Exceptional taste and texture.</p>
          </div>
          <div class="bg-white text-[#5B3926] p-6 rounded-lg shadow">
            <div class="flex items-center mb-2">
              <span class="mr-2 text-2xl">☕</span>
              <h3 class="font-semibold">Extraordinary</h3>
            </div>
            <p>Nothing compares to this coffee.</p>
          </div>
          <div class="bg-white text-[#5B3926] p-6 rounded-lg shadow">
            <div class="flex items-center mb-2">
              <span class="mr-2 text-2xl">☕</span>
              <h3 class="font-semibold">Affordable Price</h3>
            </div>
            <p>Worth every penny.</p>
          </div>
        </div>
        <div class="flex justify-center mt-10">
          <button
            @click="goToLogin"
            class="px-10 py-5 bg-[#E3B897] text-white rounded-full text-lg font-semibold hover:bg-[#C69575] transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <footer class="bg-[#5B3926] text-white py-10 mt-0 text-center">
      <p>© 2025 Bean There. All rights reserved.</p>
    </footer>
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