import { useUserStore } from '../stores/user'

export class UserModule {
  private static getStore() {
    return useUserStore()
  }

  static async getUserInfo() {
    const store = this.getStore()
    if (!store.userProfile) {
      await store.fetchUserInfo()
    }
    return store.userProfile
  }

  static clearUserData() {
    const store = this.getStore()
    store.clearUserData()
  }
}