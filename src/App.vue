<template>
 <v-app>
   <v-toolbar clipped-left color="white" flat>
    <v-toolbar-side-icon  @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat><router-link class="nav-link" to="/">Inicio</router-link></v-btn>
      <v-btn flat><router-link class="nav-link" to="/reclamar">Reclamar</router-link></v-btn>
      <v-btn flat><router-link class="nav-link" to="/ranking">Ranking</router-link></v-btn>
      <v-btn flat>Reputação dos Motoristas</v-btn>
      <v-btn flat>Duvidas Frequentes</v-btn>
    </v-toolbar-items>
  </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
      width = "200"
      id = "drawer"
    >
    </v-navigation-drawer>
    <v-content grid-list-xl style="background-color: white;">
      <router-view/>
    </v-content>

  </v-app>

</template>

<script>

export default {
    name: 'app',
    data: () =>  ({
      drawer:null,

    }),
  }
</script>

<style scoped>

.application a{
  text-decoration:none;
  color: black;
}
.first-title{
  display:none;
  text-align: center !important;

}
@media only screen and (max-width: 900px) {
  .first-title{
    display: block;
  }
}


</style>
