export default ({dispatch,getState}) => (next) => (action) => {
    console.group('thunk2')
    console.log(`thunk2 next:::`, next)
    console.log(`thunk2 action:::`, action)
    if(typeof action === 'function'){
        action(dispatch,getState)
    }else{
        next(action);
    }
    
}