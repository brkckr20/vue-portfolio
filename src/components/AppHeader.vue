<template>
    <div id="navbar" class="h-[68px] fixed left-0 w-full top-0 z-40" @scroll="handleScroll" :class="{ 'bg-white': isScrolled > 0 }">
        <div class="max-w-6xl  mx-auto flex justify-between items-center h-full">
            <div class="text-2xl font-bold font-poppins">
                BURAK
            </div>
            <div class="flex items-center justify-between gap-3">
                <i class="fa-solid fa-phone"></i> <span class="font-poppins text-base font-semibold selection:text-white">+90 (541) 621 50 73</span>
                <div @click="isOpen = !isOpen" :class="{ 'is-active': isOpen }" class="hamburger hamburger--elastic p-0 relative z-[52]"
                    aria-label="Menu" role="button" aria-controls="navigation">
                    <div class="hamburger-box">
                        <div class="hamburger-inner"></div>
                    </div>
                </div>
            </div>
        </div>
        <Transition>
            <AppMenu v-if="isOpen" :isOpen="isOpen" class="fixed inset-0 z-[51]"></AppMenu>
        </Transition>
    </div>
    
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
            isScrolled : 0
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
            this.isScrolled = window.scrollY;
    }
  }
}
</script>
<style>
    .hamburger-inner,.hamburger-inner::before,.hamburger-inner::after{
        width: 28px;
    }
    .hamburger.is-active .hamburger-inner, .hamburger.is-active .hamburger-inner:after, .hamburger.is-active .hamburger-inner:before{
        background-color: white;
    }
    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }
</style>
