const fetch = require("node-fetch");
const { createStore, applyMiddleware } = require("redux");
const thunkMiddleware = require("redux-thunk");
// initial state
const initialState = {
	loading: false,
	posts: [],
	error: "",
};

const fetchPostsRequest = () => {
	return {
		type: "posts/requested",
	};
};

const fetchPostSucceededRequest = (posts) => {
	return {
		type: "posts/success",
		payload: posts,
	};
};

const fetchPostFailedRequest = (error) => {
	return {
		type: "posts/failed",
		payload: error,
	};
};

// reducer

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "posts/requested":
			return {
				...state,
				loading: true,
				error: "",
			};
		case "posts/success":
			return {
				...state,
				posts: action.payload,
				error: "",
			};
		case "posts/error":
			return {
				...state,
				loading: false,
				error: action.payload.messsage,
				posts: [],
			};
		default:
			break;
	}
};

// thunk
const fetchPosts = () => {
	return async (dispatch) => {
		dispatch(fetchPostsRequest());
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts?_limit=5"
			);
			const posts = await response.json();
			dispatch(fetchPostSucceededRequest(posts));
		} catch (err) {
			dispatch(fetchPostFailedRequest());
		}
	};
};

// create store
const store = createStore(reducer, applyMiddleware(thunkMiddleware.default));

// subscribe to state changes
store.subscribe(() => {
	console.log(store.getState());
});


// dispatch action
store.dispatch(fetchPosts())