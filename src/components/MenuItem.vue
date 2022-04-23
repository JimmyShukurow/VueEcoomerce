<template>
  <div class="main">
    <v-menu offset-x open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <section
          class="d-flex align-md-content-space-between ml-5"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left color="#3a7bbc">mdi-{{ icon }}</v-icon>
          <span class="text-capitalize font-weight-bold custom-btn ma-2 text-truncate">
            {{ title }}
          </span>
          <v-spacer></v-spacer>
          <v-icon dark> mdi-chevron-right </v-icon>
        </section>
        <v-divider dark></v-divider>
      </template>
      <v-list class="rounded-lg">
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
  props: ["icon", "title"],
  components: {
  },
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
};
</script>

<style scoped>
/* .v-menu__content {
  background: grey;
} */
.main {
  border-left: 4px solid rgba(128, 128, 128, 0);
  color: #f6f6f6;
}
.main:hover {
  border-left: 4px solid green;
  background-color: rgba(3, 241, 3, 0.171);
  color: green;
  cursor: pointer;
}
.custom-btn {
  width: 50%;
}

</style>