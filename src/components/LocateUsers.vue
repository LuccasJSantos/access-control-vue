<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        placeholder="Buscar..."
        single-line
      ></v-text-field>
    </v-card-title>

    <v-card-subtitle>
      <v-checkbox v-model="live" label="No campos" color="red"></v-checkbox>
    </v-card-subtitle>

    <v-data-table :headers="headers" :items="filteredUsers" :search="search">
      <template v-slot:item.liveIcon="{ item }">
        <div class="live-dot red darken-2" v-if="item.location"></div>
      </template>

      <template v-slot:item.name="{ item }">
        <div class="d-flex justify-space-between">
          <span>{{ item.name }}</span>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn rounded x-small depressed icon v-on="on" v-bind="attrs">
                <v-icon>mdi-open-in-new</v-icon>
              </v-btn>
            </template>
            <span>Exibir {{ item.name.split(" ")[0] }}</span>
          </v-tooltip>
        </div>
      </template>

      <template v-slot:item.location="{ item }">
        <router-link v-if="item.location" to="locations/8">
          <span
            v-if="item.location"
            class="subtitle-2 text-decoration-underline"
            >{{ item.location.name }}</span
          >
        </router-link>

        <span v-if="!item.location" class="red--text subtitle-2"
          >Indisponível</span
        >
      </template>

      <template v-slot:item.dateIn="{ item }">
        <span v-if="item.dateIn">{{
          new Date(item.dateIn).toLocaleString("pt-br")
        }}</span>

        <span v-if="!item.dateIn" class="red--text subtitle-2"
          >Indisponível</span
        >
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "LocateUsers",
  data() {
    return {
      search: null,
      live: true,
      headers: [
        {
          text: "",
          value: "liveIcon",
        },
        {
          text: "Id",
          align: "end",
          filterable: true,
          value: "id",
        },
        {
          text: "Nome",
          align: "start",
          filterable: true,
          value: "name",
        },
        {
          text: "Localização",
          align: "start",
          filterable: false,
          value: "location",
          sort: (a, b) => (a?.name < b?.name ? -1 : 1),
        },
        {
          text: "Data e Hora de Entrada",
          align: "end",
          filterable: false,
          value: "dateIn",
        },
      ],
      users: [
        {
          id: "001",
          name: "Luccas J S Santos",
          location: null,
          dateIn: null,
          dateOut: null,
        },
        {
          id: "002",
          name: "Lael J Oliveira",
          location: {
            id: "102",
            name: "Laboratório de ADS",
          },
          dateIn: "2021-11-01T14:36:40",
        },
        {
          id: "003",
          name: "Geovanni A Lira",
          location: {
            id: "108",
            name: "Sala dos Professores",
          },
          dateIn: "2021-11-01T14:15:20",
        },
      ],
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) => (this.live ? user.location : true));
    },
  },
};
</script>

<style scoped>
.live-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  animation-name: live-dot-animation;
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
}

@keyframes live-dot-animation {
  0% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.8;
  }
}
</style>
