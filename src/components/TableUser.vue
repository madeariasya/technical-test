<script>
import axios from "axios";
import Popup from "../components/Popup.vue";
export default {
    components:{
        Popup
    },
    data() {
      return {
        baseUrl:"https://api.slingacademy.com/v1/sample-data/users",
        detailUser:{}
      }
    },
  methods: {
    openPopup() {
      this.$refs.popup.openPopup();
    },
    async detailUsers(userId){
        try {
          const {data} = await axios(this.baseUrl + "/" + userId)
          this.detailUser = data.user
          this.openPopup()
        } catch (error) {
          console.log(error);
        }
      }
  },
  props: ["userList"],
};
</script>

<template>
  <!-- Table -->
  <div class="table w-full">
    <div class="table-header-group">
      <div
        class="table-row w-[1087px] h-[49px] place-items-center bg-gray-50 shadow table-text-head"
      >
        <div class="table-cell py-[18px] pl-[26px] text-left">ID</div>
        <div class="table-cell py-[18px] text-left">User</div>
        <div class="table-cell py-[18px] text-left">Date Of Birth</div>
        <div class="table-cell py-[18px] text-left">Email</div>
        <div class="table-cell py-[18px] text-left">Job</div>
        <div class="table-cell py-[18px] text-left">Country</div>
        <div class="table-cell py-[18px] text-left">Action</div>
      </div>
    </div>
    <div
      class="table-row-group"
      v-for="user in userList"
      :key="user.id"
    >
      <div class="table-row w-[1087px] h-[49px] bg-white shadow">
        <div
          class="table-cell text-stone-500 content-center text-xs font-normal pl-[26px]"
        >
          {{ user.id }}
        </div>
        <div class="table-cell text-zinc-950 text-xs font-medium">
          <div class="flex pt-3 items-center">
            <img
              class="w-6 h-6 mr-2 rounded-full"
              :src="user.profile_picture"
            />
            <span>{{ user.first_name + user.last_name }}</span>
          </div>
        </div>
        <div class="table-cell text-stone-500 text-xs font-normal">
          {{ user.date_of_birth }}
        </div>
        <div class="table-cell text-zinc-950 text-xs font-medium">
          {{ user.email }}
        </div>
        <div class="table-cell text-stone-500 text-xs font-normal">
          {{ user.job }}
        </div>
        <div class="table-cell text-zinc-950 text-xs font-medium">
          {{ user.country }}
        </div>
        <div class="table-cell">
          <button
            class="w-[84px] h-[22px] bg-white rounded shadow"
            @click="detailUsers(user.id)"
          >
            <p class="text-zinc-950 text-[10px] font-medium">View Detail</p>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Popup -->
  <popup ref="popup" :detailUser="detailUser"/>
</template>
