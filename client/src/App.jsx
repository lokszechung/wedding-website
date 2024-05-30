import "./App.css";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
// import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/home-page/HomePage";
import SchedulePage from "./pages/schedule-page/SchedulePage";

function App() {
	return (
		<>
			{/* <NavBar /> */}
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/schedule" element={<SchedulePage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
