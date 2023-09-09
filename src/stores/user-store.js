import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const id = null;
  const token = null;
  const firstName = null;
  const lastName = null;
  const email = null;
  const location = null;
  const image = null;
  const description = null;
 

  action:{
    
    async function setUser(res) {
      
    }
  }


  return { count, doubleCount, increment }
})
