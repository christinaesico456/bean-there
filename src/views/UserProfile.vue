<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div class="w-1/4 bg-[#3A1C1A] text-white p-8">
      <h2 class="mb-6 text-2xl font-semibold">User Profile</h2>
      <ul class="space-y-4">
        <li @click="activeTab = 'info'" class="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
          <span>👤</span> <span>User Info</span>
        </li>
        <li @click="activeTab = 'favorites'" class="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
          <span>❤️</span> <span>Favorites</span>
        </li>
        <li @click="activeTab = 'settings'" class="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
          <span>⚙️</span> <span>Settings</span>
        </li>
        <li @click="logout" class="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
          <span>⬅️</span> <span>Log Out</span>
        </li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="w-3/4 p-8 bg-white">
      <UserInfo v-if="activeTab === 'info'" />
      <Favorites v-if="activeTab === 'favorites'" />
      <Settings v-if="activeTab === 'settings'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import UserInfo from "@/components/UserInfo.vue";
import Favorites from "@/components/Favorites.vue";
import Settings from "@/components/Settings.vue";
import { useRouter } from "vue-router";

const activeTab = ref("info"); // Default tab
const router = useRouter();

const logout = () => {
  router.push("/login"); // Redirect to login page on logout
};
</script>
