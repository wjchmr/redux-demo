export default ({dispatch,getState}) => (next) => (action) => {
    console.log(`${typeof action}：：：：`, action)
    if(typeof action === 'function'){
        action(dispatch,getState)
    }else{
        next(action);
    }
    
}