import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      bio: '',
    }
  }),
  actions: {
    updateUser(newUserData) {
      this.user = { ...this.user, ...newUserData }
    }
  }
})
