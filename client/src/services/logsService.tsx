import axios, {AxiosResponse} from "axios";
import { User } from "../models/User";
import {LOGS_API_URL} from '../common/constant/env'


export function verifyToken(token: string){
    return axios.post(`${LOGS_API_URL}/verifytoken`,null,{
        headers: { "auth-token": token },
      });
}

export function getVisits(){
    return axios.get(`${LOGS_API_URL}/visits`)
}

export function getVisitsDate(){
    return axios.get(`${LOGS_API_URL}/date`)
}

export function getVerify(token: string){
    return axios.get(`${LOGS_API_URL}/`,{
        headers: { "auth-token": token },
      });
}

export function logIn(user: User): Promise<AxiosResponse<any>> {
    
    const loginUser = {
        email: user.email,
        password: user.password
    }
    return axios.post(`${LOGS_API_URL}/login`, loginUser);
}   

export function signIn(user: User): Promise<AxiosResponse<any>> {
    
    const loginUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        password: user.password,

    }
    return axios.post(`${LOGS_API_URL}/register`, loginUser);
}   
