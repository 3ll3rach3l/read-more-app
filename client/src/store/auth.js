import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';
const CREATE_USER = 'auth/CREATE_USER';
// const REMOVE_USER = 'auth/REMOVE_USER'

// ////////////ACTIONS/////////////////////
export const setUser = (user) =>{
    return{
        type: SET_USER,
        user
    }
}

export const createUser = (user) => {
  return{
    type: CREATE_USER,
    user
  }
}

// export const removeUser = () =>{
//     return{
//         type: REMOVE_USER
//     }
// }

// ////////////////THUNKS/////////////////////////////
export const login = (name, password) => async (dispatch) => {
  const res = await fetch("/api/session", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
    },
    body: JSON.stringify({name, password})
    });
    res.data = await res.json(); 
        
    const {message} = res.data;
    const errorsList = document.getElementById("errors");
    errorsList.innerHTML = '';
    if(message){
      errorsList.style.display = "flex";
      const errorLi = document.createElement('li');
      errorLi.innerHTML = message;
      errorsList.appendChild(errorLi)
    }
    if(res.ok){
      dispatch(setUser(res.data.user)) 
    } 
  return res;
};

export const loginDemo = () => async (dispatch) => {
  const res = await fetch("/api/session", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
    },
    body: JSON.stringify({ name:"demo@example.com", password: "password" })
  });
  res.data = await res.json();

  const { message } = res.data;
  const errorsList = document.getElementById("errors");
  errorsList.innerHTML = '';
  if (message) {
    errorsList.style.display = "flex";
    const errorLi = document.createElement('li');
    errorLi.innerHTML = message;
    errorsList.appendChild(errorLi)
  }
  if (res.ok) {
    dispatch(setUser(res.data.user))
  }
  return res;
};

export const signup = (name, email, password) => {
  return async (dispatch) => {
    const res = await fetch("/api/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
      body: JSON.stringify({ name, email, password}),
    });
    res.data = await res.json();

      const { message } = res.data;
      const errorsList = document.getElementById("sign-up-errors");
      errorsList.innerHTML = "";
      if (message) {
        errorsList.style.display = "flex";
        const errorLi = document.createElement("li");
        errorLi.innerHTML = message;
        errorsList.appendChild(errorLi);
      }
      if (res.ok) {
        dispatch(setUser(res.data.user));
      }
    if (res.ok) {
      dispatch(createUser(res.data.user));
    }
    return res;
  };
};


// export const logout = () => async (dispatch) => {
//   const res = await fetch("/api/session", {
//     method: "delete",
//   });
//   if (res.ok) {
//     dispatch(removeUser());
//   }
// };



export default function authReducer(state={}, action){
    switch (action.type) {
        case SET_USER:
            return action.user;

        case CREATE_USER:
          return action.user;    

        // case REMOVE_USER:
        //     return {};

        default:
            return state;
    }

}