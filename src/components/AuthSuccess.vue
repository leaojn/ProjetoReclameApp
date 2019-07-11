<template>
  <div>
   <button @click='logOut'>Log out</button>
  {{getUserLogged}}
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
      ...mapGetters(['photoUrl']),
      ...mapGetters(['getUserLogged'])
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
         vm.$store.dispatch('ADD_URL',vm.photo);
         vm.$store.dispatch('USER_DATA',vm.user);
         vm.$store.dispatch('POST_USER',vm.user);

      }
    });
  },
  methods: {
    logOut() {
      this.$store.dispatch('LOGOUT_USER');
      firebase.auth().signOut();
    },
  },
};
</script>