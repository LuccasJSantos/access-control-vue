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
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      selectedTool: 1,
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>

