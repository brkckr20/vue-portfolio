<template>
    <div class="h-screen pt-[68px] pb-44 flex items-center">
        <div class="max-w-6xl mx-auto pt-1 py-6">
            <PageTitles page="Portfolio" title="Some of my most recent projects"></PageTitles>
            <div class="w-full font-poppins mt-8">
                <div class="flex gap-x-6">
                    <button @click="selectedTab('all')" class="px-4" :class="{'activeTabMenu': activeTab === 'all'}">All</button>
                    <button @click="selectedTab('mobile')" class="px-4" :class="{'activeTabMenu': activeTab === 'mobile'}">Mobile</button>
                    <button @click="selectedTab('desktop')" class="px-4" :class="{'activeTabMenu': activeTab === 'desktop'}">Desktop</button>
                </div>
                <div class="mt-4">
                    <div  v-show="activeTab === 'all'" class="grid grid-cols-3 gap-6">
                        <a href="#" v-for="item in 3" class="relative group">
                            <div class="overflow-hidden block">
                                <img class="group-hover:scale-110 duration-300"src="https://harnishdesign.net/demo/react/callum/demo/images/projects/project-1.jpg">
                            </div>
                            <div class="absolute w-full h-full bg-black/80 top-0 left-0 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                                <div class="w-full flex flex-col h-full items-center justify-center text-white">
                                    <h1>başlık alanı</h1>
                                    <h1>kategori</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                    <p v-show="activeTab === 'mobile'" class="grid grid-cols-3 gap-6">
                        <a href="#" v-for="item in 3" class="relative group">
                            <div class="overflow-hidden block">
                                <img class="group-hover:scale-110 duration-300"src="https://harnishdesign.net/demo/react/callum/demo/images/projects/project-2.jpg">
                            </div>
                            <div class="absolute w-full h-full bg-black/80 top-0 left-0 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                                <div class="w-full flex flex-col h-full items-center justify-center text-white">
                                    <h1>başlık alanı</h1>
                                    <h1>kategori</h1>
                                </div>
                            </div>
                        </a>
                    </p>
                    <p v-show="activeTab === 'desktop'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam. 3</p>
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
            activeTab : 'all'
        }
    },
    methods : {
        selectedTab(tab){
            this.activeTab = tab
        }
    }
}
</script>
<style scoped>
    .activeTabMenu{
        background-color: #f5df4e;
        color: white
    }
</style>