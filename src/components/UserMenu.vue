<template>
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

    <v-card>
      <div class="d-flex flex-column align-start pa-4">
        <span class="subtitle-2">Lael Jader de Oliveira</span>

        <span class="caption grey--text text--darken-2">Logged in</span>
      </div>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="(item, i) in userItems" :key="i" link color="error">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title
              class="text-left"
              v-text="item.text"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link color="error">
          <v-list-item-icon>
            <v-icon color="error">mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-left error--text"
              >Sair</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item v-for="(item, i) in appItems" :key="i" link color="error">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="text-left"
              v-text="item.text"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      userItems: [
        {
          text: "Minha conta",
          icon: "mdi-account",
        },
        {
          text: "Configurações",
          icon: "mdi-cog",
        },
      ],
      appItems: [
        {
          text: "Contato",
          icon: "mdi-forum",
        },
        {
          text: "Sobre",
          icon: "mdi-information",
        },
        {
          text: "Reportar",
          icon: "mdi-alert",
        },
      ],
    };
  },
};
</script>

<style>
</style>
