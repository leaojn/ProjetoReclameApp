<template>
  <div class="blog">
   <h1 class="text-md-center" style="margin-top: 3rem; text-align: center;">Registrar Reclamação {{test}}</h1>
   <v-layout row style="padding-top: 3rem;">
    <v-flex xs1 md4></v-flex>
    <v-flex xs10 md4>
     <form>
      <v-text-field
      v-model="name"
      v-validate="'required|max:10'"
      :counter="10"
      :error-messages="errors.collect('name')"
      label="Nome"
      outline
      color="brown darken-4"
      data-vv-name="name"
      required
      ></v-text-field>
      <v-text-field
      v-model="email"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      label="E-mail"
      color="brown darken-4"
      outline
      data-vv-name="email"
      required
      ></v-text-field>
      <v-select
      v-model="select"
      v-validate="'required'"
      :items="items"
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
  <v-flex xs1 md4></v-flex>

</v-layout>


  </div>
</template>
<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      
         }),

    mounted () {
      this.$validator.localize('en', this.dictionary)

    },

    methods: {

      submit: function () {
        this.$validator.validateAll()
      },

      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        alert(this.name)
      }
    }
  }
</script>
<style>

</style>

