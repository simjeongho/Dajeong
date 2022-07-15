import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import "../styles/globals.css";
import { LayoutContainer } from "components/Layout/styled";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "antd/dist/antd.css";
import wrapper from "store/configureStore";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "store/slices/user-slice";
function MyApp({ Component, pageProps }: AppProps) {
	//useState lazyinit을 사용해 QueryClient 인스턴스를 생성해
	//QueryClientProvider의 client 값으로 전달해준다.
	const [queryClient] = useState(() => new QueryClient());
	const dispatch = useDispatch();
	useEffect(() => {
		axios.get("/user", { withCredentials: true }).then((res) => {
			console.log("홈!", res);
			if (res.data != null) {
				dispatch(setUserData(res.data));
			}
		});
	}, []);
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps?.dehydrateState}>
					<LayoutContainer>
						<Header />
						<Component {...pageProps} />
						<Footer />
					</LayoutContainer>
				</Hydrate>

				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
}

export default wrapper.withRedux(MyApp);
