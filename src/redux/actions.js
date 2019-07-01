export const increase = () => ({
    type: "increase"
});

export const decrease = () => ({
    type: "decrease"
});

export const asyncIncrease = () => (dispatch,getState) => {
    console.log(dispatch);getState()
    console.log(getState());
    setTimeout(() => {
        dispatch({ type: "asyncIncrease" });
    }, 500);
};
