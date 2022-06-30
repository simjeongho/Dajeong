import { DateContainer, NowDate } from "./styled";

type Props = {
	Date: String;
};
const GetDate = ({ Date }: Props) => {
	return (
		<DateContainer>
			<NowDate>{Date}</NowDate>
		</DateContainer>
	);
};

export default GetDate;
