// stores/user.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
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

  // Computed property to check if user is logged in
  const isLoggedIn = computed(() => {
    return !!token.value && token.value.length > 0
  })

  // Set user data
  const setUser = (userData) => {
    user.value = userData
  }

  // Set authentication token
  const setToken = (newToken) => {
    if (newToken) {
      token.value = newToken
      localStorage.setItem('token', newToken)
    } else {
      token.value = ''
      localStorage.removeItem('token')
    }
  }

  // Fetch user profile data from the backend
  const fetchUserProfile = async () => {
    if (!token.value) {
      error.value = 'No authentication token available'
      return
    }

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
      
      // If we get a 401 Unauthorized error, the token is invalid
      if (err.response && err.response.status === 401) {
        logout()
      }
      throw err
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
    isLoggedIn,
    setUser,
    setToken,
    fetchUserProfile,
    logout
  }
})