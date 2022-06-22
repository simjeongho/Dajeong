import React from "react";
import "./App.css";
import Test from "./pages/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/api/test" element={<Test />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
