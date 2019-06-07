<template>
   <v-container grid-list-md text-xs-center class="white" style="margin-top:10.7rem;" id="home">
    <v-layout
    row wrap
    >
    <v-flex xs12 md7>
      <v-layout row>
        <v-flex xs1 md1></v-flex>
        <v-flex xs12 md10><h2 class="q-display-4" style="font-weight: bold; font-size: 1.98rem; text-align:left;">Tem algo a reclamar dos motoristas?</h2></v-flex>
        <v-flex xs1 md1></v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs1></v-flex>
        <v-flex xs10><h4 style="text-align: justify;">Estamos aqui para ouvir o seu problema e compartilhar para que outras <br> pessoas não venha sofrer com o mesmo constrangimento.</h4></v-flex>
        <v-flex xs1></v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 md5>
      <v-layout row>
        <v-flex xs12 md6><v-img :src="uber" aspect-ratio="2.7" width="70%"></v-img></v-flex>
        <v-flex xs12 md6><v-img :src="cabify" aspect-ratio="2.8" width="60%"></v-img></v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 md6><v-img :src="noventaenove" width="50%"></v-img></v-flex>
        <v-flex xs12 md6><v-img :src="mobdrive" aspect-ratio="1.5" width="50%"></v-img></v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
    name: 'home',
    data(){
        return{
          uber:require('@/assets/imgs/uber.png'),
          cabify:require('@/assets/imgs/cabify.png'),
          noventaenove:require('@/assets/imgs/99.png'),
          mobdrive:require('@/assets/imgs/mobdrive.png'),
    }
  },
}
</script>
<style>
.v-toolbar{-webkit-box-shadow: none;box-shadow:0!important;}
</style>
