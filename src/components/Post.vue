<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
            <span>
                <img class="avatar" :src="avatar"></img><b>{{username}}</b>
                <v-btn small color="primary">Follow</v-btn>
            </span>
        </v-card-title>

        <v-img
          :src="src"
        ></v-img>

        <v-card-title>
          <div>
            <h3 class="headline mb-0">{{title}}</h3>
             <span class="tag">{{tags}}</span>
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

<style lang="scss">
  .avatar {
    width: 25px;
    height: 25px;
    vertical-align: middle;
  }
</style>


<script lang="ts">
/**
 * Hard coded as an IMAGE type post for the moment. Will create an actual base Post class and extend it for other post types
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Post extends Vue {
    @Prop() private username!: string;
    @Prop() private avatar!: string;
    @Prop() private title!: string;
    @Prop() private src!: string;
    @Prop() private tags!: string;
}
</script>
