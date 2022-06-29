import {
	LayoutHeader,
	LayoutHeaderImg,
	LayoutHeaderTitle,
	LayoutNavbar,
	LayoutNavItem,
	LayoutNavLists,
	LayoutTitlediv,
} from "./styled";
import GinsenTitle from "assets/image/ginsen.svg";
const Header = () => {
	return (
		<LayoutHeader>
			<LayoutTitlediv>
				<LayoutHeaderTitle>심 봤 다 Blog</LayoutHeaderTitle>
				<LayoutHeaderImg src={GinsenTitle} alt="ginsen" />
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
