// stores/user.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
  const token = ref(localStorage.getItem('token') || '')
  const user = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bio: '',
    profilePicture: '',
    username: ''
  })
  const isLoading = ref(false)
  const error = ref('')

  // Set user data
  const setUser = (userData) => {
    user.value = userData
  }

  // Set authentication token
  const setToken = (newToken) => {
    token.value = newToken
    localStorage.setItem('token', newToken)
  }

  // Fetch user profile data from the backend
  const fetchUserProfile = async () => {
    isLoading.value = true
    error.value = ''

    try {
      const response = await axios.get('http://127.0.0.1:8000/accounts/profile/', {
        headers: {
          'Authorization': `Bearer ${token.value}`
        }
      })

      // Update user data with response
      setUser(response.data)
      isLoading.value = false
    } catch (err) {
      console.error('Error fetching user profile:', err)
      error.value = err.response?.data?.error || 'Failed to load profile data'
      isLoading.value = false
    }
  }

  // Logout function
  const logout = () => {
    token.value = ''
    localStorage.removeItem('token')
    user.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      bio: '',
      profilePicture: '',
      username: ''
    }
  }

  return {
    token,
    user,
    isLoading,
    error,
    setUser,
    setToken,
    fetchUserProfile,
    logout
  }
})