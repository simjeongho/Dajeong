import { LayoutHeader, LayoutHeaderTitle, LayoutNavbar, LayoutNavItem, LayoutNavLists, LayoutTitlediv } from "./styled";
import GinsenTitle from "assets/images/ginsen.svg";
import { IoImagesOutline, IoFileTrayStackedOutline, IoLogoInstagram, IoDesktopOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
	return (
		<LayoutHeader>
			<LayoutTitlediv>
				<Link href="/">
					<LayoutHeaderTitle>Sim Bwat Da Blog</LayoutHeaderTitle>
				</Link>
				<Image src={GinsenTitle} alt="Ginsen" height={100} />
			</LayoutTitlediv>

			<LayoutNavbar>
				<LayoutNavLists>
					<a target="_blank" href="https://hojung-testbench.tistory.com/" rel="noreferrer">
						<LayoutNavItem>
							<IoDesktopOutline />
							Blog
						</LayoutNavItem>
					</a>

					<LayoutNavItem>
						<IoLogoInstagram />
						Instagram
					</LayoutNavItem>
					<Link href="/Posts">
						<LayoutNavItem>
							<IoFileTrayStackedOutline />
							posts
						</LayoutNavItem>
					</Link>

					<LayoutNavItem>
						<IoImagesOutline />
						Album
					</LayoutNavItem>
				</LayoutNavLists>
			</LayoutNavbar>
		</LayoutHeader>
	);
};

export default Header;
