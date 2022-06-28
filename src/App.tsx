import React from "react";
import "./App.css";
import Test from "./pages/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/api/test" element={<Test />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
