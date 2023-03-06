const store = require("./store");
const { increment, decrement } = require("./counter/actions");
// const { dincrement, ddecrement } = require("./dynamicCounter/actions");

// subscribe to state changes
store.subscribe(() => {
	console.log(store.getState());
});

// disptach actions
store.dispatch(increment());

store.dispatch(decrement());

// store.dispatch(increment(20));
// store.dispatch(decrement(10));
