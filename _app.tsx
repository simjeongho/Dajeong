import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import "../styles/globals.css";
import { LayoutContainer } from "components/Layout/styled";
import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<LayoutContainer>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</LayoutContainer>
	);
}

export default MyApp;
