export default ({ dispatch, getState }) => next => action => {
	console.group("thunk1");

	if (typeof action === "function") {
		console.log(`thunk1 action:::`, action);
		return action(dispatch, getState, "text");
	}
	console.log(`thunk1 next:::`, next);
	console.log(`thunk1 action:::`, action);
	return next(action);
};
