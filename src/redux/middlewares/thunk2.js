export default ({dispatch,getState}) => (next) => (action) => {
    console.log(`thunk2 next:::`, next)
    if(typeof action === 'function'){
        action(dispatch,getState)
    }else{
        next(action);
    }
    
}