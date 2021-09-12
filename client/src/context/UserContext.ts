import {createContext} from "react";
export type GlobalContent = {
    userData: {
        token: string,
        user: string,
      }
    setUserData:(value: { token: string; user: string }) => void
  }
export default createContext<GlobalContent>({
    userData: {
        token: '',
        user: '',
    }, // set a default value
    setUserData: () => {},
    });