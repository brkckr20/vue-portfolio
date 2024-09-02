<template lang="">
    <div>
        <AdminHeader></AdminHeader>
        <div class="font-poppins max-w-7xl mx-auto">
            <form @submit.prevent="handleUpdate">
                <label class="block mb-1">Başlık</label>
                <input v-model="formValues.baslik" class="border w-full p-1"/>
                <label class="block mb-1">İkon</label>
                <input v-model="formValues.ikon" class="border w-full p-1"/>
                <label class="block mb-1">Alt Başlık</label>
                <input v-model="formValues.altBaslik" class="border w-full p-1"/>
                <label class="block mb-1">İçerik</label>
                <input v-model="formValues.icerik" class="border w-full p-1"/>
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
        baslik : 'asd',
        ikon : 'asdasdasd',
        altBaslik : 'asdasdasd11',
        icerik : 'asdaasdsdas1111d11',
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
        formValues.value.baslik = items.value[0].baslik || '';
        formValues.value.ikon = items.value[0].ikon || '';
        formValues.value.altBaslik = items.value[0].altBaslik || '';
        formValues.value.icerik = items.value[0].icerik || '';
        formValues.value.id = items.value[0].id || '';
        }
        
    }
    onMounted(fetchData)

    const handleUpdate = async () => {
        await addDoc(collection(db,'neyaparim'), {
            baslik : formValues.value.baslik,
            ikon : formValues.value.ikon,
            altBaslik : formValues.value.altBaslik,
            icerik : formValues.value.icerik,
        });
        success("success","Kayıt")
                
    //     try {
    //   if (formValues.value.id) {
    //         const docRef = doc(db,'hakkimda',formValues.value.id);
    //         await updateDoc(docRef, {
    //             aciklama: formValues.value.aciklama,
    //             email: formValues.value.email,
    //             sehirulke: formValues.value.sehirulke,
    //         })
    //         success("success","Güncelleme");
    //   }
    // } catch (error) {
    //   alert(error)
    // }
    
    }
</script>
<style lang="">
    
</style>