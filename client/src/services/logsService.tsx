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

export function getVisitsRoute(){
    return axios.get(`${LOGS_API_URL}/route`)
}

export function getVisitsPerTime(){
    return axios.get(`${LOGS_API_URL}/time`)
}

export function getDevicesTypes(){
    return axios.get(`${LOGS_API_URL}/visits/devices`)
}

export function getDevicesModels(){
    return axios.get(`${LOGS_API_URL}/visits/devicesModel`)
}

export function getDevicesBrands(){
    return axios.get(`${LOGS_API_URL}/devicesBrand`)
}

export function getVisitsData(){
    return axios.get(`${LOGS_API_URL}/visits/data`)
}

export function getVisitsLocations(){
    return axios.get(`${LOGS_API_URL}/visits/locations`)
}

export function getVisitorsUrlss(){
    return axios.get(`${LOGS_API_URL}/visits/urls`)
}

export function getVisitsTotals(){
    return axios.get(`${LOGS_API_URL}/visits/total`)
}

export function getLastVisitsTotals(){
    return axios.get(`${LOGS_API_URL}/visits/time`)
}

export function getOs(){
    return axios.get(`${LOGS_API_URL}/visits/os`)
}

export function getBrowsers(){
    return axios.get(`${LOGS_API_URL}/visits/browser`)
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
