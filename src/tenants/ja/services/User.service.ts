import CoreUserService from "@/core/services/User.service";

export default class UserService {
  static async getUserInfo() {
    return CoreUserService.getUserInfo();
  }

  static async getMiles() {
    // Simula una llamada a una API o un valor específico para el tenant
    return Promise.resolve(12893);
  }
}
