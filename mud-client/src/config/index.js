import axios from "axios";

export const config = {
    //URLs go here
    apiURL: 'https://team22adv.herokuapp.com/api',

    axiosWithAuth: function() {
        return axios.create({
            baseURL: this.baseURL,
            headers: {
                Authorization: `Token ${localStorage.getItem("authToken")}`
            }
        });
    }
};
