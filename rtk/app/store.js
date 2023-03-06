const configureStore = require("@reduxjs/toolkit").configureStore;

const counterReducer = require("../features/counter/counterSlice");
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice");

const postReducer = require("../features/post/postSlice");

const { createLogger } = require("redux-logger");
const logger = createLogger();

const store = configureStore({
	reducer: {
		counter: counterReducer,
		dynamicCounters: dynamicCounterReducer,
		post: postReducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(logger);
	},
});

module.exports = store;
