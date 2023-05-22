import { defineStore } from 'pinia'
import { userdetails } from '@/mockUserDetails';
export const useStore = defineStore('store', {
  state: () => ({
    token: JSON.parse(localStorage.getItem('token')),
    user: {} as {username: string, password: string, location: string, name: string},
    selectedLang: 'hu',
  }),
  actions: {
    login(username: string, password: string) {
      //Login request
      const response = 'SpjcYz8xQyY7w9Jz-DRU'
      this.token = response;
      localStorage.setItem('token', JSON.stringify(response));
      localStorage.setItem('user', JSON.stringify(username));
      this.user = userdetails[username]
      
    },
    logout() {
      localStorage.setItem('token', JSON.stringify(''));
      localStorage.setItem('user', JSON.stringify(''));
      this.token = ''
    },
    setLang(lang: string) {
      this.lang = lang
      
    },
    setActiveUser(username: string) {
      this.user = userdetails[username]
    }
  }
})
