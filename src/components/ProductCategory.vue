<template>
  <div>
    <v-row class="ml-5 mt-10">
      <h1>{{ categoryName }}</h1>
      <v-spacer></v-spacer>
      <v-chip> Hemmesi <v-icon> mdi-chevron-right </v-icon> </v-chip>
    </v-row>
    <v-row class="products ml-5">
      <product-item heart="mdi-heart-outline" />
      <product-item heart="mdi-heart" />
      <product-item heart="mdi-heart" />
      <product-item heart="mdi-heart" />
      <product-item heart="mdi-heart" />
    </v-row>
  </div>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";

export default {
  props: ["categoryName"],
  components: {
    ProductItem,
  },
};
</script>

<style scoped>
.products {
  display: flex;
  gap: 1.25%;
}
</style>