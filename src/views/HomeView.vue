<script>
import axios from 'axios'
import Card from "../components/Card.vue";
import Headers from "../components/Header.vue";
import TableUser from "../components/TableUser.vue";

export default {
  components: {
    Card,
    Headers,
    TableUser,
  },
  data() {
      return {
        baseUrl:"https://api.slingacademy.com/v1/sample-data/users",
        userList:[],
      }
    },
    methods: {
      formatDate(inputDate){
        const dateParts = inputDate.split('-');
        const year = dateParts[0];
        const month = dateParts[1];
        const day = dateParts[2].split('T')[0];

        const formattedDate = `${day} / ${month} / ${year}`;
        return formattedDate;
      },
      async fetchUsers(){
        try {
          const {data} = await axios(this.baseUrl)
          let newData = data.users.map(el => {
            let newDate = this.formatDate(el.date_of_birth)
            el.date_of_birth = newDate
            return el
          })
          this.userList = newData
        } catch (error) {
          console.log(error);
        }
      },
    },
  created() {
    this.fetchUsers()
  },
};
</script>

<template>
  <!-- Main Content -->
  <main class="flex-col w-[1159px]">
    <Headers />
    <Card />
    <div
      class="w-[1087px] h-[366px] bg-white rounded-[10px] shadow mx-auto mt-8"
    >
      <div
        class="w-[1087px] h-[69px] bg-white rounded-tl-[10px] rounded-tr-[10px] pt-[25px] pl-7 shadow"
      >
        <h2 class="sub-head">User List</h2>
      </div>
        <TableUser :userList="userList"/>
      </div>
  </main>
</template>
