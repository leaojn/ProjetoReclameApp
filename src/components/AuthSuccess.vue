<template>
  <v-layout style="padding-top: 32px">
    <v-flex xs3>
      <v-layout>
        <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" hide-overlay stateless>
          <v-toolbar flat class="transparent">
            <v-list class="pa-0">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img :src="user.photoURL" />
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>{{user.displayName}}</v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-btn icon @click.stop="mini = !mini">
                    <v-icon>chevron_left</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-toolbar>

          <v-list class="pt-0" dense>
            <v-divider></v-divider>

            <v-list-tile v-for="item in draw" :key="item.title" @click>
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-flex>
    <v-flex xs7>
      <span style="font-size:1.3rem; font-weight: bold">Minhas reclamações</span>
      <v-divider></v-divider>
      <v-list two-line>
        <template v-for="(item, index) in reporters_user">
          <v-list-tile :key="item.title" avatar ripple @click="toggle(index)">
            <v-list-tile-content>
              <v-list-tile-title>Motorista: {{ item.driver.name }}</v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">Placa: {{ item.driver.placa }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{item.descr}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-list-tile-action-text>{{ item.created | date DD/MM/YYYY }}</v-list-tile-action-text>
              
            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      photo: "",
      userId: "",
      mini: true,
      right: null,
      drawer: true,

      name: "",
      email: "",
      user: {},
      selected: [2],
      draw: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      items: [
        {
          action: "15 min",
          headline: "Brunch this weekend?",
          title: "Ali Connors",
          subtitle:
            "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          action: "2 hr",
          headline: "Summer BBQ",
          title: "me, Scrott, Jennifer",
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          title: "Sandra Adams",
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        },
        {
          action: "12 hr",
          headline: "Birthday gift",
          title: "Trevor Hansen",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          action: "18hr",
          headline: "Recipe to try",
          title: "Britta Holt",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["autenticated"]),
    ...mapGetters(["photoUrl"]),
    ...mapGetters(["getUserLogged"]),
    ...mapGetters(["reporters_user"])
  },
  mounted() {},
  created() {
    var vm = this;
    var uid;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        vm.user = user;
        vm.name = vm.user.displayName;
        vm.email = vm.user.email;
        vm.photo = vm.user.photoURL;
        vm.userId = vm.user.uid;
        uid = vm.user.uid;
        vm.$store.dispatch("ADD_URL", vm.photo);
        vm.$store.dispatch("USER_DATA", vm.user);
        vm.$store.dispatch("POST_USER", vm.user);
        console.log(vm.user.providerData[0].uid)
        vm.reports(vm.user.providerData[0].uid); // console.log(uid)
      }
    });
    // console.log(this.getUserLogged.uid)
    // this.$store.commit("REPORTS", vm.getUserLogged.uid);
    // this.$store.commit("STATE_GET_USER_REPORTS", uid);
  },
  methods: {
    logOut() {
      this.$store.dispatch("LOGOUT_USER");
      firebase.auth().signOut();
    },
    reports(uid) {
      console.log(uid);
      this.$store.commit("REPORTS", uid);
    },
    toggle(index) {
      const i = this.selected.indexOf(index);

      if (i > -1) {
        this.selected.splice(i, 1);
      } else {
        this.selected.push(index);
      }
    }
  }
};
</script>