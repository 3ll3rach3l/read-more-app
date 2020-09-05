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