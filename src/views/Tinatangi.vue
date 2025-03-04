<template>
  <div class="min-h-screen bg-[#F5EDE0] text-[#5B3926] font-serif">

    <!-- Header -->
    <header class="relative h-[600px] bg-cover bg-center text-white flex items-center justify-center text-5xl font-bold">
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
      <h1 class="relative">Tinatangi Café</h1>
    </header>

    <!-- Location & Hours -->
    <section class="grid grid-cols-2 gap-4 text-center py-8 bg-[#5B3926] text-white">
      <div>
        <h3 class="text-lg font-semibold">Location</h3>
        <p>1524 Abel Santos Avenue, Brgy. Sabang, Dasmariñas, Cavite</p>
      </div>
      <div>
        <h3 class="text-lg font-semibold">Opening Hours</h3>
        <p>Monday - Sunday: 7AM - 11PM</p>
      </div>
    </section>

    <!-- About -->
    <section class="py-16 text-center bg-white">
      <div class="max-w-4xl mx-auto">

        <h2 class="text-3xl font-bold">ABOUT TINATANGI CAFÉ</h2>
        <p class="mt-4">Rich heritage blends with a heart-warming ambiance. Tinatangi Café brings you a carefully crafted selection of coffee and meals to satisfy your cravings.</p>
      </div>
    </section>

    <!-- Café Offerings -->
    <section class="py-12 bg-[#5B3926] text-white text-center">
      <h2 class="mb-6 text-3xl font-bold">Café Offerings</h2>
      <div class="flex justify-center gap-8">
  
      </div>
    </section>

    <!-- Gallery -->
    <section class="py-16 text-center bg-white">
      <h2 class="text-3xl font-bold text-[#5B3926]">Gallery</h2>
      <div class="grid max-w-4xl grid-cols-2 gap-4 mx-auto mt-6">
        <div class="h-40 bg-gray-300"></div>
        <div class="h-40 bg-gray-300"></div>
        <div class="h-20 bg-gray-300"></div>
        <div class="h-20 bg-gray-300"></div>
      </div>
    </section>

    <!-- Menu -->
    <section class="py-16 bg-[#5B3926] text-white">
      <h2 class="mb-6 text-3xl font-bold text-center">MENU</h2>
      <div class="grid max-w-5xl grid-cols-2 gap-6 mx-auto">
        <div>
          <h3 class="text-lg font-semibold">COFFEE BASED</h3>
          <p>Caramel, Dark Mocha, Triple Delight</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold">NON-COFFEE BASED</h3>
          <p>Strawberry, Blueberry, Caramel Vanilla</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold">RICE MEAL</h3>
          <p>Beef Tapa, Honey Garlic Chicken, Liempo Tostado</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold">PASTA</h3>
          <p>Creamy Pesto, Chicken Alfredo, Spanish Sardines</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TinatangiCafe',
};
</script>

<style>

</style>

  