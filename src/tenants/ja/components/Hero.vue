<template>
  <section class="Hero">
    <span class="Hero-badge">NEW SUBSCRIPTION PROGRAM</span>
    <h1 class="Hero-title">Unlimited Travel Awaits</h1>
    <p class="Hero-subtitle">
      Explore new destinations with our exclusive travel plan.
    </p>
    <div class="Hero-buttons">
      <button>
        Subscribe Now
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="#ffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button>View Destinations</button>
    </div>
    <div class="Hero-features">
      <div class="Hero-feature">
        <svg
          class="check-circle"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1B365D"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span>Flexible bookings</span>
      </div>
      <div class="Hero-feature">
        <svg
          class="check-circle"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1B365D"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span>Exclusive Discounts</span>
      </div>
      <div class="Hero-feature">
        <svg
          class="check-circle"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1B365D"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span>Priority boarding</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.Hero {
  padding: 64px 120px;
  background-color: var(--title-color);
  color: var(--primary-color);
  text-align: left;
  border-radius: var(--spacing-md);
  margin-bottom: 64px;
  &-badge {
    background-color: var(--badge-primary-color);
    padding: 8px;
    min-width: 140px;
  }
  &-title {
    font-size: 64px;
    font-weight: bold;
    margin-bottom: 0;
  }

  &-subtitle {
    font-size: 48px;
    margin-top: 0.5rem;
  }
  &-buttons {
    display: flex;
    gap: 24px;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    button {
      background-color: var(--btn-primary-color);
      color: var(--primary-color);
      border: none;
      border-radius: 100px;
      cursor: pointer;
      font-size: var(--size-lg);
      padding: var(--spacing-lg);
      font-family: var(--primary-font);
      line-height: 10px;
      display: flex;
      align-items: center;
      &:hover {
        background-color: var(--btn-secondary-color);
      }
      &:last-child {
        background-color: transparent;
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  &-features {
    display: flex;
    flex-direction: row;
    gap: 20px;
    .Hero-feature {
      font-size: var(--size-lg);
      display: flex;
      gap: 4px;
      .check-circle {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--primary-color);
        color: var(--text-color);
        font-weight: bold;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        font-size: 14px;
        box-shadow: 0 0 0 1px #ccc;
      }
    }
  }
}
</style>
