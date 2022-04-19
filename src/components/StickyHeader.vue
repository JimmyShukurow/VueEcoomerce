<template>
  <div>
    <v-banner single-line sticky color="#f6f6f6">
      <v-container>
        <v-row align="center">
          <v-col cols="2" class="logo">
            <img src="@/assets/logo.jpeg" alt="Logo" />
            <span class="logo-text"> Elyeter Haryt</span>
          </v-col>
          <v-col cols="2" row>
            <v-text-field
              rounded
              solo
              dense
              v-model="message"
              append-icon="mdi-magnify"
              clearable
              hide-details="auto"
              @click:append="alert"
            ></v-text-field>
          </v-col>
          <span  class="mr-5 ml-5 time">
            <v-icon color="red" large>mdi-clock-time-eight-outline</v-icon>
            9:00-18:00
          </span>
          <v-divider vertical></v-divider>
          <span class="mr-5 ml-5">
            <v-icon color="red" large>mdi-web</v-icon> {{ lang }}
          </span>
          <v-divider vertical></v-divider>
          <span class="mr-5 ml-5">
            <v-icon color="red" large>mdi-phone</v-icon> Kontakty
          </span>
          <v-divider vertical></v-divider>
          <span class="mr-5 ml-5">
            <v-icon color="red" large>mdi-heart-outline</v-icon> Yatda sakla
          </span>
          <v-divider vertical></v-divider>
          <span class="mr-5 ml-5">
            <v-icon color="red" large>mdi-account</v-icon> Profilim
          </span>
          <v-spacer> </v-spacer>
          <div class="basket-info">
            <v-icon color="red" large>mdi-cart-outline</v-icon>
            <v-spacer></v-spacer>
            {{ basketPrice }} manat
          </div>
        </v-row>
      </v-container>
    </v-banner>
  </div>
</template>

<script>
export default {
  data: () => ({
    lang: "RU",
    basketPrice: 10000,
  }),
  methods: {
    alert() {
      alert("Yangiiish");
    },
  },
};
</script>

<style scoped>
img {
  height: 50px;
  width: auto;
}
.container, .col, .col-2 {
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
span:not(.time), .logo {
  cursor: pointer;
}
.logo-text {
  position: absolute;
  top: 20%;
  height: inherit;
  background-color: red;
  color: #f6f6f6;
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
  font-weight: 800;
}
</style>