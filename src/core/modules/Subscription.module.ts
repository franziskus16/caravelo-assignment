import { useSubscriptionStore } from '../stores/subscription'

export interface Subscription {
  walletId: string
  commitment: {
    period: {
      lockPeriod: string
      renewPeriod: string | null
      renewable: boolean
      resetOnPlanChange: boolean
    }
    startDate: string
    effectiveDate: string
    endDate: string | null
  }
  plan: {
    name: string
    price: number
    currency: string
    addons: Array<{
      name: string
      price: number
      currency: string
    }>
  }
}

export class SubscriptionModule {
  private static getStore() {
    return useSubscriptionStore()
  }

  static async getSubscriptionInfo(): Promise<Subscription | null> {
    const store = this.getStore()
    if (!store.subscriptionData) {
      await store.fetchSubscriptionInfo()
    }
    return store.subscriptionData
  }

  static clearSubscriptionData() {
    const store = this.getStore()
    store.clearSubscriptionData()
  }
}
