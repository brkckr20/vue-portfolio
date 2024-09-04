<template lang="">
    <div>
        <AdminHeader></AdminHeader>
        <div class="font-poppins max-w-7xl mx-auto">
            <form @submit.prevent="handleUpdate">
                <label class="block mb-1">İkon</label>
                <input v-model="formValues.ikon" class="border w-full p-1"/>
                <label class="block mb-1">Alt Başlık</label>
                <input v-model="formValues.altBaslik" class="border w-full p-1"/>
                <label class="block mb-1">İçerik</label>
                <input v-model="formValues.icerik" class="border w-full p-1"/>
                <button class="bg-violet-500 h-10 text-white px-3 mt-2 hover:bg-violet-700 duration-200 ease-in-out hover:rounded-lg">Kaydet</button>
            </form>
            <table class="table-auto w-full mt-2">
                <thead class="bg-gray-500 text-white">
                    <tr class="border">
                        <th>İkon</th>
                        <th>Alt Başlık</th>
                        <th>İçerik</th>
                        <th>İşlem</th>
                    </tr>
                </thead>
                <tbody class="text-center border">
                    <tr v-for="item in items">
                        <td class="border"><i :class="item.ikon" class="text-3xl text-main"></i></td>
                        <td class="border">{{ item.altBaslik }}</td>
                        <td class="border">{{ item.icerik }}</td>
                        <td class="border">
                            <button class="mr-2" @click="updateItem(item)">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button @click="deleteItem(item.id)">
                                <i class="fa-solid fa-trash-can text-red-600"></i> 
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <notifications position="top right"/>
        <UpdateWhatIDo v-if="openModal" @close="openModal = false" :item="selectedItem" />
    </div>
</template>
<script setup>
    import AdminHeader from './AdminHeader.vue';
    import UpdateWhatIDo from '../../components/UpdateWhatIDo.vue'
    import { db, collection, addDoc, getDocs ,deleteDoc} from '../../../firebase';
    import { doc, updateDoc } from 'firebase/firestore';
    import {ref,onMounted} from 'vue';
    import { success } from '../../utils'
    const collectionRef = collection(db, 'neyaparim');
    const formValues = ref({
        ikon : '',
        altBaslik : '',
        icerik : '',
        id : '',
    });
    const openModal = ref(false);
    const items = ref([]);
    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, 'neyaparim'));
        items.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    }
    onMounted(fetchData)

    const handleUpdate = async () => {
        await addDoc(collection(db,'neyaparim'), {
            ikon : formValues.value.ikon,
            altBaslik : formValues.value.altBaslik,
            icerik : formValues.value.icerik,
        });
        success("success","Kayıt");
        fetchData();
    }
    
    const deleteItem =  async (id) =>{
        const docRef = doc(collectionRef, id);
        await deleteDoc(docRef);
        fetchData();
        success("success", "Silme");
    }
    const selectedItem = ref({
        id : "",
        altBaslik : "",
        icerik : "",
        ikon : ""
    });
    const updateItem =  async (item) =>{
        openModal.value = true;
        selectedItem.value = item;
    }
</script>
<style lang="">
    
</style>