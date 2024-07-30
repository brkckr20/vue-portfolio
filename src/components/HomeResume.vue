<template>
    <div class="h-screen pt-[68px] flex items-center">
        <div class="max-w-6xl mx-auto pt-1 py-6">
            <PageTitles page="Resume" title="A summary of My Resume"></PageTitles>
            <div class="grid grid-cols-2 font-poppins gap-7 mt-12">
                <div class="col-span-1">
                    <h1 class="text-3xl font-semibold text-secondary mb-6">My Education</h1>
                    <div class="border-l-2 border-main">
                        <div class="px-3" v-for="item in education">
                            <div class="border-b border-gray-200 mt-3">
                            <h1 class="text-[21px] font-semibold">{{ item.title }}</h1>
                            <h2 class="my-2 text-base">{{item.year}}</h2>
                            <p class="text-base text-thirds mb-3">{{ item.explanation }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-1">
                    <h1 class="text-3xl font-semibold text-secondary mb-6">My Experience</h1>
                    <div class="border-l-2 border-main">
                        <div class="px-3" v-for="item in experience">
                            <div class="border-b border-gray-200 mt-3">
                            <h1 class="text-[21px] font-semibold">{{ item.title }}</h1>
                            <h2 class="my-2 text-base">{{ item.year }}</h2>
                            <p class="text-base text-thirds mb-3">{{ item.explanation }}</p>
                            </div>
                        </div>
                    </div>
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
            education : [{
                    title : "Master in Computer Engineering",
                    year : "Harvard University / 2015 - 2017",
                    explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
                },
                {
                    title : "Bachelor in Computer Engineering",
                    year : "University of California / 2014 - 2015",
                    explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
                },
                {
                    title : "International Science",
                    year : "Harvard University / 2013 - 2014",
                    explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
                }],
            experience : [{
                    title : "Sr. Font End Developer",
                    year : "Apple Inc / 2020 - current",
                    explanation : "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
                },
                {
                    title : "Jr. Font End Developer",
                    year : "Dribbble Inc / 2018 - 2020",
                    explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
                },
                {
                    title : "HTML Developer",
                    year : "Adobe Inc / 2017 - 2018",
                    explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
                }]
        }
    }
}
</script>
<style scoped>

</style>