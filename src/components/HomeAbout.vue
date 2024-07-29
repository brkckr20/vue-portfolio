<template>
    <div class="h-screen pt-[68px] flex items-center">
        <div class="max-w-6xl mx-auto pt-1 py-6">
            <PageTitles page="About Me" title="Know Me More"></PageTitles>
            <div class="grid grid-cols-3">
                <div class="col-span-2 font-poppins ">
                    <h1 class="text-[32px]">Hi, I'm <span class="font-bold border-b-4 border-main">Burak Çakır</span></h1>
                    <p class="mt-2 text-xl tracking-wider leading-8">I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto.</p>
                </div>
                <div class="font-poppins text-center">
                    <h2 class="text-[136px] text-secondary year relative font-semibold">4</h2>
                    <h3 class="text-[28px]">Years of <span class="font-semibold">Experiance</span></h3>
                </div>
            </div>
            <div class="mt-10 font-poppins flex items-center justify-between">
                <div>
                    <h5 class="text-thirds text-base">Name : </h5>
                    <h2 class="text-secondary font-semibold text-lg">Burak Çakır</h2>
                </div>
                <div>
                    <h5 class="text-thirds text-base">Email : </h5>
                    <h2 class="text-secondary font-semibold text-lg">burak2043@gmail.com</h2>
                </div>
                <div>
                    <h5 class="text-thirds text-base">Date of birth : </h5>
                    <h2 class="text-secondary font-semibold text-lg">11.06.1992</h2>
                </div>
                <div>
                    <h5 class="text-thirds text-base">From : </h5>
                    <h2 class="text-secondary font-semibold text-lg">Denizli, TURKEY</h2>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import PageTitles from './PageTitles.vue';
export default {
    components : {
        PageTitles
    },
    data : function(){
        return {
            
        }
    }
}
</script>
<style scoped>
    .year::before{
        content : "";
        display: inline-block;
        position: absolute;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #f5df4e;
        z-index: -1;
    }
</style>