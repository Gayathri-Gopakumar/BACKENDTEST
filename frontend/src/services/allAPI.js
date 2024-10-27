import commonAPI from "./commonAPI";

import SERVERURL from "./serverURL";

// register
export const registerAPI=async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

// login 
export const loginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

// all users
export const getAllUsersAPI=async(reqBody)=>{
    return await commonAPI("GET",`${SERVERURL}/dashboard`,reqBody)
}