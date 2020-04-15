export default ({ dispatch, getState }) => next => action => {
	console.log('dispatch action:',action)
	next(action);
};
