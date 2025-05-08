<template>
  <div class="UserCard">
    <div v-if="loading" class="UserCard is-loading">
      <div class="Spinner"></div>
    </div>

    <div v-else-if="error" class="UserCard has-error">
      {{ error }}
    </div>

    <div v-else-if="user" class="UserCard-card">
      <div class="UserCard-header">
        <div class="UserCard-headerAvatar">{{ getInitials(user.name) }}</div>
        <h3 class="UserCard-headerTitle">{{ user.name }}</h3>
      </div>

      <div class="UserCard-body">
        <dl class="UserCard-info DefinitionList">
          <dt>Email:</dt>
          <dd>{{ user.email }}</dd>
          <dt>Phone:</dt>
          <dd>{{ formatPhone(user.phone) }}</dd>
          <dt>Address:</dt>
          <dd>{{ user.address }}</dd>
          <dt>Age:</dt>
          <dd>{{ user.age }} years</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { UserModule } from "../modules/User.module";

interface User {
  name: string;
  email: string;
  age: number;
  address: string;
  phone: string;
}

export default defineComponent({
  name: "UserCard",
  setup() {
    const user = ref<User | null>(null);
    const loading = ref(true);
    const error = ref<string | null>(null);

    const getInitials = (name: string) => {
      return name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase();
    };

    const formatPhone = (phone: string) => {
      // Assuming phone format: "123-456-7890"
      return phone;
    };

    const loadUser = async () => {
      try {
        user.value = await UserModule.getUserInfo();
      } catch (e) {
        error.value =
          e instanceof Error ? e.message : "Failed to load user data";
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      loadUser();
    });

    return {
      user,
      loading,
      error,
      getInitials,
      formatPhone,
    };
  },
});
</script>

<style scoped></style>
