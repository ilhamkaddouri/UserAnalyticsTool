import axios, {AxiosResponse} from "axios";
import { User } from "../models/User";
import {USERS_API_URL} from '../common/constant/env'

export function getUsers(): Promise<AxiosResponse<any>> {
        return axios.get(`${USERS_API_URL}`);
    }

export function logIn(user: User): Promise<AxiosResponse<any>> {
    
    const loginUser = {
        email: user.email,
        password: user.password
    }
    return axios.post(`${USERS_API_URL}/login`, loginUser);
}   

export function signIn(user: User): Promise<AxiosResponse<any>> {
    
    const loginUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        password: user.password,

    }
    return axios.post(`${USERS_API_URL}/register`, loginUser);
}   

export function updateUser(user: User) : Promise<AxiosResponse<any>> {
    const id = user._id;
    const newuser= {...user};
    newuser._id = undefined;
    return axios.put(`${USERS_API_URL}/${id}`, newuser);
}