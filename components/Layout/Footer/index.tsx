import GetDate from "components/getDate";
import useBirthdayCalculate from "hooks/useBirthdayCalculate";
import useDate from "hooks/useDate";
import React from "react";
import { LayoutFooter, LayoutFooterList, LayoutFooterListItem } from "./styled";

const Footer = () => {
	const [daeunBirthday, jeonghoBirthday] = useBirthdayCalculate();
	const now = useDate();
	return (
		<LayoutFooter>
			<LayoutFooterList>
				<LayoutFooterListItem>
					<li>
						<GetDate Date={`현재 날짜 : ${now}`} />
					</li>
					<li>
						<GetDate Date={`다은 생일까지 ${daeunBirthday}일 남았습니다.`} />
					</li>
					<li>
						<GetDate Date={`정호 생일까지 ${jeonghoBirthday}일 남았습니다.`} />
					</li>
				</LayoutFooterListItem>
			</LayoutFooterList>
		</LayoutFooter>
	);
};

export default Footer;
