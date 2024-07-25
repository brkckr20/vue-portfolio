<template>
    <div id="navbar" class="h-[68px] relative z-50" @scroll="handleScroll" :class="{ 'bg-white': position > 0 }">
        <div class="max-w-6xl  mx-auto flex justify-between items-center h-full">
            <div class="text-2xl font-bold font-poppins">
                BURAK {{ position }}
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
    <Transition>
        <AppMenu v-if="isOpen" :isOpen="isOpen"></AppMenu>
    </Transition>
</template>
<script>
import AppMenu from './AppMenu.vue';

export default {
    components : {
        AppMenu
    },
    self : this,
    data : function(){
        return{
            isOpen : false,
            position : 0
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll (event) {
            self.position = window.scrollY;
            console.log(position);
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
    #navbar{
        position: absolute;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
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

scroll olayı kontrol edilecek