<template>
  <div class="SubscriptionView">
    <Hero />
    <div class="Subscription-content u-flex u-flexGap2">
      <SubscriptionCard />
      <UserCard />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { componentLoader } from "@/utils/loaderHelper";

const Hero = componentLoader("Hero");
const SubscriptionCard = componentLoader("SubscriptionCard");
const UserCard = componentLoader("UserCard");

export default defineComponent({
  name: "SubscriptionView",
  components: {
    Hero,
    SubscriptionCard,
    UserCard,
  },
});
</script>
<style scoped>
.Subscription-content {
  max-width: 1112px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  justify-content: center;
}
</style>
