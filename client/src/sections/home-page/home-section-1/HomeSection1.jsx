import "./HomeSection1.css";
import Navbar from "../../../components/navbar/NavBar";

const HomeSection1 = () => {
	return (
		<section className="hs1-section">
			<svg className="arch-svg" width="0" height="0">
				<defs>
					<clipPath id="archClip" clipPathUnits="objectBoundingBox">
						<path d="M0.495,0 A0.505,0.336,0,0,0,0,0.329 V1 H1 V0.329 A0.505,0.336,0,0,0,0.495,0" />
					</clipPath>
				</defs>
			</svg>
			<Navbar />
			<div className="hs1-content">
				{/* <div className="arch-container"> */}
				<div className="arch-shape arch-shape-1">
					<img
						className="hs1-img hs1-img-1 arch-img"
						src={
							"https://images.squarespace-cdn.com/content/v1/663a8c05772a830cd9dd9e5a/503d7586-9118-4856-b14b-7081079fae9e/721eb08a-b073-4c5b-ab82-b65e49a93be6.jpg"
						}
						alt="img-1"
						style={{ clipPath: "url(#archClip)" }}
					/>
				</div>
				<div className="arch-shape arch-shape-2">
					<img
						className="hs1-img hs1-img-2"
						src={
							"https://images.squarespace-cdn.com/content/v1/663a8c05772a830cd9dd9e5a/33b38030-197b-44d8-a573-e891a82b344e/IMG_2387.jpg"
						}
						alt="img-2"
						style={{ clipPath: "url(#archClip)" }}
					/>
				</div>
				{/* </div> */}
				<div className="hs1-heading-container">
					<h1 className="hs1-heading">
						Heather & Lok Sze are getting married!
					</h1>
				</div>
			</div>
		</section>
	);
};
export default HomeSection1;
