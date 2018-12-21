<template>
    <v-layout>
      <v-flex xs12>
        <v-img src="/img/blog-header.png">
            <v-layout>
                <span>
                    <v-img class="blog-avatar" src="/img/blog-avatar.png"></v-img>
                </span>
            </v-layout>
        </v-img>
        <v-toolbar color="secondary" dark>
            POSTS
        </v-toolbar>
      </v-flex>
    </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Me extends Vue {}
</script>
<style lang="scss">
    .blog-avatar {
        position: relative;
        top: 256%;
        left: 197%;
        width: 80px;
        height: 80px;
    }
</style>