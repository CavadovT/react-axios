import {myAxios}  from "../Helpers/axios";

export const Requestlogin =async ()=>{
const {data}=await myAxios.get("account/useprofile");
console.log(data);
};

