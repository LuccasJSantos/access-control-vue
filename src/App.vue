<template>
  <v-app id="app">
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="routes[selectedRoute].name"></v-toolbar-title>

      <v-spacer />

      <user-menu></user-menu>
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
import UserMenu from "./components/UserMenu";

console.log(routes);
export default {
  components: {
    UserMenu,
  },
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
