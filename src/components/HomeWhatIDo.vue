<template>
    <div class="h-screen pt-[68px] flex items-center">
        <div class="max-w-6xl mx-auto pt-1 py-6">
            <PageTitles page="What I Do?" title="How I can help your next project"></PageTitles>
            <div class="flex font-poppins gap-5 mt-12">
                <div v-for="x in 3" class="text-center">
                    <span>
                        <i class="fa-solid fa-palette text-5xl text-main"></i>
                    </span>
                    <h3 class="text-2xl font-semibold text-secondary my-3">Graphic Design</h3>
                    <p class="text-base text-thirds tracking-wider ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.
                    </p>
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

</style>