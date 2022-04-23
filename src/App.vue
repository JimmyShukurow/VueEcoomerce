<template>
  <v-app>
    <sticky-header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import StickyHeader from "./components/StickyHeader.vue";
export default {
  components: {
    StickyHeader,
  },
  name: "App",
  data: () => ({
    //
  }),
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
