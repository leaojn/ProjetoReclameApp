<template>
  <div class="blog">
    <h1 class="text-md-center" style="margin-top: 3rem; text-align: center;">Registrar Reclamação{{loading}}</h1>
    <v-layout row style="padding-top: 3rem;">
      <v-flex xs1 md4></v-flex>
      <v-flex xs10 md4 v-if="loading == false">
        <form>
          <v-text-field
            v-model="name"
            v-validate="'required|max:10'"
            :counter="10"
            :error-messages="errors.collect('name')"
            label="Nome do Motorista"
            outline
            color="brown darken-4"
            data-vv-name="name"
            required
          ></v-text-field>

          <v-text-field
            v-model="placa"
            v-validate="'required|max:8'"
            :counter="8"
            :error-messages="errors.collect('name')"
            label="Placa do carro"
            outline
            color="brown darken-4"
            data-vv-name="name"
            required
          ></v-text-field>

          <v-select
            v-model="select"
            v-validate="'required'"
            :items="nameApps"
            :error-messages="errors.collect('select')"
            label="Aplicativo"
            outline
            data-vv-name="select"
            required
          ></v-select>
          <v-textarea
            outline
            v-model="title"
            label="Explique sua reclamação"
            color="brown darken-4"
            counter
            maxlength="120"
          ></v-textarea>

          <v-btn @click="submit">Enviar</v-btn>
          <v-btn @click="clear">Resetar</v-btn>
        </form>
      </v-flex>
        <v-progress-circular v-else
      :width="3"
      color="red"
      indeterminate
    ></v-progress-circular>
      <v-flex xs1 md4></v-flex>
    </v-layout>
  </div>
</template>
<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
import { mapGetters } from "vuex";

Vue.use(VeeValidate);

export default {
  $_veeValidate: {
    validator: "new"
  },

  data: () => ({
    name: "",
    email: "",
    select: null,
    title: "",
    placa: "",
    checkbox: null,
    nameApps: [],
  }),

  mounted() {
    this.$store.dispatch("GET_APP", "abc");
    const namedApps = this.items;
    Array.from(namedApps).forEach(element => {
      this.nameApps.push(element.name);
      console.log(element);
    });
    this.$validator.localize("en", this.dictionary);
  },
  computed: {
    ...mapGetters({ items: "getNameapps", uid: "getUid" , loading: "loading"})
  },

  methods: {
    submit: function() {
      this.$validator.validateAll();
      alert(this.select)
      let reclamacao = {
        "name_driver": this.name,
        "placa": this.placa,
        "app": this.select,
        "uid": this.uid,
        "descr": this.title
      };
      this.$store.dispatch("POST_RECLAMACAO", reclamacao);

    },

    getNameApps: function(array) {
      for (var i in array) {
        return i.name;
      }
    },

    clear() {
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      alert(this.name);
    }
  }
};
</script>
<style>
</style>

