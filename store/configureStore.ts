//ConfigureStore.ts
import { Store } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "store/slices/root";
import createSagaMiddleware, { Task } from "redux-saga";
import { rootSaga } from "./saga/root";
export interface SagaStore extends Store {
	sagaTask?: Task;
}
const createStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const store = configureStore({
		reducer: rootReducer,
		middleware: [sagaMiddleware],
		devTools: process.env.NODE_ENV !== "production",
	});
	(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
	return store;
};

const wrapper = createWrapper(createStore, {
	debug: process.env.NODE_ENV === "development",
});

export default wrapper;
