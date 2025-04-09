<script setup>
import { useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Ensure correct image paths from public folder
const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
];
const router = useRouter();
</script>



<template>
  <div class="min-h-screen font-serif text-[#5B3926] bg-[#F5EDE0] text-base">

    <!--Navbar -->
        <nav class="fixed top-0 z-50 w-full bg-[#F8F5F0] shadow-md py-4">
        <div class="flex items-center justify-between px-8 mx-auto max-w-7xl">
    
    <!-- Logo -->
        <div><img src="/beanthere-logo.png" alt="Bean There Logo" class="w-12 h-auto"></div>


    <!-- Navigation -->
        <div class="hidden space-x-6 text-lg md:flex">
          <a href="#" @click="router.push('/home')" class="text-[#5B3926] hover:text-[#A67C52] font-semibold transition duration-300">Home</a>
          <a href="#cafe-directory" class="text-[#5B3926] hover:text-[#A67C52] font-semibold transition duration-300">Café Directory</a>
          <a href="#menu" class="text-[#5B3926] hover:text-[#A67C52] font-semibold transition duration-300">Menu</a>
          <a href="#about" class="text-[#5B3926] hover:text-[#A67C52] font-semibold transition duration-300">About</a>
        </div>

    <!-- Search Bar -->
        <div class="relative">
          <input type="text" placeholder="Search" class="px-4 py-2 text-sm border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-[#5B3926]">
        </div>
        </div>
        </nav>

    <!-- Header -->
        <header 
          class="relative h-[750px] bg-cover bg-center text-white flex items-center justify-center text-7xl font-bold"
          style="background-image: url('/tinatangibg.jpg'); background-size: cover; background-position: center;">
  
    <!-- Dark overlay for better text visibility -->
        <div class="absolute inset-0 bg-black bg-opacity-30"></div>

    <!-- Semi-transparent black overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>

    <!-- Text container -->
        <div class="relative z-10 text-center">
          <h1 class="mb-2 text-4lx">Tinatangi Café</h1>
            <p class="text-xl italic text-gray-200">"Crafted with care, poured with passion"</p>
        </div>

    <!-- Location and Opening Hours -->
        </header>
          <section class="flex justify-center items-center text-center py-20 bg-[#5B3926] text-white w-full">
        <div class="flex items-center justify-between w-3/4 gap-16"> 

    <!-- Location -->
        <div class="w-1/3 px-8 text-center"> 
          <h3 class="text-2xl font-semibold">Location</h3>
            <p class="text-lg">1524 Abel Santos Avenue, Brgy. Sabang, Dasmariñas, Cavite</p>
        </div>

    <!-- Vertical Line -->
        <div class="h-40 w-[4px] bg-white"></div> 

    <!-- Opening Hours -->
        <div class="w-1/3 px-8 text-center"> 
          <h3 class="text-2xl font-semibold">Opening Hours</h3>
            <p class="text-lg">Monday - Sunday: 7AM - 12MN</p>
          </div>
        </div>
        </section>

    <!-- About -->
        <div class="flex justify-center items-center bg-[#5B3926] h-[550px] px-8">
        <div class="flex flex-col items-center w-full max-w-5xl space-x-12 md:flex-row">
    
    <!-- Image -->
        <div class="flex justify-center md:w-1/3">
          <img src="/logstin.png" alt="Tinatangi Café Logo" class="h-auto scale-150 w-120" />
        </div>

    <!-- Text Content -->
        <div class="text-center md:w-2/3">
          <h2 class="mb-6 text-5xl font-extrabold text-white">
          ABOUT TINATANGI CAFE </h2>
        <p class="mt-6 text-lg leading-relaxed text-white">
        Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood.
        Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
        </p>
      </div>
  </div>
</div>

    <!-- Café Offerings -->
      <section class="py-12 bg-[#5B3926] text-[#ffffff] text-center">
        <h2 class="mb-6 text-4xl font-bold">Café Offerings</h2>
      <div class="flex flex-wrap justify-center gap-3">
      <div class="bg-[#F8E4BE] text-[#411D0F] p-3 rounded-lg shadow-lg w-40 font-semibold flex items-center justify-center h-16 text-sm">
        ☕ Dine-in
      </div>
      <div class="bg-[#F8E4BE] text-[#411D0F] p-3 rounded-lg shadow-lg w-40 font-semibold flex items-center justify-center h-16 text-sm">
        🌿 Outdoor Seating
      </div>
      <div class="bg-[#F8E4BE] text-[#411D0F] p-3 rounded-lg shadow-lg w-40 font-semibold flex items-center justify-center h-16 text-sm">
        🥡 Takeout
      </div>
      <div class="bg-[#F8E4BE] text-[#411D0F] p-3 rounded-lg shadow-lg w-40 font-semibold flex items-center justify-center h-16 text-sm">
        🎉 Reservation / Events
      </div>
      <div class="bg-[#F8E4BE] text-[#411D0F] p-3 rounded-lg shadow-lg w-40 font-semibold flex items-center justify-center h-16 text-sm">
        🚗 Parking
      </div>
    </div>
