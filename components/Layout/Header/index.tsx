import { LayoutHeader, LayoutHeaderTitle, LayoutNavbar, LayoutNavItem, LayoutNavLists, LayoutTitlediv } from "./styled";
import GinsenTitle from "assets/images/ginsen.svg";
import Image from "next/image";
const Header = () => {
	return (
		<LayoutHeader>
			<LayoutTitlediv>
				<LayoutHeaderTitle>심 봤 다 Blog</LayoutHeaderTitle>
				<Image src={GinsenTitle} alt="Ginsen" height={100} />
			</LayoutTitlediv>

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
