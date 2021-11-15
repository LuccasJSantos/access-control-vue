<template>
  <v-app id="app">
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="routes[selectedRoute].name"></v-toolbar-title>

      <v-spacer />

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar size="52">
            <v-img
              v-bind="attrs"
              v-on="on"
              src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=712&q=80"
              alt="Someone"
            />
          </v-avatar>
        </template>

        <v-list dense>
          <v-list-item link color="error">
            <v-list-item-icon>
              <v-icon color="error">mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="error--text">Sair</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list nav>
        <v-list-item-group v-model="selectedRoute" color="primary">
          <v-list-item v-for="(route, i) in routes" :key="i">
            <v-list-item-icon>
              <v-icon v-text="route.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                v-text="route.name"
                class="text-left"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view class="" />
    </v-content>
  </v-app>
</template>

<script>
import { routes } from "./router";

console.log(routes);
export default {
  data() {
    return {
      drawer: false,
      selectedRoute: 0,
      routes: routes,
    };
  },
  watch: {
    selectedRoute() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
