import { defineStore } from 'pinia'
import UserService from '../services/User.service'

export interface UserState {
  user: {
    name: string;
    email: string;
    age: number;
    address: string;
    phone: string;
  } | null;
  loading: boolean;
  error: string | null;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
    loading: false,
    error: null
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
    userProfile: (state) => state.user
  },

  actions: {
    async fetchUserInfo() {
      this.loading = true;
      this.error = null;
      try {
        const userData = await UserService.getUserInfo();
        this.user = userData;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch user data';
      } finally {
        this.loading = false;
      }
    },

    clearUserData() {
      this.user = null;
      this.error = null;
    }
  }
})
