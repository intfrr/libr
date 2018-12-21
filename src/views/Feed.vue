<template>
    <v-layout>
        <v-flex xs12>
            <Post
                avatar="/img/supercatgifs.png"
                username="supercatgifs"
                title="Lightsaber cats!"
                src="https://i.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif"
                tags="star wars,cats,fighting,battle,lightsaber">
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
  }
}
</script>
