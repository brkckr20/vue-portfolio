<template>
    <div id="contact"class="h-screen pt-[68px] flex items-center bg-main">
        <div class="max-w-6xl w-full mx-auto pt-1 py-6">
            <div class="grid gap-x-6 grid-cols-2 font-poppins selection:text-white">
                <div>
                    <h1 class="text-[40px] font-semibold">Let's get in touch</h1>
                    <p class="mt-10 text-xl">I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>
                    <div class="mt-10">
                        <h3 class="text-xl font-semibold">Living In:</h3>
                        <p class="text-lg">0 Shacham street, Los Angeles, USA.</p>
                    </div>
                    <div class="mt-5">
                        <h3 class="text-xl font-semibold">Call:</h3>
                        <p class="text-lg">90 541 621 50 73</p>
                    </div>
                        <ul class="mt-5 text-white flex gap-5">
                            <li><i class="text-secondary fa-xl fa-brands fa-x-twitter"></i></li>
                            <li><i class="text-secondary fa-xl fa-brands fa-facebook"></i></li>
                            <li><i class="text-secondary fa-xl fa-brands fa-instagram"></i></li>
                            <li><i class="text-secondary fa-xl fa-brands fa-linkedin"></i></li>
                            <li><i class="text-secondary fa-xl fa-brands fa-youtube"></i></li>
                        </ul>
                </div>
                <div>
                    <form action="">
                        <h1 class="text-[40px] font-semibold">Estimate your Project?</h1>
                        <div class="mt-10">
                            <label class="block">What is Your Name:</label>
                            <input type="text" class="w-full h-10 border-b border-black bg-transparent outline-none">
                        </div>
                        <div class="mt-8">
                            <label class="block">Your Email Address:</label>
                            <input type="text" class="w-full h-10 border-b border-black bg-transparent outline-none">
                        </div>
                        <div class="mt-8">
                            <label class="block">How can I Help you?:</label>
                            <textarea class="w-full h-28 border-b border-black bg-transparent outline-none" name="" id=""></textarea>
                        </div>
                        <button class="mt-3 bg-black text-white px-8 py-3 hover:bg-black/90 duration-200 ease-in-out">
                            <span class="mr-4">Send</span>
                            <i class="fa-regular fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components : {
    },
    data : function(){
        return {
        }
    },
    methods : {
    }
}
</script>
<style scoped>
</style>