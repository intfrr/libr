<template>
    <v-layout>
        <v-flex xs12>
            <Post
                v-for="(post,index) in feed"
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
import { Component, Vue } from "vue-property-decorator";
import Post from "@/components/Post.vue";
import FeedService from "@/model/feed-service";

@Component({
    components : {
        Post
    }
})
export default class Feed extends Vue {
  feed: Array<any>;

  constructor() {
    super();
    this.feed = FeedService.getFeed();
    for (var post of this.feed) {
        console.log("Post", post);
    }
  }
}
</script>