</section>


    <!-- Gallery -->
    <section class="py-12 bg-[#5B3926] text-[#ffffff] text-center">
      <h2 class="mb-6 text-4xl font-bold">Gallery</h2>
    <div class="flex justify-center items-center h-screen bg-[#5B3926]-900">
    <Swiper
      :modules="[EffectCoverflow, Pagination]"
      effect="coverflow"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="{ clickable: true }"
      class="w-full max-w-6xl"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index" class="flex justify-center">
        <img :src="image" class="w-full h-[500px] object-cover rounded-lg shadow-xl" />
      </SwiperSlide>
    </Swiper>
  </div>
</section>


    <!--MENU-->
      <!--Coffee Based-->
      <section class="py-20 bg-[#5B3926] text-white">
          <h1 class= "mb-8 text-4xl font-bold text-center">OUR MENU</h1>
          <h2 class="mb-8 text-4xl font-bold text-center">Coffee Based</h2>
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-2 gap-x-16 gap-y-8">
      <!--White Mocha-->
      <div class="flex justify-between">
        <div>
          <p class="text-lg font-bold">WHITE MOCHA</p>
          <p>Expresso Shot, White Chocolate, Milk</p>
        </div>
          <p class="text-lg font-semibold">150</p>
      </div>
      <!--Dark Mocha-->
      <div class="flex justify-between">
        <div>
          <p class="text-lg font-bold">DARK MOCHA</p>
          <p>Expresson Shot, Dark Chocolate, Milk</p>
        </div>
        <p class="text-lg font-semibold">150</p>
      </div>
      <!--Americano-->
      <div class="flex justify-between pt-4 border-t">
        <div>
          <p class="text-lg font-bold">AMERICANO</p>
          <p>Expresso Shot, Water</p>
        </div>
        <p class="text-lg font-semibold">99</p>
      </div>
      <!--Cappuccino-->
      <div class="flex justify-between pt-4 border-t">
        <div>
          <p class="text-lg font-bold">CAPPUCCINO</p>
          <p>Expresso, steamed milk, milk form</p>
        </div>
        <p class="text-lg font-semibold">130</p>
      </div>
</div>
</div>
</section>


    <!--Non Coffee Based-->
      <section class="py-20 bg-[#5B3926] text-white">
        <h2 class="mb-8 text-4xl font-bold text-center">Non-Coffee Based</h2>
        <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-2 gap-x-16 gap-y-8">
      <div class="flex justify-between">
      <!--Matcha-->  
        <div>
          <p class="text-lg font-bold">MATCHA</p>
          <p>Matcha, Milk</p>
        </div>
          <p class="text-lg font-semibold">199</p>
      </div>
      <!--Strawberry-->
      <div class="flex justify-between">
        <div>
          <p class="text-lg font-bold">STRAWBERRY</p>
          <p>Strawberry, Milk</p>
        </div>
        <p class="text-lg font-semibold">199</p>
      </div>
      <!--Blueberry-->
      <div class="flex justify-between pt-4 border-t">
        <div>
          <p class="text-lg font-bold">BLUEBERRY</p>
          <p>Blueberry, milk</p>
        </div>
        <p class="text-lg font-semibold">199</p>
      </div>
      <!--Caramel Vanilla-->
      <div class="flex justify-between pt-4 border-t">
        <div>
          <p class="text-lg font-bold">CARAMEL VANILLA</p>
          <p>Caramel Vanilla, Milk</p>
        </div>
        <p class="text-lg font-semibold">199</p>
      </div>
