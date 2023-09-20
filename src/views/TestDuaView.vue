<script>
import TableProvince from "../components/TableProvince.vue";
import { sortProvincesByIdAndName } from "../assets/js/function.js";
export default {
  components: {
    TableProvince,
  },
  data() {
    return {
      provinceList: [],
    };
  },
  methods: {
    async sortProvince(ascending) {
      try {
        const data = await sortProvincesByIdAndName(ascending);
        this.provinceList = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.sortProvince(true);
  },
};
</script>

<template>
  <main class="flex-col w-[1159px] h-[1024px]">
    <div
      class="w-[1087px] h-[366px] bg-white rounded-[10px] shadow mx-auto mt-4"
    >
      <div
        class="w-[1087px] h-[69px] bg-white rounded-tl-[10px] flex justify-between items-center rounded-tr-[10px] px-5 shadow"
      >
        <div>
            <h2 class="sub-head">Province List</h2>
        </div>
        <div>
            <p class="text-zinc-950 text-[10px] font-medium text-center">Sort</p>
            <button class="w-[30px] ml-2 h-[22px] bg-white rounded shadow"
              @click="sortProvince(true)">
                <p class="text-zinc-950 text-[10px] font-medium">asc</p>
              </button>
            <button class="w-[30px] ml-2 h-[22px] bg-white rounded shadow"
              @click="sortProvince(false)">
                <p class="text-zinc-950 text-[10px] font-medium">desc</p>
              </button>
        </div>
      </div>
      <TableProvince :provinceList="provinceList" />
    </div>
  </main>
</template>
