import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer">
			<h4 className="footer-title">HEVLOK WEDDING</h4>
			<div className="footer-dates-info">
				<p>6—9th October 2024</p>
				<p>
					<Link to="/rsvp">RSVP</Link>
				</p>
			</div>
			<div className="footer-contact-info">
				<p>INFO</p>
				<p>Lok Sze 07741 451 605</p>
				<p>Heather 07856 963 098</p>
			</div>
		</div>
	);
};

export default Footer;
