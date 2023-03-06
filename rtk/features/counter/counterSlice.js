const { createSlice } = require("@reduxjs/toolkit");

// initial State
const initialState = {
	count: 1,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state, action) => {
			state.count *= 10;
		},
		decrement: (state, action) => {
			state.count -= 5;
		},
	},
});

module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;
