
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: function () {
    return {
      id: null,
      token: null,
      firstName: null,
      lastName: null,
      email: null,
      location: null,
      image: null,
      description: null,
    };
  },

  actions: {
    async setUser(res) {
      this.$state.id = res.data.user.id;
      this.$state.token = res.data.token;
      this.$state.firstName = res.data.user.first_name;
      this.$state.lastName = res.data.user.last_name;
      this.$state.email = res.data.user.email;
      this.$state.location = res.data.user.location;
      this.$state.description = res.data.user.description;
    },

    async fetchUser() {
      let res = await axios.post(
        "http://music-laravel.test/api/users" + this.$state.id
      );

      this.$state.id = res.data.user.id;
      this.$state.firstName = res.data.user.firstName;
      this.$state.lastName = res.data.user.lastName;
      this.$state.location = res.data.user.location;
      this.$state.description = res.data.user.description;
    },

    clearUser() {
      this.$state.id = null;
      this.$state.token = null;
      this.$state.firstName = null;
      this.$state.lastName = null;
      this.$state.email = null;
      this.$state.location = null;
      this.$state.description = null;
    },

  },

  persist: true,
});
