<template>
  <div>
    <h1>Signup succeeded</h1>
    <button @click='logOut'>Log out</button>
    <button @click='teste'>teste</button>
    <hr>
    <img :src="photo" style='height: 120px'> <br>
    <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{userId}}</p>
    <hr>
    <pre>{{user}}</pre>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex';


export default {
 data(){
     return {
       photo: '',
       userId: '',
       name: '',
       email: '',
       user: {}
     }
   },
    computed: {
      ...mapGetters(['autenticated']),
      ...mapGetters(['photoUrl'])
    },
   created() {
     var vm = this
     firebase.auth().onAuthStateChanged(function(user) {
       if (user) {
         vm.user = user;
         vm.name = vm.user.displayName;
         vm.email = vm.user.email;
         vm.photo = vm.user.photoURL;
         vm.userId = vm.user.uid;
         vm.$store.dispatch('ADD_URL',vm.photo)

      }
    });
  },
  methods: {
    logOut() {
      this.$store.dispatch('LOGOUT_USER');
      firebase.auth().signOut();
    },
    teste(){
        this.$store.commit('setPicture' ,this.picture)
        alert("Deu certo");
    },
   

  },
};
</script>