const store = require("./app/store");
const { fetchPosts } = require("./features/post/postSlice");


// console.log(`initial State ${JSON.stringify(store.getState())}`);
// subscribe to state changes
store.subscribe(() => {
	// console.log(store.getState());
});

// disptach actions
store.dispatch(fetchPosts());

// store.dispatch(counterActions.increment());

// store.dispatch(counterActions.decrement());

// // dynamic counter actions
// store.dispatch(dynamicCounterActions.increment(3));

// // store.dispatch(counterActions.increment(2));

// store.dispatch(dynamicCounterActions.decrement(2));
