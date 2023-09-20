<script>
export default {
  props: ["cityList"],
  data() {
    return {
      isOpen: false,
    };
  },
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
  <transition name="fade" >
    <div class="overlay" @click="closePopup" v-if="isOpen" >
        <div class="bg-zinc-300 bg-opacity-50 w-[600px] mx-auto mt-[100px]" >
          <div class="table w-full">
            <div class="table-header-group">
              <div
                class="table-row w-[1087px] h-[25px] place-items-center bg-gray-50 shadow table-text-head"
              >
                <div class="table-cell py-[18px] pl-[26px] text-left">ID</div>
                <div class="table-cell py-[18px] text-left">City Name</div>
                <div class="table-cell py-[18px] text-left">Province Name</div>
              </div>
            </div>
            <div class="table-row-group" v-for="city in cityList" :key="city.id">
              <div class="table-row w-[1087px] h-[25px] bg-white shadow">
                <div
                  class="table-cell text-stone-500 content-center text-xs font-normal pl-[26px]"
                >
                  {{ city.id }}
                </div>
                <div class="table-cell text-stone-500 text-xs font-normal">
                  {{ city.name }}
                </div>
                <div class="table-cell text-stone-500 text-xs font-normal">
                  {{ city.provinceName }}
                </div>
              </div>
            </div>
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
    background-color: rgb(0, 0, 0 , 0.3);
}
</style>