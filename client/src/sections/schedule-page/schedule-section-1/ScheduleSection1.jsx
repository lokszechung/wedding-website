import NavBar from "../../../components/navbar/NavBar";
import "./ScheduleSection1.css";

const ScheduleSection1 = () => {
	return (
		<section className="ss1-section">
			<NavBar location="schedule" />
			<div className="ss1-content">
				<div className="ss1-heading">
					<h2>the schedule.</h2>
					<p>
						Here&apos;s our rough schedule. More details will be added as our
						plans firm up.
					</p>
					<p>We can&apos;t wait to celebrate with you!</p>
				</div>
			</div>
		</section>
	);
};

export default ScheduleSection1;
