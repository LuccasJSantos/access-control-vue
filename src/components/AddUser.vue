<template>
  <v-form ref="form" lazy-validation class="px-2">
    <v-container class="d-flex align-center pa-0">
      <v-checkbox v-model="active" label="Ativo"></v-checkbox>

      <v-spacer></v-spacer>

      <v-tooltip bottom v-if="!user">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" color="primary" icon>
            <v-icon light>mdi-account-arrow-down</v-icon>
          </v-btn>
        </template>
        <span>Importar do SIGA</span>
      </v-tooltip>
    </v-container>

    <v-text-field v-model="name" label="Nome" required></v-text-field>

    <v-text-field
      v-model="cpf"
      required
      label="CPF"
      counter="14"
    ></v-text-field>

    <v-combobox
      v-model="userRoles"
      :items="['Aluno', 'Funcionário', 'Professor']"
      label="Grupo"
      multiple
      chips
    >
      <template v-slot:selection="data">
        <v-chip small color="primary" :key="JSON.stringify(data.item)">
          {{ data.item }}
        </v-chip>
      </template>
    </v-combobox>

    <v-combobox
      v-model="userRFID"
      :items="['1042FA234', 'A14A845F8', '1E7CA93A9']"
      label="Cartão RFID"
      chips
    >
      <template v-slot:selection="data">
        <v-chip small color="primary" :key="JSON.stringify(data.item)">
          {{ data.item }}
        </v-chip>
      </template>
    </v-combobox>

    <v-text-field
      v-model="username"
      :disabled="Boolean(user)"
      required
      label="Usuário"
    ></v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPassword ? 'text' : 'password'"
      label="Senha"
      hint="Mínimo de 8 caracteres"
      counter
      :disabled="Boolean(user)"
      @click:append="showPassword = !showPassword"
    ></v-text-field>

    <v-tooltip bottom v-if="user">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-on="on"
          v-bind="attrs"
          @click.stop="resetDialog = true"
          color="primary"
          class="mr-6"
          icon
        >
          <v-icon light>mdi-lock-reset</v-icon>
        </v-btn>
      </template>
      <span>Reset de senha</span>
    </v-tooltip>

    <v-dialog v-model="resetDialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Reset de senha </v-card-title>

        <v-card-text>
          Deseja mesmo resetar a senha do usuário
          <span class="subtitle-2 text-decoration-underline">{{
            username
          }}</span
          >?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="error" text @click="resetDialog = false"> Não </v-btn>

          <v-btn
            class="success"
            text
            @click="resetPassword"
            :loading="resetPassLoading"
          >
            Sim
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="resetConfirmationDialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Reset de senha </v-card-title>

        <v-card-text>
          <div>Senha resetada com sucesso</div>
          <div>
            <v-icon x-large class="mt-3" color="success"
              >mdi-checkbox-marked-circle-outline</v-icon
            >
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-btn class="success">
      <v-icon left>mdi-content-save</v-icon>
      Salvar
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "AddUser",
  props: {
    user: {
      required: false,
      type: Object,
    },
  },
  data() {
    return {
      name: this.user?.name || "",
      cpf: this.user?.cpf || "",
      active: this.user?.active || true,
      userRFID: this.user?.rfid || "",
      userRoles: this.user?.roles || [],
      username: this.user?.username || "",
      password: this.user ? "12345678" : "",
      showPassword: false,
      roles: [],
      resetDialog: false,
      resetPassLoading: false,
      resetConfirmationDialog: false,
    };
  },
  methods: {
    resetPassword() {
      this.resetPassLoading = true;

      setTimeout(() => {
        this.resetPassLoading = false;
        this.resetDialog = false;
        this.resetConfirmationDialog = true;

        setTimeout(() => {
          this.resetConfirmationDialog = false;
        }, 3000);
      }, 3000);
    },
  },
};
</script>

<style scoped>
</style>

