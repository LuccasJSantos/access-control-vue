<template>
  <v-content>
    <v-btn-toggle rounded group v-model="selectedTool">
      <v-btn icon>
        <v-icon>mdi-image</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-cursor-default</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-format-text</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-crop-square</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-attachment</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-hand-back-right</v-icon>
      </v-btn>

      <v-btn icon color="error">
        <v-icon color="error">mdi-delete-forever</v-icon>
      </v-btn>
    </v-btn-toggle>

    <v-row class="mt-2">
      <v-col cols="9">
        <v-card class="pa-2">
          <v-img src="@/assets/fatec_map.png"></v-img>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="d-flex flex-column pa-2">
          <v-card-title>Mapa</v-card-title>

          <v-combobox
            v-model="map"
            :items="maps"
            label="Visualizando"
            outlined
            dense
          >
            <template v-slot:item="{ item }">
              {{ item.name }}
            </template>

            <template v-slot:selection="data">
              {{ data.item.name }}
            </template>
          </v-combobox>

          <v-divider></v-divider>

          <v-card-title
            >Propriedades
            <span class="ml-2 grey--text">(Área)</span></v-card-title
          >

          <area-properties></area-properties>
        </v-card>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import AreaProperties from "@/components/AreaProperties";

export default {
  components: {
    AreaProperties,
  },
  data() {
    return {
      map: null,
      maps: [
        {
          id: "001",
          name: "Prédio 1º andar",
        },
        {
          id: "002",
          name: "Prédio 2º andar",
        },
      ],
      selectedTool: 1,
    };
  },
};
</script>

<style scoped>
</style>

