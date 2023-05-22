<template>
  <nav class="navbar">
    <div class="navbar-nav">
        <LangSelector />
        <button v-if="token" @click="handleLogout">Logout</button>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import LangSelector from './LangSelector.vue';
import { useStore } from '@/stores/store';


const store = useStore();
const {token} = storeToRefs(store)
const handleLogout = () => {
  store.logout()
}
</script>
