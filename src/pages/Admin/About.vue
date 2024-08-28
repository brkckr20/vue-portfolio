<template lang="">
    <div>
        <AdminHeader></AdminHeader>
        <div class="font-poppins mx-auto max-w-7xl">
            <form @submit.prevent="handleUpdate">
                <label class="block">Açıklama</label>
                <textarea v-model="formValues.aciklama" class="border w-full h-28 p-1"></textarea>
                <label class="block">E-Mail</label>
                <input v-model="formValues.email" class="border w-full" />
                <label class="block">Şehir - Ülke</label>
                <input v-model="formValues.sehirulke"  class="border w-full" />
                <button class="bg-violet-500 h-10 text-white px-3 mt-2 hover:bg-violet-700 duration-200 ease-in-out hover:rounded-lg">Kaydet</button>   
        </form>
        </div>
        <notifications position="top right"/>
    </div>
</template>
<script setup>
    import AdminHeader from './AdminHeader.vue';
    import { db, collection, addDoc, getDocs } from '../../../firebase';
    import { doc, updateDoc } from 'firebase/firestore';
    import { useNotification } from "@kyvg/vue3-notification";
    const { notify }  = useNotification();
    import {ref} from 'vue';

    const success = () => {
    notify({
        type : "success",
        title: "Bilgi",
        text: "Güncelleme işlemi başarılı bir şekilde gerçekleştirildi!",
      });
  }

    const formValues = ref({
        aciklama : '',
        email : '',
        sehirulke : ''
    });
    const handleUpdate = async () => {
        await addDoc(collection(db,'hakkimda'), {
            aciklama : formValues.value.aciklama,
            email : formValues.value.email,
            sehirulke : formValues.value.sehirulke
        });
        success();
    }
</script>
<style lang="">
    
</style>