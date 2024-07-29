<template>
  <div>
    <AppHeader></AppHeader>
    <HomeMain></HomeMain>
    <HomeAbout></HomeAbout>
  </div>

</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  import HomeMain from './components/HomeMain.vue'
  import HomeAbout from './components/HomeAbout.vue'

  export default {
    components : {
      AppHeader,
      HomeMain,
      HomeAbout
    }
  }
</script>


<style>

</style>
