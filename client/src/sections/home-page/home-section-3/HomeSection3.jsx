import InfiniteScroll from "../../../components/infinite-scroll/InfiniteScroll";
import "./HomeSection3.css";

import loksDrinksWine from "../../../assets/loks-wine.mp4";
import bottle from "../../../assets/bottle.png";
import wineglass from "../../../assets/wineglass.png";

import { Link } from "react-router-dom";

const HomeSection3 = () => {
	return (
		<section className="hs3-section">
			<div className="hs3-header">
				<InfiniteScroll />
			</div>
			<div className="hs3-video-container">
				<div className="video-inner-container">
					<div className="video-player">
						<video playsInline loop muted autoPlay src={loksDrinksWine}></video>
					</div>
				</div>
			</div>
			<div className="hs3-img-div hs3-img-div-1">
				<img className="hs3-img hs3-img-1" src={bottle} alt="bottle of wine" />
			</div>
			<div className="hs3-img-div hs3-img-div-2">
				<img
					className="hs3-img hs3-img-2"
					src={wineglass}
					alt="glass of wine"
				/>
			</div>
			<div className="hs3-address">
				<p className="address-1">Laticastelli Country Relais</p>
				<p></p>
				<p className="address-2">
					Via Laticastelli, 1, 53040 Rapolano Terme SI, Italy
				</p>
			</div>
			<div className="schedule-btn">
				<Link to="/schedule">THE SCHEDULE</Link>
			</div>
		</section>
	);
};

export default HomeSection3;
