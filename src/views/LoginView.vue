<template>
    <div id="Register">
        <div class="w-full p-6 justify-content item-center">
            <div class="bg-black p-8 shadow rounded mb-6">
                <h1 class="mb-6 text-lg text-gray-100 font-thin">lets get Rocking</h1>
                <div class="mb-4">
                    <TextInput label="Email" :labelColor="false" placeholder="John@gmail.com" v-model:input="email"
                        input-type="email" :error="errors.email?errors.email[0]:''" />

                    <TextInput label="password" :labelColor="false" placeholder="password" v-model:input="password"
                        input-type="password"  :error="errors.password?errors.password[0]:''"/>
                </div>
                <button @click="login" class="block w-full bg-green-500 text-white py-3 text-sm">Login</button>
                <span v-if="credentialNotMathced" class="text-red-500">
                {{ credentialNotMathced }}
    </span>
            </div>
            <p class="text-center text-md text-gray-900">Don't have an account yet?
                <router-link to="/register" class="text-blue-500 no-underline hover:underline">Register</router-link>
            </p>
        </div>
    </div>
</template>

<script setup>

import axios from 'axios';
import TextInput from '../components/global/TextInput.vue';
import {ref} from 'vue';
import { useUserStore } from '../stores/user-store.js';

let email = ref(null);
let password = ref(null);
let errors = ref([]);
let credentialNotMathced = ref(null);

const userStore = useUserStore();


const login = async function(){

    errors.value = [];

    try{
        
        let res = await axios.post('http://music-laravel.test/api/login',{email:email.value,password: password.value});

        userStore.setUser(res);
        

    }catch(err){
        console.log(err);
        errors.value = err.response.data?.errors??null;

        credentialNotMathced.value = err.response?.data?.error??null;

    }
}

</script>