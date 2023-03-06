const { DDECREMENT, DINCREMENT } = require("./actionTypes");

// initial state
const initialState = {
	count: 0,
};

// reducer
const dynamicCounterReducer = (state = initialState, action) => {
	switch (action.type) {
		case DINCREMENT:
			return {
				...state,
				count: state.count + 2
			};

		case DDECREMENT:
			return {
				...state,
				count: state.count - 1
			};

		default:
			return state;
	}
};

module.exports = dynamicCounterReducer;
