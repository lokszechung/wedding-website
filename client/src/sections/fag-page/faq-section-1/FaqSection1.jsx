import "./FaqSection1.css";
import NavBar from "../../../components/navbar/NavBar";
import hevlokChinatown from "../../../assets/hevlok-chinatown.jpeg";
import FaqAccordion from "../../../components/faq-accordion/FaqAccordion";

const FaqSection1 = () => {
	return (
		<section className="fs1-section">
			<NavBar location="faq" />
			<div className="fs1-content">
				<h4> Frequently Asked Questions</h4>
				<div className="fs1-img-div fs1-img-div-1">
					<img
						className="fs1-img fs1-img-1"
						src={hevlokChinatown}
						alt="heather & loksze in chinatown"
					/>
				</div>
				<FaqAccordion />
			</div>
		</section>
	);
};

export default FaqSection1;
