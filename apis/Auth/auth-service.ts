import { UserData } from "apis/Auth/types";
import { LoginRequest } from "./types";
import API_URL, { API_HOST } from "apis/api";
import axios, { AxiosInstance } from "axios";
class AuthService {
	private base: AxiosInstance;
	private authUrl;

	constructor() {
		this.base = axios.create({
			headers: {
				"Access-Control-Allow-Origin": "http://localhost:5000",
			},
			baseURL: API_HOST,
			withCredentials: true,
		});
		this.authUrl = API_URL.auth;
	}

	async login(data: LoginRequest) {
		const { login } = this.authUrl;
		const response = await this.base.post(login, data);
		const result = response.data;
		const statusCode = response.status;
		const userData: UserData = {
			email: result.email,
			nickname: result.nickname,
			userId: result.id,
			userProfileImage: result.profileImage,
			userDescription: result.profileDescription,
			Liked: result.Liked,
			Posts: result.Posts,
		};
		return {
			statusCode,
			userData,
		};
	}
}

export default AuthService;
