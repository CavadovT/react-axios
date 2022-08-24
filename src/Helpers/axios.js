import axios from "axios";
export const myAxios=

    axios.create({
   baseUrl:"http://localhost:44346/api/"
});
myAxios.interceptors.request.use((config)=>{
    const token= localStorage.getItem("userToken");
    config.headers={
        Authorization:`Bearer ${token}`
    };
    return config;
});

