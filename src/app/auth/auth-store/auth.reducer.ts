import * as AuthAction from "../auth-store/auth.action"

export interface State{
    token:string;
    isauth:boolean;
}

const initialstate:State={
    token:null,
    isauth:false

}



export function authReducer(state=initialstate,action:AuthAction.AuthAction){
    switch(action.type){
        case (AuthAction.SIGNUP):
            case (AuthAction.SIGNIN):
            return {
                ...state,
                isauth:true
            };

        case (AuthAction.LOGOUT):
            return{
                ...state,
                token:null,
                isauth:false
            }
        case (AuthAction.SET_TOKEN):
            return{
                ...state,
                token:action.payload
            };
        default :
            return state;
    }    
}