<template>
  <div>
    <AdminHeader></AdminHeader>
    <div class="font-poppins mx-auto max-w-7xl">
      <div class="grid grid-cols-2 gap-4">
        <form class="mt-2 flex flex-col justify-between" @submit.prevent="handleSave">
        <fieldset class="border p-2">
          <legend class="px-2">Genel Bilgiler</legend>
            <div class="mb-2">
            <label class="block mb-2">Anasayfa Profil Başlık</label>
            <input v-model="form1.baslik" type="text" value="HI, I'M A DEVELOPER" class="border border-black/20 w-full p-1">
          </div>
          <div class="mb-2">
            <label class="block mb-2">TypedJS yazıları <small>(* Aralarında virgül işareti koyularak yazılmalıdır)</small></label>
            <input v-model="form1.typed" type="text" value="Desktop App Developer,Driver,Web Developer" class="border border-black/20 w-full p-1">
          </div>
          <div class="mb-2">
            <label class="block mb-2">Ülke - şehir bilgisi</label>
            <input  v-model="form1.ulkesehir" type="text" value="Denizli / Türkiye" class="border border-black/20 w-full p-1">
          </div>
          <div class="mb-2">
            <label class="block mb-2">Telefon numarası</label>
            <input v-model="form1.tel" type="text" value="+90 541 621 50 73" class="border border-black/20 w-full p-1">
          </div>
          <div class="mt-2">
            <button class="bg-blue-700 hover:bg-blue-800 duration-200 ease-in-out py-2 w-full text-white">Kaydet</button>
          </div>
        </fieldset>
      </form>
      <div>
        <fieldset class="border p-2 h-full">
          <legend class="px-2">Fotoğraf</legend>
            <div class="text-center w-full h-full flex justify-center flex-col items-center">
                <img width="300" height="300" @click="triggerFileInput" class="rounded-full cursor-pointer" :src="imageUrl">
                <input ref="fileInput" @change="onChange($event)" type="file" class="hidden">
                <button class="bg-green-700 hover:bg-green-800 duration-200 ease-in-out py-2 w-full text-white mt-2">Güncelle</button>
            </div>
        </fieldset>
      </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import AdminHeader from './AdminHeader.vue';
  import { ref, onMounted } from 'vue';
  import { db, collection, addDoc, getDocs } from '../../../firebase';

  const items = ref([]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'profil'));
        items.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log(querySnapshot);
        
    } catch (error) {
      
    }
  }
  onMounted(() => {
    fetchData();
    console.log(items);
    
    
  })

  const form1 = ref({
    baslik: '',
    typed: '',
    ulkesehir: '',
    tel: ''
  });
  const fileInput = ref(null);
  const imageUrl = ref('https://harnishdesign.net/demo/react/callum/demo/images/web-developer.jpg');
  const triggerFileInput = () => {
    if (fileInput.value) {
      fileInput.value.click();
    }
  }
  const onChange=(event)=>{
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) =>{
        imageUrl.value = e.target.result;
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = async()=>{
    const docRef = await addDoc(collection(db, 'profil'), form1.value);
    console.log('Belge ID: ', docRef.id);
    alert('Kayıt başarılı!');

  }
</script>
<style scoped>
  input[type="text"]{
    outline-color: rgb(206, 70, 154);
  }
</style>