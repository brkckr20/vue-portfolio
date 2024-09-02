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
    import {ref,onMounted} from 'vue';
    import {success} from '../../utils'

    const formValues = ref({
        aciklama : 'asd',
        email : 'asdasdasd',
        sehirulke : 'asdasdasd11',
        id : '',
    });
    const items = ref([]);
    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, 'hakkimda'));
        items.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    if (items.value.length > 0) {
        formValues.value.aciklama = items.value[0].aciklama || '';
        formValues.value.email = items.value[0].email || '';
        formValues.value.sehirulke = items.value[0].sehirulke || '';
        formValues.value.id = items.value[0].id || '';
        }
        
    }
    onMounted(fetchData)

    const handleUpdate = async () => {
        // await addDoc(collection(db,'hakkimda'), {
        //     aciklama : formValues.value.aciklama,
        //     email : formValues.value.email,
        //     sehirulke : formValues.value.sehirulke
        // });
                
        try {
      if (formValues.value.id) {
            const docRef = doc(db,'hakkimda',formValues.value.id);
            await updateDoc(docRef, {
                aciklama: formValues.value.aciklama,
                email: formValues.value.email,
                sehirulke: formValues.value.sehirulke,
            })
            success("success","Güncelleme");
      }
    } catch (error) {
      alert(error)
    }
    
    }
</script>
<style lang="">
    
</style>