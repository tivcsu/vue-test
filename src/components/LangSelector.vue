<template>
  <nav class="lang-selector">
   <select name="lang" @change="setLang">
    <option value="hu">
   Hungarian
    </option>
    <option value="en">
     English
    </option>
   </select>
  </nav>
</template>
<script setup lang="ts">
import { useStore } from '@/stores/store';

const store = useStore();

const setLang = (event: any) => {
  store.setLang(event.target.value)
}
</script>
