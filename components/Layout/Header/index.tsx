import { LayoutHeader, LayoutHeaderTitle, LayoutNavbar, LayoutNavItem, LayoutNavLists, LayoutTitlediv } from "./styled";
import GinsenTitle from "assets/images/ginsen.svg";
import {
	IoImagesOutline,
	IoFileTrayStackedOutline,
	IoLogoGithub,
	IoDesktopOutline,
	IoLogInOutline,
} from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectUser } from "store/configureStore";
const Header = () => {
	const userSelector = useSelector(selectUser);
	const { isLogin } = userSelector;
	return (
		<LayoutHeader>
			<LayoutTitlediv>
				<Link href="/">
					<LayoutHeaderTitle>Sim Bwat Da Blog</LayoutHeaderTitle>
				</Link>
				<Image src={GinsenTitle} alt="Ginsen" height={60} />
			</LayoutTitlediv>

			<LayoutNavbar>
				{isLogin ? (
					<LayoutNavLists>
						<a target="_blank" href="https://hojung-testbench.tistory.com/" rel="noreferrer">
							<LayoutNavItem>
								<IoDesktopOutline />
								Blog
							</LayoutNavItem>
						</a>
						<a target="_blank" href="https://github.com/simjeongho/Dajeong" rel="noreferrer">
							<LayoutNavItem>
								<IoLogoGithub />
								github
							</LayoutNavItem>
						</a>

						<Link href="/Posts">
							<LayoutNavItem>
								<IoFileTrayStackedOutline />
								posts
							</LayoutNavItem>
						</Link>
						<Link href="/Album">
							<LayoutNavItem>
								<IoImagesOutline />
								Album
							</LayoutNavItem>
						</Link>
						<Link href="/Profile">
							<LayoutNavItem>
								<ImProfile />
								Profile
							</LayoutNavItem>
						</Link>
					</LayoutNavLists>
				) : (
					<LayoutNavLists>
						<a target="_blank" href="https://hojung-testbench.tistory.com/" rel="noreferrer">
							<LayoutNavItem>
								<IoDesktopOutline />
								Blog
							</LayoutNavItem>
						</a>
						<LayoutNavItem>
							<IoLogoGithub />
							github
						</LayoutNavItem>
						<Link href="/Login">
							<LayoutNavItem>
								<IoLogInOutline />
								Login
							</LayoutNavItem>
						</Link>
					</LayoutNavLists>
				)}
			</LayoutNavbar>
		</LayoutHeader>
	);
};

export default Header;
