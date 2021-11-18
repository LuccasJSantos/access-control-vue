<template>
  <div>
    <v-text-field dense outlined label="Nome"></v-text-field>

    <v-combobox
      v-model="sensors"
      :items="['001', '002', '003 | Prédio 2 - Sala dos Professores)']"
      label="Leitores"
      outlined
      multiple
      chips
      :dense="!sensors.length"
    >
      <template v-slot:selection="data">
        <v-chip small color="primary" :key="JSON.stringify(data.item)">
          {{ data.item }}
        </v-chip>
      </template>
    </v-combobox>

    <v-menu right v-model="colorPickerMenu" :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <div class="d-flex align-center">
          <v-btn
            :color="areaColor"
            v-on="on"
            v-bind="attrs"
            x-small
            fab
          ></v-btn>

          <span class="ml-4">Cor</span>
        </div>
      </template>

      <v-card>
        <v-color-picker
          :value="areaColor"
          @input="(v) => (tempAreaColor = v)"
        ></v-color-picker>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn @click="colorPickerMenu = false">Cancelar</v-btn>

          <v-btn color="primary" @click="saveColor">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      areaColor: "#2592ff",
      colorPickerMenu: false,
      sensors: ["002"],
      tempAreaColor: this.areaColor,
    };
  },
  methods: {
    saveColor() {
      this.areaColor = this.tempAreaColor;
      this.colorPickerMenu = false;
    },
  },
};
</script>

<style>
</style>

