<template>
  <div class="SubscriptionView">
    <div class="u-flex u-flexGap2">
      <SubscriptionCard />
      <UserCard />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";
import { componentLoader } from "@/utils/loaderHelper";

const SubscriptionCard = componentLoader("SubscriptionCard");
const UserCard = componentLoader("UserCard");

export default defineComponent({
  name: "SubscriptionView",
  setup() {},
  components: {
    SubscriptionCard,
    UserCard,
  },
});
</script>

<style scoped>
.SubscriptionView {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
