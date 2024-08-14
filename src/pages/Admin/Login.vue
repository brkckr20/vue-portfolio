<template>
    <div class="font-poppins flex flex-col items-center justify-center h-screen bg-main">
        <h1 class="font-bold text-2xl">Giriş Yap</h1>
        <form @submit.prevent="login" class="w-[300px]">
            <div class="mt-10">
                <label class="block">Email</label>
                <input v-model="email" type="text" class="w-full h-10 border-b border-black bg-transparent outline-none">
            </div>
            <div class="mt-8">
                <label class="block">Şifre</label>
                <input v-model="password" type="password" class="w-full h-10 border-b border-black bg-transparent outline-none">
            </div>
            <button class="mt-3 bg-black text-white px-8 py-3 hover:bg-black/90 duration-200 ease-in-out">
                <span class="mr-4">Giriş Yap</span>
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
            </button>
        </form>
    </div>
</template>
<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import {useRouter} from 'vue-router';
import { ref } from 'vue';

export default {
    setup() {
        const email = ref("");
        const password = ref("");
        const router = useRouter();

        const login = async () => {
            try {
                await signInWithEmailAndPassword(auth, email.value, password.value);
                console.log("Giriş başarılı");
                router.push("/admin"); 
            } catch (error) {
                console.error("Giriş başarısız:", error.message);
            }
        };

        return {
            email,
            password,
            login
        };
    }
}
</script>
<style>
    
</style>