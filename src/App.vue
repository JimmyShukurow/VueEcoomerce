<template>
  <v-app>
    <sticky-header/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import StickyHeader from "./components/StickyHeader.vue";
export default {
  components: {
    StickyHeader,
  },
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
