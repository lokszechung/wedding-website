import "./App.css";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/home-page/HomePage";
import SchedulePage from "./pages/schedule-page/SchedulePage";
import VenuePage from "./pages/venue-page/VenuePage";
import ThingsToDoPage from "./pages/things-to-do-page/ThingsToDoPage";
import RsvpPage from "./pages/rsvp-page/RsvpPage";
import FaqPage from "./pages/faq-page/FaqPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/schedule" element={<SchedulePage />} />
				<Route path="/venue" element={<VenuePage />} />
				<Route path="/things-to-do" element={<ThingsToDoPage />} />
				<Route path="/faq" element={<FaqPage />} />
				<Route path="/rsvp" element={<RsvpPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
