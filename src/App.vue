<template>
  <v-app>
    <sticky-header />
    <v-main>
      <router-view />
    </v-main>
   
    <footer-part />
    <v-navigation-drawer
      tabindex="0"
      app
      right
      color="blue"
      v-model="basketInfo"
      hide-overlay
      temporary
    >
      <v-card class="ma-5">
        <p>you have nothing to buy</p>
        <v-btn @click="closeBaksetInfo">close</v-btn>
      </v-card>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import StickyHeader from "./components/StickyHeader.vue";
import FooterPart from "./components/FooterPart.vue";
import { bus } from "./main";

export default {
  components: {
    StickyHeader,
    FooterPart,
  },
  name: "App",
  data: () => ({
    basketInfo: false,
  }),
  methods: {
    closeBaksetInfo() {
      this.basketInfo = false;
    },
  },
  created() {
    bus.$on("openbasket", () => {
      this.basketInfo = true;
    });
  },
};
</script>
<style scoped>
#app {
  background: linear-gradient(-45deg, #d4ab9e, #d38ea8, #a9d4e4, #8ac9ba);
  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
  height: 100%;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
