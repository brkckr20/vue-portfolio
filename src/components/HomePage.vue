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
  import HomeMain from './HomeMain.vue';
  import HomeAbout from './HomeAbout.vue';
  import HomeWhatIDo from './HomeWhatIDo.vue';
  import HomeResume from './HomeResume.vue';
  import HomePortfolio from './HomePortfolio.vue';
  import HomeContact from './HomeContact.vue';
  import AppHeader from './AppHeader.vue';
  import AppFooter from './AppFooter.vue';
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