</div>
</div>
</section>

    <!--Bread & Tinatangi Loaf-->
      <section class="py-20 bg-[#5B3926] text-white">
      <h2 class="mb-8 text-4xl font-bold text-center">Bread & Tinatangi Loaf</h2>
        <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-2 gap-x-16 gap-y-8">
      <div class="flex justify-between">
      <!--Muni-Muni Loaf-->
        <div>
          <p class="text-lg font-bold">MUNI-MUNI LOAF</p>
          <p>Plain Loaf</p>
        </div>
          <p class="text-lg font-semibold">140</p>
      </div>
      <!--Padayon Loaf-->
      <div class="flex justify-between">
        <div>
          <p class="text-lg font-bold">PADAYON LOAF</p>
          <p>Chocolate Loaf</p>
        </div>
        <p class="text-lg font-semibold">160</p>
      </div>
      <!--Puhon Loaf-->
      <div class="flex justify-between pt-4 border-t">
        <div>
          <p class="text-lg font-bold">PUHON LOAF</p>
          <p>Cheese Loaf</p>
        </div>
        <p class="text-lg font-semibold">175</p>
      </div>
      <!--Matahom Loaf-->
      <div class="flex justify-between pt-4 border-t">
        <div>
          <p class="text-lg font-bold">MATAHOM LOAF</p>
          <p>Ube Loaf</p>
        </div>
        <p class="text-lg font-semibold">175</p>
      </div>
</div>
</div>
</section>


      <!--Cakes & Pastries-->
        <section class="py-20 bg-[#5B3926] text-white">
          <h2 class="mb-8 text-4xl font-bold text-center">Cakes & Pastries</h2>
        <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-2 gap-x-16 gap-y-8">
      <div class="flex justify-between">
      <!--Red Velvet Cake-->
        <div>
          <p class="text-lg font-bold">RED VELVET CAKE</p>
        </div>
          <p class="text-lg font-semibold">155</p>
      </div>
      <!--Strawberry Cheesecake-->
      <div class="flex justify-between">
        <div>
          <p class="text-lg font-bold">STRAWBERRY CHEESECAKE</p>
        </div>
        <p class="text-lg font-semibold">165</p>
      </div>
      <!--Blueberry Cheesecake-->
      <div class="flex justify-between pt-4 border-t">
        <div>
          <p class="text-lg font-bold">BLUEBERRY CHEESECAKE</p>
        </div>
        <p class="text-lg font-semibold">165</p>
      </div>
      <!--Matcha Cheesecake-->
      <div class="flex justify-between pt-4 border-t">
        <div>
          <p class="text-lg font-bold">MATCHA CHEESECAKE</p>
        </div>
        <p class="text-lg font-semibold">170</p>
      </div>
      <!--Oreo Cheesecake-->
      <div class="flex justify-between pt-4 border-t">
        <div>
          <p class="text-lg font-bold">OREO CHEESECAKE</p>
        </div>
        <p class="text-lg font-semibold">170</p>
      </div>
      <!--Triple Chocolate Cake-->
      <div class="flex justify-between pt-4 border-t">
        <div>
          <p class="text-lg font-bold">TRIPLE CHOCOLATE CAKE</p>
        </div>
        <p class="text-lg font-semibold">210</p>
      </div>
</div>
</div>
</section>

      <!-- Rice Meals -->
        <section class="py-20 bg-[#5B3926] text-white">
          <h2 class="mb-8 text-4xl font-bold text-center">Breakfast  Rice Meal</h2>
          <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-2 gap-x-16 gap-y-8">
      <!-- Liempo Tocino -->
        <div class="flex justify-between">
          <div>
            <p class="text-lg font-bold">LIEMPO TOCINO</p>
            <p class="text-sm text-white-600">Homemade Liempo Tocino with a side of egg served with sinangag rice.</p>
          </div>
            <p class="text-lg font-semibold">199</p>
        </div>
      <!-- Daing na Bangus -->
        <div class="flex justify-between">
          <div>
            <p class="text-lg font-bold">DAING NA BANGUS</p>
            <p class="text-sm text-white-600">Homemade Daing na Bangus with sinangag rice and egg.</p>
          </div>
          <p class="text-lg font-semibold">205</p>
        </div>
      <!-- Sisig-->
        <div class="flex justify-between pt-4 border-t">
          <div>
            <p class="text-lg font-bold">SIZZLING PORK SISIG</p>
            <p class="text-sm text-white-600">Pork, red and white onion, green chill, egg, mixed with our homemade mayo mix served in a sizzing plate with rice.</p>
          </div>
          <p class="text-lg font-semibold">199</p>
        </div>
      <!-- Beef Tapa-->
      <div class="flex justify-between pt-4 border-t">
        <div>
          <p class="text-lg font-bold">BEEF TAPA</p>
          <p class="text-sm text-white-600">Special Beef Tapa with sinangag rice and egg.</p>
        </div>
        <p class="text-lg font-semibold">210</p>
      </div>
