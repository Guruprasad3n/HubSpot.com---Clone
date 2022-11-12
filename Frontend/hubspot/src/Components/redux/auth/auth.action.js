import axios from "axios";
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./auth.types";

export const login=(creds)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        let response=await axios.post("https://unit5project.onrender.com/users/login",creds);
        dispatch({type:LOGIN_SUCCESS,payload:response.data.userdetail})
        console.log (response.data.userdetail)
        return response.data;
    }
    catch(e){
       dispatch({type:LOGIN_ERROR,payload:e.message})
    }
}