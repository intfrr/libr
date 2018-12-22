<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
          >
            <v-list-tile-action class="action">
              <v-icon color="pink">{{item.icon}}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
              <span class="action-description">{{item.text}}</span>
            </v-list-tile-content>

            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
    </v-flex>
  </v-layout>
</template>

<style lang="scss">
    .action-description {
        font-size: 10pt;
    }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NotificationService from '@/model/notification-service';

@Component({})
export default class Mail extends Vue {
  items : Array<any>;

  constructor() {
    super();
    this.items = NotificationService.getNotifications(); // @todo: Create a Vuex module for mail and use it as a proxy for this method
  }
}
</script>