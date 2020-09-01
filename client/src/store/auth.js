import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';
const REMOVE_USER = 'auth/REMOVE_USER'

//////////////ACTIONS/////////////////////
export const setUser = (user) =>{
    return{
        type: SET_USER,
        user
    }
}

export const removeUser = () =>{
    return{
        type: REMOVE_USER
    }
}

//////////////////THUNKS/////////////////////////////
export const login = (name, password) =>{
    return async dispatch => {
        const csrfToken = Cookies.get("XSRF-TOKEN");
        const res = await fetch("/api/session", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": csrfToken
            },
            body: JSON.stringify({name, password})
        });
        res.data = await res.json(); 

        const {message} = res.data;
        const errorsList = document.querySelector(".errors");
        errorsList.innerHTML = '';
        if(message){
            const errorLi = document.createElement('li');
            errorLi.innerHTML = message;
            errorsList.appendChild(errorLi)

        }
        if(res.ok) dispatch(setUser(res.data.user)) 
        
     
        return res;

    }
}

export const loadUser = () => {
  const authToken = Cookies.get("token");
  if (authToken) {
    try {
      const payload = authToken.split(".")[1];
      const decodedPayload = atob(payload);
      const payloadObj = JSON.parse(decodedPayload);
      const { data } = payloadObj;
      return data;
    } catch (e) {
      Cookies.remove("token");
    }
  }
  return {};
};

export const logout = () => async (dispatch) => {
  const res = await fetch("/api/session", {
    method: "delete",
  });
  if (res.ok) {
    dispatch(removeUser());
  }
};



export default function authReducer(state=loadUser(), action){
    switch (action.type) {
        case SET_USER:
            return action.user

        case REMOVE_USER:
            return {};

        default:
            return state;
    }

}