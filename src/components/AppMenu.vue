<template>
    <div class="absolute inset-0 z-[49] bg-black/95 h-screen w-full flex items-center justify-center ">
        <ul class="font-poppins text-2xl text-white flex flex-col gap-8 items-center font-semibold isOpenMenu">
            <li class="hover:text-main duration-200 ease-in-out cursor-pointer">Home</li>
            <li class="hover:text-main duration-200 ease-in-out cursor-pointer">About Me</li>
            <li class="hover:text-main duration-200 ease-in-out cursor-pointer">Resume</li>
            <li class="hover:text-main duration-200 ease-in-out cursor-pointer">Portfolio</li>
            <li class="hover:text-main duration-200 ease-in-out cursor-pointer">FAQ</li>
            <li class="hover:text-main duration-200 ease-in-out cursor-pointer">Contact Me</li>
        </ul>
    </div>
</template>
<script>
export default {
    props : ["isOpen"]
}
</script>
<style scoped>
    .isOpenMenu{
        position: relative;
        margin-top: -140px;
    }
</style>