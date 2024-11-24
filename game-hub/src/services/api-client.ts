import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "2c434fc325fe42cfb3ab445da3ad61df"
    }
})