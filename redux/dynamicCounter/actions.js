const { DDECREMENT, DINCREMENT } = require("./actionTypes");

const increment = (value) => {
	return {
		type: DINCREMENT,
		payload: value,
	};
};

const decrement = (value) => {
	return {
		type: DDECREMENT,
		payload: value,
	};
};

module.exports = {
	increment,
	decrement,
};
