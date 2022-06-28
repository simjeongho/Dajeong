import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	@media screen and (max-width: 768px) {
		padding: 0;
	}
`;

const Layout = (props: { children: React.ReactNode }) => {
	return (
		<LayoutContainer>
			<Header />
			<main>{props.children}</main>
			<Footer />
		</LayoutContainer>
	);
};

export default Layout;
