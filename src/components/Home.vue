<template>
  <!-- <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div> -->
   <div
      style="margin-top:-50px"
   >
    <v-toolbar style="-webkit-box-shadow: none;
      box-shadow:   0!important;" color="white">
    <v-toolbar-title>
      <img  style="width:50px;heigth:50px"  src="./images/logo.png" />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>  

        <router-link style="color:white; text-decoration: none;"  :to="{ path: '/form'  }" exact> Reclamar </router-link>

      </v-btn>
      <v-btn flat>Ranking</v-btn>
      <v-btn flat>Reputacação dos Motoristas</v-btn>
      <v-btn flat>Duvidas Frequentes</v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <div>
      <v-container  fluid grid-list-md fill-height style="height: 1000px;margin-top:50">
          <v-layout style="margin-top:450px" row wrap>
            <v-flex xs12 sm4 md5>
              <h2 style="font-weight: bold; text-align: center; font-size: 1.98rem;">Tem algo a reclamar dos aplicativos?</h2>
              
              <div style="margin-top:20px">

                <h6 style="font-weight: bold; text-align: center; font-size: 1.2rem;"> 
                  Estamos aqui para ouvir o seu problema e compartilhar para que outras pessoas não venha sofrer com o mesmo constrangimento.
                </h6>

              </div>
              
            </v-flex>
            <v-flex  style="margin-top:-40px" xs12 sm4 md5>
                <div>
                  <img style="width:250px"  src="./images/uber.png" />
                </div>
              <div>
                  <img src="./images/99.png" style="width:250px" />
              </div>
                
            </v-flex>
            <v-flex  style="margin-top:-30px">
                <div>
                    <img src="./images/cabify.png" style="width:250px" />
                </div>
                <div style="margin-top:30px">
                    <img src="./images/mobdrive.png" />
                </div>
            </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.size{
  width:120;height: 20;
  
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
