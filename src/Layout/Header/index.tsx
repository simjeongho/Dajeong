import React from "react";
import { LayoutHeader, LayoutHeaderTitle, LayoutNavbar, LayoutNavItem, LayoutNavLists } from "./styled";

const Header = () => {
	return (
		<LayoutHeader>
			<LayoutHeaderTitle>Da Jeong Blog</LayoutHeaderTitle>
			<LayoutNavbar>
				<LayoutNavLists>
					<LayoutNavItem>Home</LayoutNavItem>
					<LayoutNavItem>Log in</LayoutNavItem>
					<LayoutNavItem>Blog</LayoutNavItem>
					<LayoutNavItem>Instagram</LayoutNavItem>
				</LayoutNavLists>
			</LayoutNavbar>
		</LayoutHeader>
	);
};

export default Header;
