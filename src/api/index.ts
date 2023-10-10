import axios from "axios";
import { signOut } from "@/utils/auth";

const instance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL, // .env에서 설정 가능
});

instance.interceptors.response.use(
	(response) => response,
	(error) => {
		const {
			response: { status },
		} = error;
		if (status === 403) {
			signOut();
			return;
		}

		return Promise.reject(error);
	}
);

const getAccessToken = () => {
	const localStorageToken = localStorage.getItem("accessToken");
	const sessionStorageToken = sessionStorage.getItem("accessToken");

	return sessionStorageToken ?? localStorageToken ?? "";
};

export const api = {
	get: <T>(url: string, params?: object) =>
		instance.get<T>(url, {
			headers: {
				Authorization: `Bearer ${getAccessToken()}`,
			},
			params,
		}),
	post: <T>(url: string, data: any, config?: any) =>
		instance.post<T>(url, data, {
			headers: {
				Authorization: `Bearer ${getAccessToken()}`,
			},
			...config,
		}),
	put: <T>(url: string, data: any) =>
		instance.put<T>(url, data, {
			headers: {
				Authorization: `Bearer ${getAccessToken()}`,
			},
		}),
	patch: <T>(url: string, data: any) =>
		instance.patch<T>(url, data, {
			headers: {
				Authorization: `Bearer ${getAccessToken()}`,
			},
		}),
	delete: <T>(url: string, params?: object) =>
		instance.delete<T>(url, {
			headers: {
				Authorization: `Bearer ${getAccessToken()}`,
			},
			params,
		}),
};
