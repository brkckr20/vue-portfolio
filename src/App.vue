<template>
  <div>
    <AppHeader></AppHeader>
    <HomeMain></HomeMain>
    <HomeAbout></HomeAbout>
    <HomeWhatIDo></HomeWhatIDo>
    <HomeResume></HomeResume>
  </div>

</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  import HomeMain from './components/HomeMain.vue'
  import HomeAbout from './components/HomeAbout.vue'
  import HomeWhatIDo from './components/HomeWhatIDo.vue'
  import HomeResume from './components/HomeResume.vue'

  export default {
    components : {
      AppHeader,
      HomeMain,
      HomeAbout,
      HomeWhatIDo,
      HomeResume
    }
  }
</script>


<style>

</style>
