import "./HomeSection2.css";
import circle2 from "../../../assets/circle2.svg";
import farfelle from "../../../assets/farfelle.png";
import pizza from "../../../assets/pizza.png";
import { Link } from "react-router-dom";

const HomeSection2 = () => {
	return (
		<section className="hs2-section">
			{/* <div className="hs2-content"> */}
			<div className="hs2-text-container">
				<h2>
					Meet us in{" "}
					<span className="underline-circle">
						Tuscany{" "}
						<img className="circle-highlight" alt="circle2" src={circle2} />
					</span>
					for our wedding on the{" "}
					<span className="underline-wavy">7th of October 2024</span>. Yes,
					there will be <span className="underline-curve">pizza & pasta</span>.
				</h2>
			</div>
			<div className="hs2-img-div hs2-img-div-1">
				<img className="hs2-img hs2-img-1" src={farfelle} alt="farfelle" />
			</div>
			<div className="hs2-img-div hs2-img-div-2">
				<img className="hs2-img hs2-img-2" src={pizza} alt="pizza" />
			</div>
			<div className="rsvp-btn">
				<Link to="/rsvp">RSVP</Link>
			</div>
			{/* </div> */}
		</section>
	);
};

export default HomeSection2;
