<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Libre</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app>
      <v-flex sm4>
        <v-btn flat icon to="/">
          <v-icon>home</v-icon>
        </v-btn>
      </v-flex>
      <v-flex sm4>
        <v-btn flat icon to="/notifications">
          <v-icon>settings_remote</v-icon>
        </v-btn>
      </v-flex>
      <v-flex sm4>
        <v-btn flat icon to="/mail">
          <v-icon>mail</v-icon>
        </v-btn>
      </v-flex>
      <v-flex sm4>
        <v-btn flat icon to="/me">
          <v-icon>person</v-icon>
        </v-btn>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
  .v-footer {
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: rgb(102, 153, 153);
    text-align: center;
  }
</style>


<script>
import HelloWorld from './components/HelloWorld'


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
