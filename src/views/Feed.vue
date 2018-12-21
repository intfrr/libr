<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
            <span>
                <b>supercatgifs</b>
                <v-btn small color="primary">Follow</v-btn>
            </span>
        </v-card-title>

        <v-img
          src="https://i.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif"
        ></v-img>

        <v-card-title>
          <div>
            <h3 class="headline mb-0">Lightsabre cats</h3>
          </div>
        </v-card-title>

        <v-card-actions>
            <v-btn flat icon color="pink">
              <v-icon>favorite_outline</v-icon>
            </v-btn>
            <v-btn flat icon color="green">
              <v-icon>cached</v-icon>
            </v-btn>
            <v-btn flat icon color="blue">
              <v-icon>chat_bubble_outline</v-icon>
            </v-btn>
            <v-btn flat icon color="blue">
              <v-icon>share</v-icon>
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FeedService from "@/model/feed-service";

@Component({})
export default class Feed extends Vue {
  feed: Array<any>;

  constructor() {
    super();
    this.feed = FeedService.getFeed();
  }
}
</script>
