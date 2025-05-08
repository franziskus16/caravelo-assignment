import { defineStore } from 'pinia'
import SubscriptionService from '../services/Subscription.service'
import type { Subscription } from '../modules/Subscription.module'

interface SubscriptionState {
  subscription: Subscription | null
  loading: boolean
  error: string | null
}

export const useSubscriptionStore = defineStore('subscription', {
  state: (): SubscriptionState => ({
    subscription: null,
    loading: false,
    error: null
  }),

  getters: {
    subscriptionData: (state) => state.subscription
  },

  actions: {
    async fetchSubscriptionInfo() {
      this.loading = true
      this.error = null
      try {
        this.subscription = await SubscriptionService.getSubscriptionInfo()
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch subscription data'
      } finally {
        this.loading = false
      }
    },

    clearSubscriptionData() {
      this.subscription = null
      this.error = null
    }
  }
})
