export const increase = () => ({
    type: "increase"
});

export const decrease = () => ({
    type: "decrease"
});

export const asyncIncrease = (param) => (dispatch,getState,...rest) => {
    // console.log(dispatch);getState()
    // console.log(getState());
    setTimeout(() => {
        dispatch({ type: "increase" });
    }, 500);
};
