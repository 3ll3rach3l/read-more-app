import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';

const setUser = (user) =>{
    return{
        type: SET_USER,
        user
    }
}

export const login = (name, password) =>{
    return async dispatch => {
        const csrfToken = Cookies.get("XSRF-TOKEN");
        const res = fetch("/api/session", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": csrfToken
            },
            body: JSON.stringify({name, password})
        });
        res.data = await res.json(); 
        if(res.ok) dispatch(setUser(res.data)) //will add error handler later

        return res;

    }
}