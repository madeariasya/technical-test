<script>
import {RouterLink} from 'vue-router'
export default {
    components:{RouterLink}
}
</script>

<template>
    <!-- Sidebar -->
    <div class="w-[281px] h-[1024px] bg-white shadow">
      <h1 class="text-slate-800 text-3xl font-extrabold mt-8 ml-9 mb-8">heylink.</h1>
        <ul class="pl-10 mt-[32px]">
            <li class="w-[229px] h-[46px] items-center rounded-lg">
              <RouterLink to="/" active-class=" bg-sky-100" class="w-[229px] h-[46px] pl-[10px] rounded-lg flex items-center ">
                <img src="../assets/solarHome.svg" alt="">
                <span class="ml-2.5">Dashboard</span>
              </RouterLink>
            </li>
            <li class="w-[229px] h-[46px] items-center rounded-lg">
              <RouterLink to="/overview" active-class=" bg-sky-100" class="w-[229px] h-[46px] pl-[10px] rounded-lg flex items-center ">
                <img src="../assets/Overview.svg" alt="">
                <span class="ml-2.5">Overview</span>
              </RouterLink>
            </li>
            <li class="w-[229px] h-[46px] items-center rounded-lg">
              <RouterLink to="/province" active-class=" bg-sky-100" class="w-[229px] h-[46px] pl-[10px] rounded-lg flex items-center ">
                <span class="ml-2.5">Province (UI Test 2)</span>
              </RouterLink>
            </li>
        </ul>
    </div>
</template>