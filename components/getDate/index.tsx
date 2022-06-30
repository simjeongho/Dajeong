import { DateContainer, NowDate } from "./styled";
import useDate from "hooks/useDate";

const GetDate = () => {
	const Date = useDate();
	return (
		<DateContainer>
			<NowDate>{Date}</NowDate>
		</DateContainer>
	);
};

export default GetDate;
