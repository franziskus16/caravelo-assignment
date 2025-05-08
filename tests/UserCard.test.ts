import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import UserCard from "../src/core/components/UserCard.vue";
import { UserModule } from "../src/core/modules/User.module";

vi.mock("@/core/modules/User.module", () => ({
  UserModule: {
    getUserInfo: vi.fn(),
  },
}));

const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  age: 35,
  address: "123 Main St",
  phone: "555-1234",
};

describe("UserCard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders user data after load", async () => {
    // Simular respuesta exitosa
    (UserModule.getUserInfo as any).mockResolvedValue(mockUser);

    const wrapper = mount(UserCard);

    // Espera a que se resuelva la promesa
    await new Promise((resolve) => setTimeout(resolve, 0));
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain("John Doe");
    expect(wrapper.text()).toContain("john@example.com");
    expect(wrapper.text()).toContain("123 Main St");
  });

  it("shows error if user loading fails", async () => {
    (UserModule.getUserInfo as any).mockRejectedValue(new Error("API failed"));

    const wrapper = mount(UserCard);

    await new Promise((resolve) => setTimeout(resolve, 0));
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain("API failed");
  });
});
