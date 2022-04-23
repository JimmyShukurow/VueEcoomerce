<template>
  <div>
    <v-layout class="ml-5" row>
      <v-carousel
        v-model="model"
        height="300"
        class="rounded-lg mr-2"
        cycle="1"
      >
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%">
            <v-row class="fill-height" justify="center" align-content="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-card
        class="mx-auto rounded-lg"
        max-width="344"
        outlined
        elevation="3"
        color="#f6f6f6"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">OVERLINE</div>
            <v-list-item-title class="text-h5 mb-1">
              Headline 5
            </v-list-item-title>
            <v-list-item-subtitle
              >Greyhound divisely hello coldly
              fonwderfully</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn outlined rounded text> Button </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
    <v-row class="d-flex justify-space-between ml-5 mt-10">
      <product-item />
      <product-item />
      <product-item />
      <product-item />
      <product-item />
      <product-item />
      <product-item />
      <product-item />
      <product-item />
      <product-item />
    </v-row>
  </div>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";
export default {
  name: "HomeView",

  components: {
    ProductItem,
  },
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>

<style scoped>
/* div {
  margin-top: 10px;
}  */
</style>
