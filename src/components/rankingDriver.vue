<template>
  <div class="ranking">
    <h1
      class="text-md-center"
      style="margin-top: 3rem; text-align: center;"
    >Ranking dos piores Motoristas </h1>
    <v-data-table
    :headers="headers"
    :items="drivers"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.placa }}</td>
      <td>
        <div v-for="app of props.item.apps" style="display: inline-block;">
          <img :src="app.icon" style="height:2.5rem;width:2.5rem;border-radius: 50%; margin-right: .5rem;">
        </div>
      </td>
      <td></td>
    </template>
  </v-data-table>
    <v-layout row wrap style="padding-top:2rem;" v-for="item in drivers" :key="item.nome">
      
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Driver from "../services/driver";

export default {
  data: () => ({
    headers: [
      { text: 'Nome', value: 'name' },
      { text: 'Placa', value: 'placa' },
      { text: 'Apps', value: 'apps' },
      { text: 'Reclamações', value: 'reclamações' },
    ],
    emptyIcon: "mdi-heart-outline",
    halfIcon: "mdi-heart-half-full",
    halfIncrements: false,
    hover: false,
    length: 5,
    rating: 4,
    readonly: true,
    drivers: [],
  }),
  mounted() {
    this.list()
  },
  methods: {
    list(){
      Driver.all().then(response => {
        console.log(response.data);
        this.drivers = response.data;
      }).catch(e => {
        console.log(e)
      })
    }
  },
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
