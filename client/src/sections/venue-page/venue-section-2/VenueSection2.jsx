import "./VenueSection2.css";

const VenueSection2 = () => {
	return (
		<section className="vs2-section">
			<div className="vs2-content">
				<h1>The address</h1>
				<div className="vs2-address">
					<p>
						<strong>Laticastelli Country Relais</strong>
					</p>
					<p>Via Laticastelli, 1, 53040 Rapolano Terme SI, Italy</p>
					<p>
						tel: <a href="tel:0039/0577 724419">0039/0577 724419 </a>-{" "}
						<a href="tel:0039/3518655705">0039/3518655705</a>
						<br />
						e-mail:{" "}
						<a href="mailto:contact@laticastelli.com">
							contact@laticastelli.com
						</a>
					</p>
					<p>
						<em>Everything is at one venue!</em>
					</p>
				</div>
			</div>
			<svg className="vs2-svg" width="0" height="0">
				<defs>
					<clipPath id="vs2Clip" clipPathUnits="objectBoundingBox">
						<path
							transform="scale(2, 5.86) translate(-0.5, -0.83)"
							d="M-1, 0.831 L-1, 0.831 l0,0 c0,0 0.25,0.169 0.5,0.169 s0.5,-0.169 0.5,-0.169 l0,0l0,0 c0,0 0.25,0.169 0.5,0.169 s0.5,-0.169 0.5,-0.169 l0,0l0,0 c0,0 0.25,0.169 0.5,0.169 s0.5,-0.169 0.5,-0.169 l0,0 L1, -1 L0, -1 z"
						/>
					</clipPath>
				</defs>
			</svg>
			<div className="vs2-divider"></div>
		</section>
	);
};

export default VenueSection2;
