export const increase = () => ({
    type: "increase"
});

export const decrease = () => ({
    type: "decrease"
});

export const asyncIncrease = () => (dispatch,getState,text) => {
    // console.log(dispatch);getState()
    // console.log(getState());
    console.log(text)
    setTimeout(() => {
        dispatch({ type: "asyncIncrease" });
    }, 500);
};
