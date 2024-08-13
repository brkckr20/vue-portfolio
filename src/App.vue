<template>
  <div>
    <router-view></router-view>
  </div>

</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  import AppFooter from './components/AppFooter.vue'

  export default {
    components : {
      AppHeader,
      AppFooter,
    }
  }
</script>


<style>
html,body{
  scroll-behavior: smooth;
}

</style>
