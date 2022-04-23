<template>
  <v-card max-width="19%" class="mt-5 pa-1 jimmyCard rounded-lg" outlined >
    <v-img  src="@/assets/test.webp">
      <v-row class="ma-1">
        <v-layout column align-start>
          <v-chip color="#3a7bbc" class="ma-1" dark small>
            <h3>Novinka</h3>
          </v-chip>
          <v-chip color="red" class="ma-1" dark small>
            <h3>-15</h3>
          </v-chip>
        </v-layout>
        <v-btn color="#9fc0e0"   dark fab small @click="addToFavorite"> <v-icon color="red">{{favotite}}</v-icon></v-btn>
      </v-row>
    </v-img>
    <p class="text-truncate mb-0">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius
      voluptas, optio quis at aperiam repellat assumenda molestias repellendus
      qui vitae sunt iste quos non quibusdam nesciunt a, ea ducimus!
    </p>
    <p class="mb-5">category</p>
    <span class="price">415 manat</span>
    <del class="discount-price"> 500 manat</del>

  </v-card>
</template>

<script>
export default {
  props:['heart'],
  data: () => ({
    favotite: ''
  }),
  mounted() {
    this.favotite = this.heart
  },
  methods:{
    addToFavorite(){
      this.favotite = this.favotite === "mdi-heart" ? "mdi-heart-outline" : "mdi-heart"
    }
  }

};
</script>

<style  scoped>
.price {
  display: block;
  font-size: 20px;
  font-weight: 900;
}
.discount-price {
  color:red;
}
.jimmyCard {
  cursor: pointer;
}

</style>>