<template>
  <div>
    <AppHeader></AppHeader>
    <HomeMain></HomeMain>
    <HomeAbout></HomeAbout>
    <HomeWhatIDo></HomeWhatIDo>
    <HomeResume></HomeResume>
    <HomePortfolio></HomePortfolio>
    <HomeContact></HomeContact>
    <AppFooter></AppFooter>
  </div>

</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  import HomeMain from './components/HomeMain.vue'
  import HomeAbout from './components/HomeAbout.vue'
  import HomeWhatIDo from './components/HomeWhatIDo.vue'
  import HomeResume from './components/HomeResume.vue'
  import HomePortfolio from './components/HomePortfolio.vue'
  import HomeContact from './components/HomeContact.vue'
  import AppFooter from './components/AppFooter.vue'

  export default {
    components : {
      AppHeader,
      HomeMain,
      HomeAbout,
      HomeWhatIDo,
      HomeResume,
      HomePortfolio,
      HomeContact,
      AppFooter,

    }
  }
</script>


<style>
html,body{
  scroll-behavior: smooth;
}

</style>
