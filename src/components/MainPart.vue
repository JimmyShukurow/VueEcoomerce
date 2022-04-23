<template>
  <v-container>
    <v-row align="center">
      <v-col cols="2" class="menu">
        <v-app-bar color="#adadad" flat dense class="white--text">
          <v-app-bar-nav-icon color="#3a7bbc"></v-app-bar-nav-icon>
          <span class="font-weight-bold text-uppercase">Katalog haryltar</span>
        </v-app-bar>
        <hr />
        <side-bar-menu />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SideBarMenu from "./SidebarMenu.vue";

export default {
  components: {
    SideBarMenu,
  },
};
</script>

<style scoped>
.container,
.col,
.col-2 {
  margin-top: 30px;
  margin-bottom: 1px;
  padding: 2px;
}
.container {
  max-width: 1400px;
}
.menu {
  background: #adadad;
  border-radius: 10px;
  width: inherit;
  overflow: hidden;
}
</style>