export const increase = () => ({
    type: "increase"
});

export const decrease = () => ({
    type: "decrease"
});

export const asyncIncrease = (text) => (dispatch,getState) => {
    // console.log(dispatch);getState()
    // console.log(getState());
    console.log(text)
    setTimeout(() => {
        dispatch({ type: "increase" });
    }, 500);
};
