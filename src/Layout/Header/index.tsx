import React from "react";
import { LayoutHeader, LayoutNavbar, LayoutNavItem, LayoutNavLists } from "./styled";

const Header = () => {
	return (
		<LayoutHeader>
			<LayoutNavbar>
				<LayoutNavLists>
					<LayoutNavItem>글쓰기</LayoutNavItem>
				</LayoutNavLists>
			</LayoutNavbar>
		</LayoutHeader>
	);
};

export default Header;
