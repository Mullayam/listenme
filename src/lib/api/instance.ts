import axios from 'axios'
export const axiosInstance = axios.create({
    baseURL:"https://saavn.me/",
    headers:{
        "Content-Type":"application/json"
    }
})