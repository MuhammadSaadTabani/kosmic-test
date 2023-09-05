import axios from "axios";
import { getItem } from "../persist-storage";

export const GOOGLE_PACKAGE_ID = ""
export const GOOGLE_DEVELPOER_ID = ""
export const GOOGLE_CLIENT_ID = ""

export const BASE_URL = ""

export const getToken = async () => {
    const user = await getItem("user");
    const token = JSON.parse(user).token
    return token
}

export const getUser = async () => {
    const user = await getItem("user");
    return JSON.parse(user)
}

export const fetchAPI = async (method, api, data, headers=null, params=null) => {

    const url = `${BASE_URL}/api/${api}`;

    var config = {
        method,
        url,
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'multipart/form-data',
        },
        data,
        params
    }
    if(headers){
        config.headers.Authorization = 'Bearer '+ await getToken()
    }
    
    console.log("config", config)
    return await axios(config);

}

