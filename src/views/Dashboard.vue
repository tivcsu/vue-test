<template>
  <div class="dashboard">
    <div class="user-detail">
      <div class="user-detail__name">Username</div>
      <div class="user-detail__value">{{ user.name }}</div>
    </div>
    <div class="user-detail">
      <div class="user-detail__name">Location</div>
      <div class="user-detail__value">{{ user.location }}</div>
    </div>
    <button @click="handleLogout">Logout</button>
  </div>
</template>
<script setup lang="ts">

import { useStore } from '@/stores/store';
import { storeToRefs } from 'pinia';
const store = useStore();
const { user } = storeToRefs(store)

const handleLogout = () => {
  store.logout()
}
</script>
<style scoped>
.user-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
