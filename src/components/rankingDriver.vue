<template>
  <div class="ranking">
    <h1
      class="text-md-center"
      style="margin-top: 3rem; text-align: center;"
    >Ranking dos piores Motoristas </h1>
    <v-data-table
    :headers="headers"
    :items="drivers"
    class="tab"
  >
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.placa }}</td>
      <td>
        <div v-for="app of props.item.apps" v-bind:key="app.name" style="display: inline-block;">
          <img :src="app.icon" style="height:2.5rem;width:2.5rem;border-radius: 50%; margin-right: .5rem;">
        </div>
      </td>
      <td>{{ props.item.reputation }}</td>
    </template>
  </v-data-table>
    
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
      { text: 'Reputação', value: 'reputação'}
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
        this.drivers = response.data;
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
.tab {
  padding: 0px 30px 0 30px;
}
</style>
