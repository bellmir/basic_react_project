import { useMutation, useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { api } from "@/api";

export interface IGetUserInfoRes {
	membName: string;
	userId: string;
	email: string;
	phone: string;
	membImgUrl: string;
}
export interface IUpdataUserInfoReq {
	membName: string;
	userId: string;
	email: string;
	phone: string;
	membImgUrl: string;
}
export interface IGetSearchDataRes {
	searchRes: {
		sampleSeq: number;
		sampleName: string;
	}[];
}

export const useGetUserInfoApi = () => {
	const url = "/sample/userInfo";
	return useQuery<AxiosResponse, AxiosError, IGetUserInfoRes>({
		queryKey: ["profile"],
		queryFn: () => api.get(url),
		select: (res) => res.data,
	});
};
export const useUpdataUserInfoApi = () => {
	const url = "/sample/userInfo/update";
	return useMutation<AxiosResponse, AxiosError, IUpdataUserInfoReq>({
		mutationFn: (data) => api.patch(url, data),
	});
};
export const useGetSearchDataApi = (keyword: string) => {
	const url = "/sample/searchData";
	return useQuery<AxiosResponse, AxiosError, IGetSearchDataRes>({
		queryKey: ["searchData", keyword],
		queryFn: () => api.get(url, { keyword: keyword }),
		select: (res) => res.data.searchRes,
	});
};
