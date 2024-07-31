<template>
    <div class="h-screen bg-main pt-[68px] flex items-center">
        <div class="max-w-6xl mx-auto pt-1 py-6">
            <div class="grid grid-cols-7 justify-between items-center">
                <div class="col-span-4 font-poppins">
                    <h1 class="text-5xl font-light selection:text-white">HI, I'M A DEVELOPER</h1>
                    <Typed :options="options">
                        <h1 class="text-[98px] font-semibold selection:text-white typing"></h1>
                    </Typed>
                    <h1 class="selection:text-white">based in Los Angeles, USA.</h1>
                    <div class="flex gap-8 mt-5">
                        <button class="text-white px-7 py-4 bg-black">View My Works</button>
                        <a href="#contact" class="underline hover:no-underline block py-4">Contact me <i class="fa-solid fa-circle-arrow-down ml-2"></i></a>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="border-[18px] border-white rounded-full">
                        <img class="rounded-full" src="https://harnishdesign.net/demo/react/callum/demo/images/web-developer.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Typed } from '@duskmoon/vue3-typed-js';

const options = {
  strings: ["Developer", "Designer", "Driver"],
  loop: true,
  showCursor : false,
  typeSpeed: 150,
};
export default {
    components : {
        Typed
    },
    data : function(){
        return {
            options
        }
    }
}
</script>
<style scoped>
</style>