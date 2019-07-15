export default ({ dispatch, getState }) => next => action => {
    console.log(`thunk next:::`, next, action);
    if (typeof action === "function") {
        return action(dispatch, getState,'text');
    }
    return next(action);
};
