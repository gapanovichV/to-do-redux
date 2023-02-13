import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// начальное состояние
const initialState = {
	data: [],
};

export const prefix = 'todo';
export const todoSlice = createSlice({
	name: prefix,
	initialState,
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
		changeTask: (state, actions) => {
			return {
				...state,
				data: state.data.map((task) =>
					task.id === actions.payload.id
						? { ...task, title: actions.payload.title, descr: actions.payload.descr }
						: task,
				),
			};
		},
	},
});

export const { addTask, delTask, toggleComplete, changeTask } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
