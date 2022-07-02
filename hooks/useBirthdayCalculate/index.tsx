import { useState, useEffect } from "react";

const useBirthdayCalculate = () => {
	const [DaeunBirthday, setDaeunBirthday] = useState<number>(0);
	const [JeonghoBirthday, setJeonghoBirthday] = useState<number>(0);
	const now = new Date();
	const day = now.getDay();
	const daeunBirthday = new Date(now.getFullYear(), 12, 9);
	const jeonghoBirthday = new Date(now.getFullYear(), 8, 15);

	const getDateDiff = (d1: Date, d2: Date) => {
		const date1 = new Date(d1);
		const date2 = new Date(d2);

		const diffDate = date1.getTime() - date2.getTime();

		return Math.round(Math.abs(diffDate / (1000 * 60 * 60 * 24))); // 밀리세컨 * 초 * 분 * 시 = 일
	};
	useEffect(() => {
		setDaeunBirthday(getDateDiff(now, daeunBirthday));
		setJeonghoBirthday(getDateDiff(now, jeonghoBirthday));
	}, [day]);
	return [DaeunBirthday, JeonghoBirthday];
};

export default useBirthdayCalculate;
