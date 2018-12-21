const FeedService = {
    // @todo: Plug this into a real backend
    getFeed(): Array<any> {
        return [
            {
                avatar: "/img/supercatgifs.png",
                username: "supercatgifs",
                title: "Lightsaber cats!",
                type: "IMAGE",
                src: "https://i.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif",
                tags: "#star wars #cats #fighting #battle #lightsaber"
            }
        ];
    }
};

export default FeedService;
