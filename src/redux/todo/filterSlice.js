import { createSlice } from '@reduxjs/toolkit';

// начальное состояние
const initialState = {
	filterState: 'all',
};

export const prefix = 'filterBy';
export const filterSlice = createSlice({
	name: prefix,
	initialState,
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