</div>
</div>
</section>

    <!-- Pasta Section -->
      <section class="py-20 bg-[#5B3926] text-white">
      <h2 class="mb-8 text-4xl font-bold text-center">Pasta</h2>
      <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-2 gap-x-16 gap-y-8">
      <!-- Bolognese -->
      <div class="flex justify-between">
        <div>
          <p class="text-lg font-bold">BOLOGNESE</p>
          <p class="text-sm text-white-600">Spaghetti pasta topped with our homemade Bolognese sauce topped with grated parmesan along with toasted bread</p>
        </div>
        <p class="text-lg font-semibold">225</p>
      </div>
      <!-- Charlie Chan -->
      <div class="flex justify-between">
        <div>
          <p class="text-lg font-bold">CHARLIE CHAN</p>
          <p class="text-sm text-white-600">Spaghetti pasta tossed with our homemade oriental sauce, Shitake mushrooms, and peanut topped with spring onions</p>
        </div>
        <p class="text-lg font-semibold">250</p>
      </div>
      <!-- Spanish Sardines -->
      <div class="flex justify-between pt-4 border-t">
        <div>
          <p class="text-lg font-bold">SPANISH SARDINES</p>
          <p class="text-sm text-white-600">Spaghetti pasta tossed with seasoned olive oil, Spanish sardines, and fresh basil with toasted bread</p>
        </div>
        <p class="text-lg font-semibold">235</p>
      </div>
      <!-- Creamy Pesto -->
      <div class="flex justify-between pt-4 border-t">
        <div>
          <p class="text-lg font-bold">CREAMY PESTO</p>
          <p class="text-sm text-white-600">Linguini pasta tossed with our homemade pesto sauce and grilled chicken topped with crushed cashew, parmesan along with toasted bread</p>
        </div>
        <p class="text-lg font-semibold">265</p>
      </div>
      <!-- Chicken Alfredo -->
      <div class="flex justify-between pt-4 border-t">
        <div>
          <p class="text-lg font-bold">CHICKEN ALFREDO</p>
          <p class="text-sm text-white-600">Linguini pasta tossed with our homemade alfredo sauce and grilled chicken topped with grated parmesan along with toasted bread</p>
        </div>
        <p class="text-lg font-semibold">245</p>
      </div>
    </div>
  </div>
</section>

      <!-- Footer -->
        <footer class="text-sm text-[#5B3926] py-6 border-t-8 border-[#5B3926]">
        <div class="flex flex-col items-center justify-between px-6 mx-auto max-w-7xl md:flex-row">
        <!-- Left Side: Logo and Socials -->
        <div class="flex flex-col md:items-start">
          <div class="flex space-x-4">
            <a href="https://www.facebook.com/TinatangiCafe" target="_blank">
              <img src="/fblogo.png" alt="Facebook" class="w-10 h-10">
            </a>
            <a href="https://www.instagram.com/tinatangi_cafe/" target="_blank">
              <img src="/instagramlogo.png" alt="Instagram" class="w-10 h-10">
            </a>
            <a href="https://www.tiktok.com/@tinatangi.cafe" target="_blank">
              <img src="/tiktoklogo.png" alt="TikTok" class="w-10 h-10">
            </a>
          </div>
        </div>

      <!-- Right Side: Links & Contact Info -->
        <div class="mt-6 text-center md:text-right md:mt-0">
          <nav class="mb-4">
            <ul class="flex flex-col space-y-2 text-lg md:flex-row md:space-y-0 md:space-x-6">
              <li><a href="#" class="hover:text-[#5B3926]">Home</a></li>
              <li><a href="#" class="hover:text-[#5B3926]">Menu</a></li>
            </ul>
          </nav>
          <p class="text-sm mt-4 text-[#5B3926]">
            13 Jose Abad Santos Avenue, Brgy. Salawag, Cavite, Dasmariñas, Philippines, 4114 <br>
            <a href="mailto:tinatangicafe@gmail.com" class="hover:text-[#5B3926]">tinatangicafe@gmail.com</a>
          </p>
          <p class="text-sm mt-4 text-[#5B3926]">&copy; 2024 Tinatangi Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TinatangiCafe",
};
</script>
<style scoped>
/* Ensure Swiper respects Tailwind's styles */
:deep(.swiper-slide) {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>