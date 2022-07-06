//ConfigureStore.ts
import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "store/slices";

const createStore = () => {
	const store = configureStore({
		reducer: rootReducer,
	});
	return store;
};

const wrapper = createWrapper(createStore, {
	debug: process.env.NODE_ENV === "development",
});

export default wrapper;
