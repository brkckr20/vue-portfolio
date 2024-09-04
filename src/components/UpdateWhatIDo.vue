<template lang="">
    <div class="relative z-10 font-poppins" aria-labelledby="modal-title" role="dialog" aria-modal="true">

  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex flex-col sm:items-start ">
            <label class="block">İkon</label>
            <input v-model="item.ikon" class="border w-full p-1" />
            <label class="block">Alt Başlık</label>
            <input v-model="item.altBaslik" class="border w-full p-1" />
            <label class="block">İçerik</label>
            <textarea v-model="item.icerik" class="border w-full p-1 h-28"></textarea>
        </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" @click="handleUpdateItem" class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Güncelle</button>
          <button type="button" @click="$emit('close')" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Kapat</button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>


<script setup>
import { defineProps, defineEmits,ref  } from 'vue';
import { db, collection, addDoc, getDocs ,deleteDoc} from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
const props = defineProps(['item']);
const emit = defineEmits();
const item = ref(props.item); 

const handleUpdateItem = async() => {
  const docRef = doc(db, 'neyaparim', item.value.id); 
  const updatedData = {
            ikon: item.value.ikon,
            altBaslik: item.value.altBaslik,
            icerik: item.value.icerik,
        };
  await updateDoc(docRef, updatedData);
  
}

</script>


<style lang="">
    
</style>