<template>
  <v-container>
    <v-row>
      <v-col cols="2" class="menu rounded-lg">
        <v-app-bar color="#adadad" flat dense class="white--text">
          <v-app-bar-nav-icon color="#3a7bbc"></v-app-bar-nav-icon>
          <span class="font-weight-bold text-uppercase">Katalog haryltar</span>
        </v-app-bar>
        <hr />
        <side-bar-menu />
      </v-col>
      <v-col cols="10">
        <router-view></router-view>
       
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
.col-2,
.col-10 {
  margin-top: 30px;
  margin-bottom: 1px;
  padding: 2px;
}
.container {
  max-width: 1400px;
}
.menu {
  background: #f6f6f6;
  width: inherit;
  overflow: hidden;
  background-color: #adadad;
  height: 100%;
}
</style>