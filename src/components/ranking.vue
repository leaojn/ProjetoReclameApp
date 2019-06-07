<template>
  <div class="ranking">

   <h1 class="text-md-center" style="margin-top: 3rem; text-align: center;">Ranking dos piores aplicativos</h1>
   <v-layout row wrap style="padding-top:2rem;">
    <v-flex xs1 md4></v-flex>
     <v-flex xs10 sm12 md4>
       <v-card flat
    class="mx-auto elevation-20"
    color="black"
    dark
    style="max-width: 400px;"
  >
    <v-layout justify-space-between>
      <v-flex xs8>
     <v-card-title color=black>
          <div>
            <div class="headline">Uber</div>
            <div>Transport company</div>
            <div>(2019)</div>
          </div>
        </v-card-title>
      </v-flex>

      <v-img
        class="shrink ma-2"
        contain
        height=""
        src="https://www.uber-assets.com/image/upload/v1538695540/iOS_App_Icon.png"
        style="flex-basis: 125px"
      ></v-img>
    </v-layout>
    <v-divider dark></v-divider>
    <v-card-actions class="pa-3">
      Nota geral
      <v-spacer></v-spacer>
      <span class="grey--text text--lighten-2 caption mr-2">
        ({{ rating }})
      </span>
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
  <br>
  <br>
  <v-card flat
    class="mx-auto elevation-20"
    color="#FED850"
    dark
    style="max-width: 400px;"
  >
    <v-layout justify-space-between style='color:#806C28'>
      <v-flex xs8>

     <v-card-title>
          <div>
            <div class="headline" style="font-weight:bold">99</div>
            <div>Transport company</div>
            <div>(2019)</div>
          </div>
        </v-card-title>
      </v-flex>

      <v-img
        class="shrink ma-2"
        contain
        height=""
        src="https://cdn6.aptoide.com/imgs/c/8/5/c8510a11432cb0f97910a720a2b124fa_icon.png?w=240"
        style="flex-basis: 125px"
      ></v-img>
    </v-layout>
    <v-divider dark></v-divider>
    <v-card-actions class="pa-3" style="color:#806C28;">
      Nota geral
      <v-spacer></v-spacer>
      <span style="color:#806C28">
        ({{ rating }})
      </span>
      <v-rating
        v-model="rating"
        background-color="#806C28"
        color="#806C28"
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
  <br>
  <br>
  <v-card
    class="mx-auto elevation-20"
    color="#7F33FF"
    dark
    style="max-width: 400px;"
  >
    <v-layout justify-space-between style='color:white'>
      <v-flex xs8>

     <v-card-title>
          <div>
            <div class="headline" style="font-weight:bold">Cabify</div>
            <div>Transport company</div>
            <div>(2019)</div>
          </div>
        </v-card-title>
      </v-flex>

      <v-img
        class="shrink ma-2"
        contain
        height=""
        src="https://www.melhoresaplicativos.com.br/wp-content/uploads/2017/09/cabify.png"
        style="flex-basis: 125px"
      ></v-img>
    </v-layout>
    <v-divider dark></v-divider>
    <v-card-actions class="pa-3" style="color:white;">
      Nota geral
      <v-spacer></v-spacer>
      <span class="grey--text text--lighten-2 caption mr-2">
        ({{ rating }})
      </span>
      <v-rating
        v-model="rating"
        background-color="#806C28"
        color="white"
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
 export default {
    data: () =>  ({
      emptyIcon: 'mdi-heart-outline',
      halfIcon: 'mdi-heart-half-full',
      halfIncrements: false,
      hover: false,
      length: 5,
      rating: 4,
      readonly: true,

    }),
  }
</script>
<style>
</style>
