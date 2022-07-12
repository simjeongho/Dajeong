import { API_HOST } from "apis/api";
import { delay } from "./root";
import axios from "axios";
import { userLogin, userLoginRequest, userLogout } from "store/slices/user-slice";
import { put, all, fork, throttle, call } from "redux-saga/effects";
import { LoginRequest } from "apis/Auth/types";

async function loginAPI(data: LoginRequest) {
	const res = axios.post(`${API_HOST}/login`, data);
	return res;
}

function* SagaLogin() {
	try {
		delay(1000);
		yield put(userLogin());
	} catch (err) {
		console.log(err);
	}
}

function logOutApi() {
	axios.post(`${API_HOST}/user/logout`);
}

function* SagaLogOut() {
	try {
		yield call(logOutApi);
		yield put(userLogout());
	} catch (err) {
		console.log(err);
	}
}

function* watchLogin() {
	yield throttle(2000, userLoginRequest, SagaLogin);
}

export function* userSaga() {
	yield all([fork(watchLogin)]);
}
