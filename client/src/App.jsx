import "./App.css";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/home-page/HomePage";
import SchedulePage from "./pages/schedule-page/SchedulePage";
import VenuePage from "./pages/venue-page/VenuePage";
import RsvpPage from "./pages/rsvp-page/RsvpPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/schedule" element={<SchedulePage />} />
				<Route path="/venue" element={<VenuePage />} />
				<Route path="/rsvp" element={<RsvpPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
