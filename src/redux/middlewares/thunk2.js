export default ({ dispatch, getState }) => next => action => {
	console.group("thunk2");
	console.log(`thunk2 action:::`, action);
	if (typeof action === "function") {
		return action(dispatch, getState);
	}
	next(action);
};
