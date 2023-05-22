<template>
  <div class="login">
    <div class="login-input">
      <label for="username">{{lang[selectedLang].username}}</label>
      <input type="text" id="username" v-model="username">
    </div>
    <div class="login-input">
      <label for="password">{{lang[selectedLang].password}}</label>
      <input type="password" id="password" v-model="password">
    </div>
    <button @click="handleLogin">{{lang[selectedLang].login}}</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import {lang} from '@/lang'
import { useStore } from '@/stores/store';
import { storeToRefs } from 'pinia';
const store = useStore();
const { selectedLang } = storeToRefs(store);

const username = ref('')
const password = ref('')

const handleLogin = () => {
  store.login(username.value, password.value)
}
</script>
