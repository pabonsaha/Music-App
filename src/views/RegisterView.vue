<template>
    <div id="Register">
        <div class="w-full p-6 justify-content item-center">
            <div class="bg-black p-8 shadow rounded mb-6">
                <h1 class="mb-6 text-lg text-gray-100 font-thin">lets get Rocking</h1>

                <TextInput label="First Name" :labelColor="false" placeholder="John" v-model:input="firstName"
                    input-type="text" :error="errors.first_name?errors.first_name[0]:''" />
                <TextInput label="Last Name" :labelColor="false" placeholder="Co" v-model:input="lastName" input-type="text"
                :error="errors.last_name?errors.last_name[0]:''" />
                <TextInput label="Email" :labelColor="false" placeholder="John@gmail.com" v-model:input="email"
                    input-type="email" :error="errors.email?errors.email[0]:''" />
                <TextInput label="password" :labelColor="false" placeholder="password" v-model:input="password"
                    input-type="password" :error="errors.password?errors.password[0]:''" />
                <TextInput label="Confirm Password" :labelColor="false" placeholder="Confirm Password"
                    v-model:input="confirmPassword" input-type="password" />
                <button @click="register" class="block w-full bg-green-500 text-white py-3 text-sm">Register</button>
            </div>
            <p class="text-center text-md text-gray-900">Already have account?
                <router-link to="/login" class="text-blue-500 no-underline hover:underline">Login</router-link>
            </p>
        </div>
    </div>
</template>

<script setup>
import TextInput from '../components/global/TextInput.vue';
import { ref } from 'vue';
import { useUserStore } from '../stores/user-store';
import  axios  from 'axios';

let firstName = ref(null);
let lastName = ref(null);
let email = ref(null);
let password = ref(null);
let confirmPassword = ref(null);
let errors = ref([]);

const userStore = useUserStore();


const register = async function () {

    errors.value = [];

    try {

        let res = await axios.post('http://music-laravel.test/api/register', {
            email: email.value,
            password: password.value,
            password_confirmation: confirmPassword.value,
            first_name: firstName.value,
            last_name: lastName.value,
        });

        userStore.setUser(res);


    } catch (err) {
        console.log(err);
        errors.value = err.response.data?.errors ?? null;
    }
}


</script>