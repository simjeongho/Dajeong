import { postSlice } from "./post-slice";
import { userSlice } from "./user-slice";
import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

const rootReducer = (state: any, action: any) => {
	switch (action.type) {
		case HYDRATE:
			return { ...state, ...action.payload };
		default: {
			const combineReducer = combineReducers({
				user: userSlice.reducer,
				post: postSlice.reducer,
			});
			return combineReducer(state, action);
		}
	}
};

export default rootReducer;
