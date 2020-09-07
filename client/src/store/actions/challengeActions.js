import Cookies from 'js-cookie';

export const SET_GOAL = 'challenge/SET_GOAL';
export const UPDATE_GOAL = 'challenge/UPDATE_GOAL'
export const GET_GOAL = 'challenge/GET_GOAL'

export const setGoal = goal =>{
    return{
        type: SET_GOAL,
        goal
    };
};

export const updateGoal = newGoal =>{
    return{
        type: UPDATE_GOAL,
        newGoal
    }
}

export const getGoal = goal =>{
    return{
        type: GET_GOAL,
        goal
    }
}

export const getGoals = (goal) => async (dispatch) =>{
    const res = await fetch('/api/challenge');
    let data = await res.json();

    if (res.ok) dispatch(getGoal(data.goal))

    return data.goal;

}

export const addGoal = (goal)  => async (dispatch) => {
    console.log("this is beginning of addgoal")
    const res = await fetch("/api/challenge", 
        {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
             "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
        },
        body: JSON.stringify({goal}),
     });
    console.log("this is res on actions", res)

    res.data = await res.json();


    if (res.ok){
        dispatch(setGoal(res.data.goal))
    } 
    
    return res;

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

}