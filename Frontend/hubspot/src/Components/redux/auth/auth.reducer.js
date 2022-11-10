import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./auth.types";

let token = localStorage.getItem("user");
const intialState={
    isAuth :false,
    token: token,
    user:{},
    loading :false, 
    error:false,
    errorMessage:"",
};

export const  authReducer=(state=intialState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:{
          
         return{
           ...state,
           loading:true,
           error:false
         }
        }
        case LOGIN_SUCCESS:{
            localStorage.setItem("user", payload);
         return{
            ...state,
            isAuth:true,
            user:payload,
            loading:false,
            error:false,
         }
        }
        case LOGIN_ERROR:{
           
         return{
            ...state,
            isAuth:false,
            loading:false,
            error:true,
            errorMessage:payload
         }
        }

        case LOGOUT:{
            localStorage.removeItem("user");
           return{
            ...state,
            isAuth:false,
            token:"",
           }
        }
        default:{
            return state;
        }
    }
}