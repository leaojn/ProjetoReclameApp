<template>
  <div class="ranking">
    <h1
      class="text-md-center"
      style="margin-top: 3rem; text-align: center;"
    >Ranking dos piores aplicativos </h1>
    <v-layout row wrap style="padding-top:2rem;" v-for="item in apps" :key="item.nome">
      <v-flex xs1 md4></v-flex>

      <v-flex xs10 sm12 md4>
        <v-card
          flat
          dark
          class="mx-auto elevation-20"
          v-bind:style="{ backgroundColor: item.color, 'maxWidth': '400px' }"
        >
          <v-layout justify-space-between>
            <v-flex xs8>
              <v-card-title v-bind:style="{ backgroundColor: item.color}">
                <div>
                  <div class="headline" v-html="item.name"></div>
                  <div>Transport company</div>
                  <div>(2019)</div>
                </div>
              </v-card-title>
            </v-flex>
            <img
              class="shrink ma-2"
              contain
              height
              :src="item.icon"
              style="width: 30%; height: 15%"
            />
          </v-layout>
          <v-divider dark></v-divider>
          <v-card-actions class="pa-3">
            Nota geral
            <v-spacer></v-spacer>
            <span class="grey--text text--lighten-2 caption mr-2">(5)</span>
            <v-rating
              v-model="rating"
              background-color="white"
              color="yellow accent-4"
              dense
              :length="length"
              :readonly="readonly"
              :empty-icon="emptyIcon"
              :full-icon="fullIcon"
              :half-icon="halfIcon"
              :hover="hover"
              size="18"
            ></v-rating>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    // apps:"getApps",
    emptyIcon: "mdi-heart-outline",
    halfIcon: "mdi-heart-half-full",
    halfIncrements: false,
    hover: false,
    length: 5,
    rating: 4,
    readonly: true
  }),
  mounted() {},
  created: function() {
    this.$store.dispatch("GET_APP");
  },
  computed: {
    ...mapGetters({ apps: "apps" })
  }
};
</script>
<style>
</style>
