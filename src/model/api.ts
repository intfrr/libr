/**
 * Extremely simple API to talk to the backend api, which is mostly a proxy for ElasticSearch
 */
const API = {
    host : process.env.VUE_APP_API_URL,

    /**
     * @throws Error
     */
    async get(query : string) : Promise<any> {
        const response = await fetch(this.host + query);
        const data = response.json();

        return Promise.resolve(data);
    },

    async put(index : string, payload : any) : Promise<void> {
        return Promise.resolve();
    },

    /**
     * @throws Error
     */
    async post(endpoint : string, data : any) : Promise<any> {
        const response = await fetch(this.host + endpoint, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });

        return Promise.resolve(response);
    },

    /**
     * @throws Error
     */
    async index(index : string, data : any) : Promise<any> {
        const response = await this.post('index/_doc', data);
        return Promise.resolve(response);
    }
}

export default API;