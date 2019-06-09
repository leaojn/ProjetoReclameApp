<template>
 <v-app>
   <v-toolbar clipped-left color="white" flat>
    <v-toolbar-side-icon  @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat><router-link class="nav-link" to="/">Inicio</router-link></v-btn>
      <v-btn flat><router-link class="nav-link" to="/reclamar">Reclamar</router-link></v-btn>
      <v-btn flat><router-link class="nav-link" to="/ranking">Ranking</router-link></v-btn>
      <v-btn flat><router-link class="nav-link" to="/ranking">Reputação dos Motoristas</router-link></v-btn>
      
    </v-toolbar-items>
      <v-spacer></v-spacer>
       <v-avatar v-if="autenticated == false" color="black">
      <v-icon dark>account_circle</v-icon>
    </v-avatar>
      <v-avatar v-else>
      <img
        v-bind:src='photoUrl' 
        alt="John"
      >
    </v-avatar>

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
import { mapGetters } from 'vuex';

export default {

    name: 'app',
    data: () =>  ({
      drawer:null,
    }),
    methods:{
      addPhotoUrl(){
        this.$store.dispatch('ADD_URL','abc')
      }
    },
    computed: {
      ...mapGetters(['autenticated']),
      ...mapGetters(['photoUrl'])
    },
    
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
