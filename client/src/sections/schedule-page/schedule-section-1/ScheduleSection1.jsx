import NavBar from "../../../components/navbar/NavBar";
import "./ScheduleSection1.css";
import weddingItinerary from "/wedding-itinerary.pdf";

const ScheduleSection1 = () => {
	return (
		<section className="ss1-section">
			<NavBar location="schedule" />
			<div className="ss1-content">
				<div className="ss1-heading">
					<h2>the schedule.</h2>
					<p>
						Check out our{" "}
						<a
							href={weddingItinerary}
							target="_blank"
							rel="noopener noreferrer"
						>
							wedding itinerary
						</a>
						!
					</p>
					<p>We can&apos;t wait to celebrate with you!</p>
				</div>
			</div>
		</section>
	);
};

export default ScheduleSection1;
