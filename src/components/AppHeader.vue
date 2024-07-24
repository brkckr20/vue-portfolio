<template>
    <div id="navbar" class="max-w-6xl mx-auto h-[68px] relative z-50">
        <div class="flex justify-between items-center h-full">
            <div class="text-2xl font-bold font-poppins">
                BURAK
            </div>
            <div class="flex items-center justify-between gap-3">
                <i class="fa-solid fa-phone"></i> <span class="font-poppins text-base font-semibold selection:text-white">+90 (541) 621 50 73</span>
                <div @click="isOpen = !isOpen" :class="{ 'is-active': isOpen }" class="hamburger hamburger--elastic p-0 relative"
                    aria-label="Menu" role="button" aria-controls="navigation">
                    <div class="hamburger-box">
                        <div class="hamburger-inner"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <transition name="fade">
        <AppMenu v-show="isOpen" :isOpen="isOpen"></AppMenu>
    </transition>
</template>
<script>
import AppMenu from './AppMenu.vue';

export default {
    components : {
        AppMenu
    },
    data : function(){
        return{
            isOpen : false,
        }
    },
    methods: {},
}
</script>
<style>
    .hamburger-inner,.hamburger-inner::before,.hamburger-inner::after{
        width: 28px;
    }
    #navbar{
        position: absolute;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
    }
    .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>