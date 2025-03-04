<template>
    <div class="flex">
      <!-- Sidebar -->
      <aside class="w-1/4 bg-[#3b1f1a] text-white p-6">
        <h2 class="text-xl font-bold">User Profile</h2>
        <nav class="mt-6 space-y-4">
          <router-link to="/user-profile" class="block">User Info</router-link>
          <router-link to="/favorites" class="block">Favorites</router-link>
          <router-link to="/settings" class="block">Settings</router-link>
          <router-link to="/" class="block">Log Out</router-link>
        </nav>
      </aside>
  
      <!-- Profile Content -->
      <main class="w-3/4 p-10">
        <h1 class="text-3xl font-bold">Nina Esico</h1>
        <p class="text-gray-600">User ID: 402091823</p>
  
        <div class="grid grid-cols-2 gap-4 mt-6">
          <div>
            <label class="block text-gray-700">First Name</label>
            <input type="text" value="Nina" class="w-full p-2 border rounded" />
          </div>
          <div>
            <label class="block text-gray-700">Last Name</label>
            <input type="text" value="Esico" class="w-full p-2 border rounded" />
          </div>
          <div>
            <label class="block text-gray-700">Email</label>
            <input type="email" value="nina.esico@gmail.com" class="w-full p-2 border rounded" />
          </div>
          <div>
            <label class="block text-gray-700">Phone Number</label>
            <input type="text" value="09457675047" class="w-full p-2 border rounded" />
          </div>
          <div class="col-span-2">
            <label class="block text-gray-700">Bio</label>
            <textarea class="w-full p-2 border rounded">My love language is coffee.</textarea>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <style>
  /* Add any additional styling here */
  </style>
  