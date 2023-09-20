<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  props:['detailUser'],
  methods: {
    openPopup() {
      this.isOpen = true;
    },
    closePopup() {
      this.isOpen = false;
    },
  },
};
</script>

<template>
    <transition name="fade">
    <div class="overlay" v-if="isOpen">
        <div class="modal-content w-[605px] h-[436px] flex-col bg-white rounded-[10px] mx-auto mt-[245px] shadow">
            <div class="flex justify-between">
                <div class="w-[500px] flex">
                    <img class="w-[150px] h-[150px] ml-[36px] mt-[31px] rounded-full" :src="detailUser.profile_picture" />
                    <div class="mt-[55px] ml-[37px] grow">
                        <h1 class="w-[271px] h-11 text-zinc-950 text-[40px] font-medium ">{{detailUser.first_name + detailUser.last_name}}</h1> 
                        <h6 class="h-[23px] text-zinc-950 text-xl font-normal">{{detailUser.email}}</h6>
                        <h6 class="h-[23px] text-zinc-950 text-xl font-normal">{{detailUser.phone}}</h6>
                    </div>
                </div>
                <span class="close float-right mr-4 mt-2 text-red-600" @click="closePopup" style="cursor: pointer;">&times;</span>
            </div>
            <div class="flex grow">
                <table class="table-fixed ml-[30px] my-[3rem]">
                    <tbody>
                        <tr>
                          <td>Job</td>
                          <td>: {{detailUser.job}}</td>
                        </tr>
                        <tr>
                          <td>Address</td>
                          <td>: {{detailUser.street}}</td>
                        </tr>
                        <tr>
                          <td>Country</td>
                          <td>: {{detailUser.country}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </transition>
</template>

<style>
.overlay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 98;
    background-color: rgb(0, 0, 0 , 0.3);
}
</style>