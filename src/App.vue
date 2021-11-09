<template>
  <v-app id="app">
    <v-app-bar>
      <v-app-bar-nav-icon />

      <v-toolbar-title>Current route</v-toolbar-title>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
