import axios, {AxiosResponse} from "axios";
import {useContext} from 'react'
import { User } from "../models/User";
import {USERS_API_URL} from '../common/constant/env'

export function getUsers(token: string): Promise<AxiosResponse<any>> {
        return axios.get(`${USERS_API_URL}`,{
            headers: { "auth-token": token },
          });
    }

export function getUser(id: String, token:string): Promise<AxiosResponse<any>> {
    return axios.get(`${USERS_API_URL}/${id}`,{
        headers: { "auth-token": token },
      });
}   

export function createUser(user: User, token: string): Promise<AxiosResponse<any>> {
    return axios.post(`${USERS_API_URL}`, user,{
        headers: { "auth-token": token },
      });
}


export function deleteUser(id: String, token: string): Promise<AxiosResponse<any>> {
    return axios.delete(`${USERS_API_URL}/${id}`,{
        headers: { "auth-token": token },
      });
}   

export function banUser(id: String, token:string) : Promise<AxiosResponse<any>> {
    // const id = user._id;
    // const newuser= {...user};
    // newuser._id = undefined;
    return axios.put(`${USERS_API_URL}/ban/${id}`, {
        headers: { "auth-token": token },
      });
}