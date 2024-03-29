<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="locations"
      item-key="id"
      sort-by="name"
      group-by="Mapa"
    >
      <template v-slot:group.header="{ group }">
        <td colspan="4">
          <div class="d-flex align-center justify-space-between">
            <span class="subtitle-2">{{ group }}</span>

            <v-btn
              icon
              class="success"
              small
              v-if="!addingSensor.map"
              @click="showAddLocation(group)"
            >
              <v-icon small color="white">mdi-plus</v-icon>
            </v-btn>
          </div>
        </td>
      </template>

      <template v-slot:item.RFID="{ item }">
        <div class="d-flex chips-gap">
          <v-chip v-for="(rfid, i) in item.RFID" :key="i" color="primary" small>
            {{ rfid }}
          </v-chip>
        </div>
      </template>

      <template v-slot:item.roles="{ item }">
        <div class="d-flex chips-gap">
          <v-chip
            v-for="(role, i) in item.roles"
            :key="i"
            color="secondary"
            small
          >
            {{ role }}
          </v-chip>
        </div>
      </template>

      <template v-slot:group.summary="{ group }">
        <td class="text-right" v-if="group === addingSensor.map">
          <span class="grey--text">###</span>
        </td>

        <td v-if="group === addingSensor.map">
          <v-text-field
            v-model="addingSensor.locationName"
            class="body-2"
          ></v-text-field>
        </td>

        <td v-if="group === addingSensor.map">
          <v-combobox
            v-model="addingSensor.RFID"
            :items="['010', '017', '023', '025']"
            multiple
            chips
            dense
            style="max-width: 300px"
          >
            <template v-slot:selection="data">
              <v-chip small color="success" :key="JSON.stringify(data.item)">
                {{ data.item }}
              </v-chip>
            </template>
          </v-combobox>
        </td>

        <td v-if="group === addingSensor.map">
          <div class="d-flex align-center justify-space-between">
            <v-combobox
              v-model="addingSensor.roles"
              :items="[
                'Todos',
                'Aluno Robótica',
                'Aluno ADS',
                'Aluno Eletrônica',
                'Coordenação',
                'Funcionário',
                'Professor',
              ]"
              multiple
              chips
              dense
              style="max-width: 300px"
            >
              <template v-slot:selection="data">
                <v-chip small color="success" :key="JSON.stringify(data.item)">
                  {{ data.item }}
                </v-chip>
              </template>
            </v-combobox>

            <v-btn icon class="ml-5 success" small @click="addLocation">
              <v-icon small color="white">mdi-plus</v-icon>
            </v-btn>
          </div>
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "Locations",
  data() {
    return {
      addingSensor: {
        map: null,
        locationName: "",
        RFID: [],
        roles: [],
      },
      headers: [
        {
          text: "Id",
          align: "end",
          filterable: true,
          groupable: false,
          value: "id",
        },
        {
          text: "Nome",
          align: "start",
          filterable: true,
          value: "name",
        },
        {
          text: "RFID's",
          align: "start",
          filterable: false,
          value: "RFID",
        },
        {
          text: "Funções",
          align: "start",
          filterable: true,
          value: "roles",
        },
      ],
      locations: [
        {
          id: "189",
          Mapa: "Prédio 1º andar",
          name: "Laboratório de ADS",
          RFID: ["001"],
          roles: ["Aluno ADS", "Funcionário", "Professor"],
        },
        {
          id: "955",
          Mapa: "Prédio 1º andar",
          name: "Laboratório de Eletrônica",
          RFID: ["110"],
          roles: ["Aluno Eletrônica", "Funcionário", "Professor"],
        },
        {
          id: "452",
          Mapa: "Prédio 2º andar",
          name: "Laboratório de ADS 2",
          RFID: ["002", "003"],
          roles: ["Aluno ADS", "Funcionário", "Professor"],
        },
        {
          id: "530",
          Mapa: "Prédio 2º andar",
          name: "Sala de Reuniões",
          RFID: ["008", "013"],
          roles: ["Professor", "Coordenação"],
        },
        {
          id: "538",
          Mapa: "Prédio 2º andar",
          name: "Coordernação",
          RFID: ["016"],
          roles: ["Funcionário", "Coordenação"],
        },
        {
          id: "562",
          Mapa: "Prédio 1º andar",
          name: "Sala de aula 1",
          RFID: ["029"],
          roles: ["Todos"],
        },
        {
          id: "548",
          Mapa: "Prédio 1º andar",
          name: "Sala de aula 2",
          RFID: ["030"],
          roles: ["Todos"],
        },
        {
          id: "545",
          Mapa: "Prédio 1º andar",
          name: "Sala de aula 3",
          RFID: ["031"],
          roles: ["Todos"],
        },
        {
          id: "546",
          Mapa: "Prédio 1º andar",
          name: "Sala de aula 4",
          RFID: ["085"],
          roles: ["Todos"],
        },
        {
          id: "540",
          Mapa: "Prédio 2º andar",
          name: "Sala de aula 5",
          RFID: ["095"],
          roles: ["Todos"],
        },
        {
          id: "561",
          Mapa: "Prédio 1º andar",
          name: "Sala de aula 6",
          RFID: ["099"],
          roles: ["Todos"],
        },
        {
          id: "553",
          Mapa: "Prédio 1º andar",
          name: "Sala de aula 7",
          RFID: ["101"],
          roles: ["Todos"],
        },
        {
          id: "556",
          Mapa: "Prédio 2º andar",
          name: "Sala de aula 8",
          RFID: ["103"],
          roles: ["Todos"],
        },
        {
          id: "559",
          Mapa: "Prédio 2º andar",
          name: "Sala de aula 9",
          RFID: ["104"],
          roles: ["Todos"],
        },
      ],
    };
  },
  methods: {
    showAddLocation(group) {
      this.addingSensor.map = group;
    },
    addLocation() {
      this.locations.push({
        id: parseInt(Math.random() * 999),
        Mapa: this.addingSensor.map,
        name: this.addingSensor.locationName,
        RFID: this.addingSensor.RFID,
        roles: this.addingSensor.roles,
      });

      this.addingSensor = {
        map: null,
        locationName: "",
        RFID: [],
        roles: [],
      };
    },
  },
};
</script>

<style>
.chips-gap {
  gap: 10px !important;
}
</style>

