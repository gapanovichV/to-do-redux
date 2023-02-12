import { configureStore } from '@reduxjs/toolkit';
import { todoReducer, prefix as todoPrefix } from './todo/todoSlice';
import { filterReducer, prefix as filterPrefix } from './todo/filterSlice';

export const store = configureStore({
	reducer: {
		[todoPrefix]: todoReducer,
		[filterPrefix]: filterReducer,
	},
});
