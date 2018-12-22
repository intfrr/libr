const NotificationService = {
    // @todo: Plug this into a real backend
    getNotifications() {
        return [
          { icon: 'favorite', title: 'Jason Oner', text: 'liked your post, "Lightsabre Cats"', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { icon: 'cached', title: 'Travis Howard', text: 'shared your post, "Mine!"', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { icon: 'cached', title: 'Ali Connors', text: 'shared your post', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { icon: 'favorite', title: 'Cindy Baker', text: 'liked your post', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
        ];
    }
};

export default NotificationService;