<script>
import province from "../assets/js/province.js";
import city from "../assets/js/city.js";
import {
  getCityByProvinceId,
  getProvinceNameByCityId,
  sortProvincesByIdAndName,
} from "../assets/js/function.js";
import TableCity from "./TableCity.vue";
export default {
  components: {
    TableCity,
  },
  props:['provinceList'],
  data() {
    return {
      cityList: [],
    };
  },
  methods: {
    openPopup() {
      this.$refs.tableCity.openPopup();
    },
    async fetchCityByProvinceId(provinceId){
        try {
            let data = await getCityByProvinceId(provinceId)
            let provinceName = await getProvinceNameByCityId(data[0].id)
            this.cityList = data.map(el => {
                el.provinceName = provinceName
                return el
            })
            this.openPopup()
        } catch (error) {
            console.log(error);
        }
    },
  }
};
</script>

<template>
  <div class="table w-full">
    <div class="table-header-group">
      <div
        class="table-row w-[1087px] h-[49px] place-items-center bg-gray-50 shadow table-text-head"
      >
        <div class="table-cell py-[18px] pl-[26px] text-left">ID</div>
        <div class="table-cell py-[18px] text-left">Province Name</div>
        <div class="table-cell py-[18px] text-left">Wilayah ID</div>
        <div class="table-cell py-[18px] text-left">City</div>
      </div>
    </div>
    <div
      class="table-row-group"
      v-for="province in provinceList"
      :key="province.id"
    >
      <div class="table-row w-[1087px] h-[25px] bg-white shadow">
        <div
          class="table-cell text-stone-500 content-center text-xs font-normal pl-[26px]"
        >
          {{ province.id }}
        </div>
        <div class="table-cell text-stone-500 text-xs font-normal">
          {{ province.name }}
        </div>
        <div class="table-cell text-zinc-950 text-xs font-medium">
          {{ province.wilayah_id }}
        </div>
        <div class="table-cell">
          <button class="w-[84px] h-[22px] bg-white rounded shadow"
          @click="fetchCityByProvinceId(province.id)">
            <p class="text-zinc-950 text-[10px] font-medium">View Detail</p>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Popup -->
  <TableCity ref="tableCity" :cityList="cityList" />
</template>
