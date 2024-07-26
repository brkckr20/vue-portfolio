<template>
    <div class="bg-black/95 h-screen w-full flex flex-col items-center justify-center ">
        <Transition name="slide-fade" appear>
            <ul v-if="isOpen" class="font-poppins text-2xl text-white flex flex-col gap-6 items-center font-semibold isOpenMenu">
                <li class="hover:text-main duration-200 ease-in-out cursor-pointer">Home</li>
                <li class="hover:text-main duration-200 ease-in-out cursor-pointer">About Me</li>
                <li class="hover:text-main duration-200 ease-in-out cursor-pointer">Resume</li>
                <li class="hover:text-main duration-200 ease-in-out cursor-pointer">Portfolio</li>
                <li class="hover:text-main duration-200 ease-in-out cursor-pointer">FAQ</li>
                <li class="hover:text-main duration-200 ease-in-out cursor-pointer">Contact Me</li>
            </ul>
        </Transition>
        <Transition>
            <ul v-if="isOpen" class="mt-5 text-white flex gap-5 icons">
                <li><i class="fa-xl fa-brands fa-x-twitter"></i></li>
                <li><i class="fa-xl fa-brands fa-facebook"></i></li>
                <li><i class="fa-xl fa-brands fa-instagram"></i></li>
                <li><i class="fa-xl fa-brands fa-linkedin"></i></li>
                <li><i class="fa-xl fa-brands fa-youtube"></i></li>
            </ul>
        </Transition>
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
    .slide-fade-enter-active {
        transition: all 0.3s ease-out;
    }
    .slide-fade-enter-from {
        transform: translateY(-70px);
        opacity: 0;
    }
    .slide-fade-leave-active {
        transition: all 0.3s ease-out;
    }
    .slide-fade-leave-to {
        transform: translateY(0);
        opacity: 0;
    }
    ul.icons>li>i{
        transition: all .2s ease-in-out;
    }
    ul.icons>li>i:hover{
        font-size: 30px;
    }
    ul.icons>li>i.fa-x-twitter:hover{
        color:rgb(29,161,242)
    }
    ul.icons>li>i.fa-facebook:hover{
        color:rgb(24, 119, 242)
    }
    ul.icons>li>i.fa-instagram:hover{
        color:rgb(225, 48, 108)
    }
    ul.icons>li>i.fa-linkedin:hover{
        color:rgb(14, 118, 168)
    }
    ul.icons>li>i.fa-youtube:hover{
        color:rgb(255, 0, 0)
    }
</style>