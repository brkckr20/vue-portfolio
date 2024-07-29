<template>
    <div class="flex flex-col w-full items-center font-poppins">
        <h1 class="text-base bg-main px-2 selection:bg-main selection:text-white">{{ page }}</h1>
        <h2 class="text-[40px] mt-4 font-semibold text-secondary selection:bg-main selection:text-white">{{ title }}</h2>
    </div>
</template>
<script>
export default {
    props : ["page","title"]
}
</script>
<style>
    
</style>