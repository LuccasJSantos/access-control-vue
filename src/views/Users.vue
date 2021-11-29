<template>
  <v-container>
    <v-tabs v-model="tab" fixed-tabs>
      <v-tab href="#mobile-tabs-5-1" class="primary--text">
        <v-icon large>mdi-account-plus</v-icon>
      </v-tab>

      <v-tab href="#mobile-tabs-5-2" class="primary--text">
        <v-icon large>mdi-account-edit</v-icon>
      </v-tab>

      <v-tab href="#mobile-tabs-5-3" class="primary--text">
        <v-icon large>mdi-account-search</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="mobile-tabs-5-1">
        <v-card flat>
          <add-user></add-user>
        </v-card>
      </v-tab-item>

      <v-tab-item value="mobile-tabs-5-2">
        <v-card flat>
          <add-user
            :user="{
              name: 'Luccas Josival da Silva Santos',
              cpf: '000.123.345-09',
              active: true,
              rfid: 'A14A845F8',
              roles: ['Professor', 'Funcionário'],
              username: 'LSANTOS',
            }"
          ></add-user>
        </v-card>
      </v-tab-item>

      <v-tab-item value="mobile-tabs-5-3">
        <v-card flat>
          <locate-users></locate-users>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import AddUser from "../components/AddUser.vue";
import LocateUsers from "../components/LocateUsers.vue";

export default {
  name: "Users",
  components: { AddUser, LocateUsers },
  data() {
    return {
      tab: 0,
    };
  },
};
</script>

<style>
</style>
