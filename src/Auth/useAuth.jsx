import { useContext } from "react";
import { AuthContext } from "./AuthUser";


export function useAuth() {
    return useContext(AuthContext)
}