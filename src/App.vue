<template>
  <v-app>
    <link href="https://fonts.googleapis.com/css?family=Aleo" rel="stylesheet">
    <v-toolbar app color="primary">
      <v-toolbar-title class="headline">
        <span class="Libr-logo">Libr</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <!-- Main Content -->
      <router-view></router-view>
      <!-- /Main Content -->
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
.Libr-logo {
  font-family: Aleo, serif;
  color: white;
}

.v-footer {
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: rgb(102, 153, 153);
  text-align: center;
}
</style>


<script>
import HelloWorld from "./components/HelloWorld";
import Post from "./components/Post";

export default {
  name: "App",
  components: {
    HelloWorld,
    Post
  },
  data() {
    return {
      //
    };
  }
};
</script>
