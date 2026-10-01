import apiClient from "@/lib/apiClient";
import { LoginPayload, RegistrationPayload, VerifyAccountPayload } from "@/types";


export function userLogin(payload: LoginPayload){
    return apiClient("/api/auth/login", {method:"POST", body:payload});
};

export function userVerifyAccount(payload: VerifyAccountPayload){
    return apiClient("/api/auth/verify-otp", {method:"POST", body:payload});
};

export function userRegistration(payload: RegistrationPayload ){
    return apiClient("/api/auth/register", {method:"POST", body:payload});
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