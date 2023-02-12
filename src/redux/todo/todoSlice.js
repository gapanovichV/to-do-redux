import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// начальное состояние
const baseState = {
	data: [],
};

console.log('baseState', baseState);

export const prefix = 'todo';
export const todoSlice = createSlice({
	name: prefix,
	initialState: baseState,
	reducers: {
		addTask: (state, actions) => {
			const todo = {
				id: nanoid(),
				title: actions.payload.title,
				descr: actions.payload.descr,
				complete: false,
			};
			state.data.push(todo);
		},
		delTask: (state, actions) => {
			return {
				...state,
				data: state.data.filter((task) => task.id !== actions.payload.id),
			};
		},
		toggleComplete: (state, actions) => {
			return {
				...state,
				data: state.data.map((task) =>
					task.id === actions.payload.id ? { ...task, complete: !task.complete } : task,
				),
			};
		},
	},
});

export const { addTask, delTask, toggleComplete } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
