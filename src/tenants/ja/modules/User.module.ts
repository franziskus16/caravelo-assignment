import { UserModule as CoreUserModule } from "@/core/modules/User.module";
import UserService from "../services/User.service";

export const UserModule = {
  async getUserInfo() {
    const user = await CoreUserModule.getUserInfo();
    const miles = await UserService.getMiles();
    return {
      ...user,
      milesFlown: miles,
      membershipStatus: "Premium Member",
      accountStatus: "Active",
    };
  },
};
