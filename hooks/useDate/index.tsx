import { useState, useEffect } from "react";

const useDate = () => {
	const [YMD, setYMD] = useState<String>("");
	const now = new Date();
	const day = now.getDate().toString();
	const getNowYMD = () => {
		const year = now.getFullYear().toString();
		const month = (now.getMonth() + 1).toString();

		setYMD(`${year}년 ` + ` ${month}월 ` + `${day}일`);
	};
	useEffect(() => {
		getNowYMD();
	}, [day]);
	return [YMD];
};

export default useDate;
