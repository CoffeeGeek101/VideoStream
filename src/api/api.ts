import axios from "axios";

type pages = string | number;

export default class api {
    baseURL = "https://internship-service.onrender.com";

    constructor(){
        this.baseURL = this.baseURL;
    }

    getVideos = async (page : pages) => {
        try{
            const res = await axios.get(`${this.baseURL}/videos?page=${page}`);
            return res.data.data;
        }catch(err){
            console.log(err);
        }
    }

}