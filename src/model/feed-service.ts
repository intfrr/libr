const FeedService = {
    // @todo: Plug this into a real backend
    getFeed(): Array<any> {
        return [
            {
                avatar: "/img/supercatgifs.png",
                username: "supercatgifs",
                title: "Mine!",
                type: "IMAGE",
                src: "https://i.giphy.com/media/ND6xkVPaj8tHO/giphy.gif",
                tags: "#cats #money #funny",
                canFollow: true
            },
            {
                avatar: "/img/supercatgifs.png",
                username: "supercatgifs",
                title: "Lightsaber cats!",
                type: "IMAGE",
                src: "https://i.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif",
                tags: "#star wars #cats #fighting #battle #lightsaber",
                canFollow: true
            },
            {
                avatar: "/img/supercatgifs.png",
                username: "supercatgifs",
                title: "Hard at work",
                type: "IMAGE",
                src: "https://i.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
                tags: "#cats #work #funny #typing",
                canFollow: true
            },
            {
                avatar: "/img/supercatgifs.png",
                username: "supercatgifs",
                title: "I can do it!",
                type: "IMAGE",
                src: "https://i.giphy.com/media/G3773sSDJHHy0/200w.gif",
                tags: "#cats #funny #stuck",
                canFollow: true
            }
        ];
    },

    getOwnPosts() : Array<any> {
         return [
            {
                avatar: "/img/blog-avatar.png",
                username: "ilovecatgifs",
                title: "I can do it!",
                type: "IMAGE",
                src: "https://i.giphy.com/media/G3773sSDJHHy0/200w.gif",
                tags: "#cats #funny #stuck",
                canFollow: false
            }
        ];
    }
};

export default FeedService;
