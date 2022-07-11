import { UserData } from "apis/Auth/types";
import { LoginRequest } from "./types";
import API_URL, { API_HOST } from "apis/api";
import axios, { AxiosInstance } from "axios";

// export interface IAuthService {
// 	setAuthHeader(): {
// 		headers: {
// 			Authorization: string;
// 			"Content-Type"?: string;
// 		};
// 	};
// }

class AuthService {
	private base: AxiosInstance;
	private authUrl;

	constructor() {
		this.base = axios.create({
			baseURL: API_HOST,
		});
		this.authUrl = API_URL.auth;
	}

	async login(data: LoginRequest) {
		const { login } = this.authUrl;
		const response = await this.base.post(login, data);
		const result = response.data;
		console.log(result);
		console.log(response.status);
		const statusCode = response.status;
		const userData: UserData = {
			email: result.email,
			nickname: result.nickname,
		};
		return {
			statusCode,
			userData,
		};
	}
}

export default AuthService;
