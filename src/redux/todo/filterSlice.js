import { createSlice } from '@reduxjs/toolkit';

// начальное состояние
const baseState = {
	filterState: 'all',
};

console.log('baseState', baseState);

export const prefix = 'filterBy';
export const filterSlice = createSlice({
	name: prefix,
	initialState: baseState,
	reducers: {
		setFilter: (state, actions) => {
			return {
				...state,
				filterState: actions.payload.status,
			};
		},
	},
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
