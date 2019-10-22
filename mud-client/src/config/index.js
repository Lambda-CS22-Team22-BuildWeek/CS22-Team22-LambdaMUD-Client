import axios from "axios";

export const config = {
    //URLs go here
    //apiURL: "https://lambda-mud-test.herokuapp.com",

    axiosWithAuth: function() {
        return axios.create({
            baseURL: this.apiURL,
            headers: {
                Authorization: `Token ${localStorage.getItem("authToken")}`
            }
        });
    }
};

export default config;