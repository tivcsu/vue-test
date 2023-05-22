<template>
  <nav class="lang-selector">
   <select name="lang">
    <option value="hu">
      <span @click="setLang('hu')">Hungarian</span>
    </option>
    <option value="en">
      <span  @click="setLang('en')">English</span>
    </option>
   </select>
  </nav>
</template>
<script setup lang="ts">
import { useStore } from '@/stores/store';

const store = useStore();

const setLang = (lang: string) => {
  store.setLang(lang)
}
</script>
