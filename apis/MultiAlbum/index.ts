import { API_HOST } from "apis/api";
import axios from "axios";
import { useInfiniteQuery } from "react-query";

export const GetAllMultiAlbum = async ({ page = 1 }) => await axios.get(`${API_HOST}/multiAlbum/${page}`);

const useGetAllMultiAlbum = () => {
	const res = useInfiniteQuery(["GetAllMultiAlbum"], ({ pageParam = 1 }) => axios.get(`${API_HOST}/multiAlbum`));
};
