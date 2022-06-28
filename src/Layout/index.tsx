import React, { ReactElement } from "react";
import Header from "./Header";
import styled from "styled-components";

const LayoutContainer = styled.div`
	display: flex;
`;

const Layout = (props: { children: ReactElement }) => {
	return (
		<LayoutContainer>
			<Header />
			<main>{props.children}</main>
		</LayoutContainer>
	);
};

export default Layout;
