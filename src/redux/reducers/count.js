const count = (state = 0, action) => {
    switch (action.type) {
        case "increase": {
            return state + 1;
        }
        case "decrease": {
            return state - 1;
        }
        case "asyncIncrease": {
            return  state + 2;
        }
        default:
            return state;
    }
};

export default count;
