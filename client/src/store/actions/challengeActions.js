import Cookies from 'js-cookie';

export const SET_GOAL = 'challenge/SET_GOAL';
export const UPDATE_GOAL = 'challenge/UPDATE_GOAL'

export const setGoal = goal =>{
    return{
        type: SET_GOAL,
        goal,
    };
};

export const updateGoal = newGoal =>{
    return{
        type: UPDATE_GOAL,
        newGoal,
    }
}

export const addNewGoal = (goal, userId)  => async (dispatch) => {
    const res = await fetch("/api/challenges") 
    //     {
    //      method: "post",
    //      headers: {
    //          "Content-Type": "application/json",
    //          "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
    //     },
    //     body: JSON.stringify({goal, userId}),
    //  });
    // res.data = await res.json();

    console.log("this is res on actions", res)

    // const {message} = res.data;
    // const errorsList = document.getElementById("goal-errors")
    // errorsList.innerHTML = "";
    // if (message){
    //     errorsList.style.display = "flex";
    //     // const errors = error.errors
    //     // for (let err of errors){
    //     const errorLi = document.createElement("li");
    //     errorLi.innterHTML = message;
    //     errorsList.appendChild(errorLi)
        
    // }
    
    if (res.ok){
        dispatch(setGoal(res.data.goal))
    } 

    
    return res;
}