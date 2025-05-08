<template>
  <div class="SubscriptionCard">
    <div v-if="loading" class="SubscriptionCard is-loading">
      <div class="Spinner"></div>
    </div>

    <div v-else-if="error" class="SubscriptionCard has-error">
      {{ error }}
    </div>

    <div v-else-if="subscription" class="SubscriptionCard-card">
      <div class="SubscriptionCard-header">
        <h3 class="SubscriptionCard-headerTitle">
          Subscription details
        </h3>
      </div>

      <div class="SubscriptionCard-body">
        <div class="SubscriptionCard-bodyColumn">
          <dl class="SubscriptionCard-details DefinitionList">
            <dt>{{ subscription.plan.name }}</dt>
            <dd> {{ subscription.plan.price }} {{ subscription.plan.currency }}</dd>
            <dt>Start Date:</dt>
            <dd>{{ formatDate(subscription.commitment.startDate) }}</dd>
            <dt>Lock Period:</dt>
            <dd>{{ formatLockPeriod(subscription.commitment.period.lockPeriod) }}</dd>
            <dt>Status:</dt>
            <dd>
              {{ subscription.commitment.period.renewable ? 'Renewable' : 'Non-renewable' }}
            </dd>
          </dl>
        </div>

        <div class="SubscriptionCard-bodyColumn" v-if="subscription.plan.addons.length">
          <div class="SubscriptionCard-addons">
            <h4 class="SubscriptionCard-addonsTitle">Add-ons</h4>
            <dl class="SubscriptionCard-addonsList DefinitionList">
              <template v-for="addon in subscription.plan.addons" :key="addon.name">
                <dt>{{ addon.name }}</dt>
                <dd>{{ addon.price }} {{ addon.currency }}</dd>
              </template>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { SubscriptionModule, type Subscription } from '../modules/Subscription.module'

export default defineComponent({
  name: 'SubscriptionCard',
  setup() {
    const subscription = ref<Subscription | null>(null)
    const loading = ref(true)
    const error = ref<string | null>(null)

    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString()
    }

    const formatLockPeriod = (period: string) => {
      // Convert ISO 8601 duration to human readable format
      // Example: P11M -> 11 Months
      const matches = period.match(/P(\d+)([YMWD])/)
      if (!matches) return period

      const [_, value, unit] = matches
      const units: Record<string, string> = {
        'Y': 'Year',
        'M': 'Month',
        'W': 'Week',
        'D': 'Day'
      }
      return `${value} ${units[unit]}${Number(value) > 1 ? 's' : ''}`
    }

    const loadSubscription = async () => {
      try {
        subscription.value = await SubscriptionModule.getSubscriptionInfo()
      } catch (e) {
        error.value = e instanceof Error ? e.message : 'Failed to load subscription'
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      loadSubscription()
    })

    return {
      subscription,
      loading,
      error,
      formatDate,
      formatLockPeriod
    }
  }
})
</script>
