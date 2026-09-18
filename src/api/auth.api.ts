import apiClient from "@/lib/apiClient";


export function userLogin(payload: {email:string; password: string}){
    return apiClient("/api/auth/login", {method:"POST", body:payload});
};

export function userLogout(){
    return apiClient("/api/auth/logout", {method:"POST"});
};

export function getMe(){
    return apiClient("/api/auth/me");
};

export function googleOAuth(payload: {idToken:string}){
    return apiClient("/api/auth/google", {method:"POST", body:payload});
};