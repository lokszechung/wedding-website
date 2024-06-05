import "./VenueSection3.css";

const VenueSection3 = () => {
	return (
		<section className="vs3-section">
			<div className="vs3-content">
				<h1>Getting to the Venue</h1>
				<p>Our recommendation (also the cheapest option):</p>
				<div className="airport-info">
					<h4>
						<span>1 Airport</span>
					</h4>
					<p>The closest airports are Pisa, Florence and Perugia.</p>
				</div>

				<div className="train-info">
					<h4>
						<span>2 Train</span>
					</h4>
					<p>
						Take a train from your airport to Siena, the town closest to the
						venue. You can use Trainline to purchase your train ticket (roughly
						£9).
					</p>
				</div>

				<div className="shuttle-info">
					<h4>
						<span>3 Free Shuttle</span>
					</h4>
					<p>
						We&apos;re looking into shuttles from Siena to the venue and will
						book this for you (likely a pickup time of 2:30pm in Siena). More
						info will be added to this page later.
					</p>
				</div>

				<p>Otherwise...</p>

				<div className="taxi-info">
					<h4>
						<span>Taxi</span>
					</h4>
					<p>
						If you don&apos;t want to get a train, you can carpool and taxi to
						the venue. A taxi from FLORENCE airport for 4 people would cost
						~€240 each way. Card payment is accepted on the taxi.
					</p>
				</div>
			</div>
			<svg className="vs3-svg" width="0" height="0">
				<defs>
					<clipPath id="vs3Clip" clipPathUnits="objectBoundingBox">
						<path
							transform="scale(1,32.5) translate(0, -0.969)"
							d="M-0.025000000000000022, 0.97 L-0.025000000000000022, 1 l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03 L1, -1 L0, -1 z"
						/>
					</clipPath>
				</defs>
			</svg>
			<div className="vs3-divider-container">
				<div className="vs3-divider"></div>
				{/* <div className="vs3-divider-stroke-container"> */}
				<svg
					className="vs3-svg-stroke"
					viewBox="0 0 1 1"
					// width="100%"
					// height="2vw"
					preserveAspectRatio="none"
				>
					<path
						transform="scale(1,32.5) translate(0, -0.969)"
						// transform="scale(1,32.5)"
						fill="transparent"
						stroke="#CF0B0B"
						// strokeWidth={"0.0075px"}
						d="M-100,0.5 L-100,1.5 M-0.025000000000000022, 0.97 L-0.025000000000000022, 1 l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03l0,0 l0.025,-0.03 l0.025,0.03"
					/>
				</svg>
				{/* </div> */}
			</div>
		</section>
	);
};

export default VenueSection3;
