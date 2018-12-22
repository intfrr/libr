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
        <Post
            v-for="(post,index) in posts"
            v-bind:avatar="post.avatar"
            v-bind:username="post.username"
            v-bind:title="post.title"
            v-bind:src="post.src"
            v-bind:tags="post.tags"
            v-bind:canFollow="post.canFollow"
            v-bind:key="index">
        </Post>
      </v-flex>
    </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Post from "@/components/Post.vue";
import FeedService from "@/model/feed-service";

@Component({
    components: {
        Post
    }
})
export default class Me extends Vue {
  posts: Array<any>;

  constructor() {
    super();
    this.posts = FeedService.getOwnPosts();
  }
}

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