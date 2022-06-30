import GetDate from "components/getDate";
import React from "react";
import { LayoutFooter, LayoutFooterList, LayoutFooterListItem } from "./styled";

const Footer = () => {
	const now = new Date();

	return (
		<LayoutFooter>
			<LayoutFooterList>
				<LayoutFooterListItem>
					<GetDate />
				</LayoutFooterListItem>
			</LayoutFooterList>
		</LayoutFooter>
	);
};

export default Footer;
