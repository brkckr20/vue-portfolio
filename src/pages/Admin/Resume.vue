<template lang="">
    <div>
        <AdminHeader></AdminHeader>
        <div class="font-poppins max-w-7xl mx-auto">
            <form @submit.prevent="handleSave">
                <div>
                    <label class="block">İşlem Tipi</label>
                    <input type="radio" id="is" name="tip" value="İş" v-model="formValues.tip">
                    <label class="mx-2" for="is">İş</label>
                    <input type="radio" id="egitim" name="tip" value="Eğitim" v-model="formValues.tip">
                    <label class="mx-2" for="egitim">Eğitim</label><br>
                </div>
                <div class="mt-2">
                    <input placeholder="Başlık" class="w-full border p-1" v-model="formValues.baslik"/>
                    <input placeholder="Kurum" class="w-full border p-1 mt-1" v-model="formValues.kurum"/>
                    <input placeholder="Başlangıç Yılı" class="w-1/3 border p-1 mt-1 mr-1"  v-model="formValues.baslangic"/>
                    <input placeholder="Bitiş Yılı" class="w-1/3 border p-1 mt-1" v-model="formValues.bitis"/>
                    <textarea placeholder="Açıklama" class="w-full border p-1 mt-1" v-model="formValues.aciklama"></textarea>
                </div>
                <button class="bg-violet-500 h-10 text-white px-3 mt-1 hover:bg-violet-700 duration-200 ease-in-out hover:rounded-lg">Kaydet</button>

            </form>
            <table class="table-auto w-full mt-2">
                <thead class="bg-gray-500 text-white">
                    <tr class="border">
                        <th>Tip</th>
                        <th>Başlık</th>
                        <th>Kurum</th>
                        <th>Başlangıç / Bitiş</th>
                        <th>Açıklama</th>
                        <th>İşlem</th>
                    </tr>
                </thead>
                <tbody class="text-center border">
                    <tr v-for="item in items">
                        <td class="border">{{ item.tip }}</td>
                        <td class="border">{{ item.baslik }}</td>
                        <td class="border">{{ item.kurum }}</td>
                        <td class="border">{{ item.baslangic }} / {{ item.bitis === '' ? '...' : item.bitis }}</td>
                        <td class="border">{{ item.aciklama }}</td>
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
    </div>
</template>
<script setup>
    import { db, collection, addDoc, getDocs ,deleteDoc} from '../../../firebase';
    import AdminHeader from './AdminHeader.vue';
    import { ref, onMounted } from 'vue';    
    import { success } from '../../utils'

    const formValues = ref({
        tip : '',
        baslik : '',
        kurum : '',
        baslangic : 0,
        bitis : 0,
        aciklama : '',
    });
    const items = ref([]);
    const handleSave = async () => {
        await addDoc(collection(db,'resume'), {
            tip : formValues.value.tip,
            baslik : formValues.value.baslik,
            kurum : formValues.value.kurum,
            baslangic : formValues.value.baslangic,
            bitis : formValues.value.bitis,
            aciklama : formValues.value.aciklama,
        });
        success("success","Kayıt");
    }
    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, 'resume'));
            items.value = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    }
    onMounted(fetchData);
    const collectionRef = collection(db, 'resume');

    const deleteItem =  async (id) =>{
        const docRef = doc(collectionRef, id);
        await deleteDoc(docRef);
        fetchData();
        success("success", "Silme");
    }
    
</script>
<style lang="">
    
</style>