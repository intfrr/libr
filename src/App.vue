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
        <v-icon>home</v-icon>
      </v-flex>
      <v-flex sm4>
        <v-icon>settings_remote</v-icon>
      </v-flex>
      <v-flex sm4>
        <v-icon>mail</v-icon>
      </v-flex>
      <v-flex sm4>
        <v-icon>person</v-icon>
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
