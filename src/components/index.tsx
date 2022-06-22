import React, { useEffect } from "react";
import axios from "axios";
import { AxiosTest, AxiosTestButton } from "./styeld";

const AxiosTestComponent = () => {
	useEffect(() => {
		axios
			.post("/api/test")
			.then((response) => {
				// 성공 핸들링
				alert("요청 성공");
				console.log(response);
			})
			.catch((error) => {
				// 에러 핸들링
				alert("요청 실패");
				console.log(error);
			})
			.then(function () {
				// 항상 실행되는 영역
			});
	}, []);
	return (
		<AxiosTest>
			Test!
			<AxiosTestButton />
		</AxiosTest>
	);
};

export default AxiosTestComponent;
