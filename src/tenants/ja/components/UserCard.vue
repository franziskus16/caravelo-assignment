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
        <h3 class="UserCard-headerTitle">
          {{ user.name }}
          <span class="badge-member">{{ user.membershipStatus }}</span>
        </h3>
        <span class="badge-active">{{ user.accountStatus }}</span>
      </div>

      <div class="UserCard-body">
        <dl class="UserCard-info DefinitionList">
          <dt>Email:</dt>
          <dd>{{ user.email }}</dd>
          <dt>Phone:</dt>
          <dd>{{ formatPhone(user.phone) }}</dd>
          <dt>Miles Flown:</dt>
          <dd>{{ user.milesFlown }}</dd>
        </dl>
        <div class="UserCard-buttons">
          <button>View Bookings</button>
          <button>Settings</button>
        </div>
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
  milesFlown: number;
  membershipStatus: string;
  accountStatus: string;
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

<style lang="scss">
.UserCard {
  &-buttons {
    display: flex;
    gap: var(--spacing-3xl);
    margin-top: 1rem;
    button {
      background-color: var(--btn-primary-color);
      color: var(--primary-color);
      border: none;
      border-radius: 100px;
      cursor: pointer;
      font-size: var(--size-md);
      padding: var(--spacing-sm) var(--spacing-md);
      width: 140px;
      height: 40px;
      font-family: var(--primary-font);
      line-height: 10px;
      &:hover {
        background-color: var(--btn-secondary-color);
      }
      &:last-child {
        background-color: var(--primary-color);
        color: var(--btn-primary-color);
        border: 2px solid var(--btn-primary-color);
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  .badge-member {
    display: inline-block;
    background-color: var(--badge-primary-color);
    color: var(--primary-color);
    border-radius: 4px;
    padding: 0.2rem 0.6rem;
    font-size: 0.75rem;
    margin-left: 0.5rem;
    text-transform: uppercase;
  }

  .badge-active {
    color: var(--success-primary-color);
    margin-left: auto;
    font-weight: 700;
    font-size: var(--size-md);
  }
}
</style>
