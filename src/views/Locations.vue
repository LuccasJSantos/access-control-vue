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
        <td colspan="3">
          <div class="d-flex align-center justify-space-between">
            <span class="subtitle-2">{{ group }}</span>

            <v-btn
              icon
              class="success"
              small
              v-if="!addingSensor.map"
              @click="showAddSensor(group)"
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

      <template v-slot:group.summary="{ group }">
        <td class="text-right" v-if="group === addingSensor.map">
          <span class="grey--text">###</span>
        </td>

        <td v-if="group === addingSensor.map">
          <v-text-field v-model="addingSensor.locationName"></v-text-field>
        </td>

        <td v-if="group === addingSensor.map">
          <div class="d-flex align-center justify-space-between">
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

            <v-btn depressed color="success" @click="addSensor"
              >Adicionar</v-btn
            >
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
      ],
      locations: [
        {
          id: "189",
          Mapa: "Prédio 1º andar",
          name: "Laboratório de ADS",
          RFID: ["001"],
        },
        {
          id: "955",
          Mapa: "Prédio 1º andar",
          name: "Laboratório de Eletrônica",
          RFID: ["001"],
        },
        {
          id: "452",
          Mapa: "Prédio 2º andar",
          name: "Laboratório de ADS 2",
          RFID: ["002", "003"],
        },
        {
          id: "530",
          Mapa: "Prédio 1º andar",
          name: "Laboratório de Eletrônica",
          RFID: ["005", "007", "011"],
        },
      ],
      sensors: [],
    };
  },
  methods: {
    showAddSensor(group) {
      this.addingSensor.map = group;
    },
    addSensor() {
      this.locations.push({
        id: parseInt(Math.random() * 999),
        Mapa: this.addingSensor.map,
        name: this.addingSensor.locationName,
        RFID: this.addingSensor.RFID,
      });

      this.addingSensor = {
        map: null,
        locationName: "",
        RFID: [],
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

