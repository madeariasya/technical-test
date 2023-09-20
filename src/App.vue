<script>
  import {RouterView} from "vue-router"
  import Sidebar from './components/Sidebar.vue'
  import Card from './components/Card.vue'
  import HomeView from './views/HomeView.vue';
  export default{
    components:{
    Sidebar,
    Card,
    HomeView, 
    RouterView
    },
  }
</script>

<template >
  <div class="w-[1440px] h-[1024px] relative min-h-screen flex bg-gray-50">
    <Sidebar/>
    <RouterView/>
  </div>
</template>

<style scoped></style>
