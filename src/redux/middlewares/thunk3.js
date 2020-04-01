export default ({ dispatch, getState }) => next => action => {
	console.group("thunk3");
	console.log(`thunk3 next---------------`, next);
	console.log(`thunk3 action----------------`, action);

	return next(action);
};
