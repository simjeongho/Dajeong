import { UserData } from "./../../apis/Auth/types";
import axios, { AxiosResponse } from "axios";
import { userLogin, userLoginRequest } from "store/slices/user-slice";
import { put, takeLatest, all, fork, call } from "redux-saga/effects";

async function loginAPI() {
	const res = axios.post("http://localhost:5000/login");
	return res;
}

function* SagaLogin() {
	try {
		const response: AxiosResponse<UserData> = yield call(loginAPI);
		const { data, status } = response;
		yield put(userLogin());
	} catch (err) {
		console.log(err);
	}
}

function* watchLogin() {
	yield takeLatest(userLoginRequest, SagaLogin);
}

export function* userSaga() {
	yield all([fork(watchLogin)]);
}
