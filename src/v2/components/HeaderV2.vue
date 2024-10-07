<template>
    <div class="bg-green-main max-w-[1376px] mx-auto h-[100px] rounded-full px-6">
        <div class="flex h-full items-center justify-between">
            <a href="/" class="flex items-center gap-3">
                <img src="../../assets/logo1.png" width="70" alt="logo">
                <span class="font-unbounded text-white text-3xl">Burak</span>
            </a>
            <div>
                <ul class="font-unbounded text-white flex gap-5">
                    <li class="active">HOME</li>
                    <li>PAGES</li>
                    <li>PORTFOLIO</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div class="h-full flex items-center justify-center">
                <div class="bg-yellow-main p-2 h-full flex font-unbounded rounded-full">
                    <div class="left"></div>
                    <div class="middle bg-green-main">HIRE ME</div>
                    <div class="right"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .active{
        color: #FAAD1B;
        border-bottom: 2px solid #FAAD1B;
    }
    ul li{
        cursor: pointer;
    }
    ul li:hover {
        color: #FAAD1B;
        transition: all ease-in-out .5s;
    }
</style>