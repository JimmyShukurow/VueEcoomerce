<template>
  <div>
    <v-banner single-line sticky color="#f6f6f6">
      <v-container>
        <v-row align="center">
          <v-col cols="2" class="logo" router-to="/">
            <router-link to="/">
              <img src="@/assets/logo.jpeg" alt="Logo" />
              <span class="logo-text"> Elyeter Haryt</span>
            </router-link>
          </v-col>
          <v-col cols="2" row>
            <v-text-field
              rounded
              solo
              dense
              append-icon="mdi-magnify"
              clearable
              hide-details="auto"
              @click:append="alert"
            ></v-text-field>
          </v-col>
          <span class="mr-5 ml-5 time">
            <v-icon color="#3a7bbc" large>mdi-clock-time-eight-outline</v-icon>
            9:00-18:00
          </span>
          <v-divider vertical></v-divider>
          <span class="mr-5 ml-5">
            <v-menu offset-y open-on-hover>
              <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on">
                  <v-icon color="#3a7bbc" large>mdi-web</v-icon> {{ lang }}
                </div>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>Turkmen</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Russki</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </span>
          <v-divider vertical></v-divider>
          <span class="mr-5 ml-5">
            <v-icon color="#3a7bbc" large>mdi-phone</v-icon> Habarlash
          </span>
          <v-divider vertical></v-divider>
          <span class="mr-5 ml-5">
            <v-icon color="#3a7bbc" large>mdi-heart-outline</v-icon> Yatda sakla
          </span>
          <v-divider vertical></v-divider>
          <span class="mr-5 ml-5" @click="register">
            <v-icon color="#3a7bbc" large>mdi-account</v-icon> Profilim
          </span>
          <v-spacer> </v-spacer>
          <div class="basket-info" @click="basketInfo = true">
            <v-icon color="#3a7bbc" large>mdi-cart-outline</v-icon>
            <v-spacer></v-spacer>
            {{ basketPrice }} manat
          </div>
        </v-row>
      </v-container>
    </v-banner>
    <v-navigation-drawer
      tabindex="0"
      app
      right
      color="blue"
      v-model="basketInfo"
    >
      <v-card class="ma-5">
        <p>you have nothing to buy</p>
        <v-btn @click="closeBaksetInfo">close</v-btn>
      </v-card>
    </v-navigation-drawer>
    <UserRegistration />
  </div>
</template>

<script>
import UserRegistration from "./UserRegistration.vue";
import { bus } from "../main";
export default {
  components: {
    UserRegistration,
  },
  data: () => ({
    lang: "TM",
    basketPrice: 10000,
    basketInfo: false,
  }),
  methods: {
    alert() {
      alert("Yangiiish");
    },
    closeBaksetInfo() {
      this.basketInfo = false;
    },
    register() {
      bus.$emit("opendialog");
    },
  },
};
</script>

<style scoped>
img {
  height: 50px;
  width: auto;
}
.container,
.col,
.col-2 {
  margin-top: 1px;
  margin-bottom: 1px;
  padding: 2px;
}
.container {
  max-width: 1400px;
}
.basket-info {
  display: flex;
  padding: 0 5px 0 10px;
  width: 150px;
  align-items: center;
  border: 1px solid rgb(223, 214, 214);
  border-radius: 15px;
  cursor: pointer;
}
span:not(.time),
.logo {
  cursor: pointer;
}
span:not(.time, .logo-text):hover {
  padding: 5px 0;
  border-radius: 15px;
  background: rgb(231, 229, 229);
  color: green;
}
.basket-info:hover {
  background: rgb(231, 229, 229);
}

.logo-text {
  position: absolute;
  top: 20%;
  height: inherit;
  background-color: #3a7bbc;
  color: #f6f6f6;
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
  font-weight: 800;
}
</style>