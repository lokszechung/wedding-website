import NavBar from "../../../components/navbar/NavBar";
import "./RsvpSection1.css";

const RsvpSection1 = () => {
	return (
		<section className="rs1-section">
			<NavBar location="rsvp" />
			<div className="rs1-content">
				<div className="rsvp-tab"></div>
				<h4>RSVP Please (by 9th June)</h4>
				<p className="rs1-contact">
					Questions about a wedding? Refer to our Whatsapp 07741 451 605 - Lok
					Sze.
				</p>
			</div>
		</section>
	);
};

export default RsvpSection1;
