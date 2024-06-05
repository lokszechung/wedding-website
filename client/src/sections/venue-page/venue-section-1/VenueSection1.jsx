import NavBar from "../../../components/navbar/NavBar";
import "./VenueSection1.css";
import venue from "../../../assets/venue.jpeg";

const VenueSection1 = () => {
	return (
		<>
			<svg className="venue-clip" width="0" height="0">
				<defs>
					<clipPath id="venueClip" clipPathUnits="objectBoundingBox">
						<path d="M-1, 0.831 L-1, 0.831 l0,0 c0,0 0.25,0.169 0.5,0.169 s0.5,-0.169 0.5,-0.169 l0,0l0,0 c0,0 0.25,0.169 0.5,0.169 s0.5,-0.169 0.5,-0.169 l0,0l0,0 c0,0 0.25,0.169 0.5,0.169 s0.5,-0.169 0.5,-0.169 l0,0 L1, -1 L0, -1 z" />
					</clipPath>
				</defs>
				<defs>
					<clipPath id="venueClipSmall" clipPathUnits="objectBoundingBox">
						<path d="M-1, 0.884 L-1 0.884 l 0,0 c0 0 0.25,0.116 0.5,0.116 s0.5,-0.116 0.5,-0.116 l 0,0l0,0 c0,0 0.25,0.116 0.5,0.116 s0.5,-0.116 0.5,-0.116 l0,0l0,0 c0,0 0.25,0.116 0.5,0.116 s0.5,-0.116 0.5,-0.116 l0,0 L1, -1 L0, -1 z" />
					</clipPath>
				</defs>
			</svg>
			<section className="vs1-section">
				<NavBar />
				<div className="vs1-background">
					<img src={venue} alt="venue" />
					<div className="vs1-overlay"></div>
				</div>
				<div className="vs1-content">
					<h1>The Venue</h1>
				</div>
			</section>
		</>
	);
};

export default VenueSection1;
