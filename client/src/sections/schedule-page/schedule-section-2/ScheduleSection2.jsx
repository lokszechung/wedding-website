import "./ScheduleSection2.css";

import pizzaboard from "../../../assets/pizzaboard.png";
import lemons from "../../../assets/lemons.png";
import gelato from "../../../assets/gelato.png";
import italyflag from "../../../assets/italyflag.png";

const ScheduleSection2 = () => {
	return (
		<section className="ss2-section">
			<div className="ss2-content">
				<>
					<div className="sunday-title">
						<h4>Sunday 6th October 2024</h4>
						<h3>
							<strong>Check-in & Welcome Party</strong>
						</h3>
					</div>
					<div className="sunday-info">
						<p className="sunday-address">
							<strong>
								Laticastelli Country Relais
								<br />1 Via Laticastelli, Toscana 53040, Italy
							</strong>
						</p>
						<p></p>
						<p>
							Casual Attire: Anything goes, from sundresses and sandals to jeans
							and tees.
						</p>
						<p>
							Check-in is at 3pm and we&apos;ll treat you to pizza and drinks to
							welcome you on arrival. Come hang out with us the night before the
							wedding!
						</p>
					</div>

					<div className="ss2-img-div ss2-img-div-1">
						<img
							className="ss2-img ss2-img-1"
							src={pizzaboard}
							alt="pizza and board"
						/>
					</div>
				</>
				<>
					<div className="monday-title">
						<h4>Monday 7th October 2024</h4>
						<h3>
							<strong>The Wedding Day</strong>
						</h3>
					</div>
					<div className="monday-info">
						<p className="monday-address">
							<strong>
								Laticastelli Country Relais
								<br />1 Via Laticastelli, Toscana 53040, Italy
							</strong>
						</p>
						<p></p>
						<p>Cocktail Attire: Think suits, gowns and summer dresses.</p>
						<p>
							For the ladies: the ceremony will be on grass so consider you
							footwear choices!
						</p>
					</div>

					<div className="ss2-img-div ss2-img-div-2">
						<img className="ss2-img ss2-img-2" src={lemons} alt="lemons" />
					</div>
				</>
				<>
					<div className="tuesday-title">
						<h4>Tuesday 8th October 2024</h4>
						<h3>
							<strong>Pool Party</strong>
						</h3>
					</div>
					<div className="tuesday-info">
						<p className="tuesday-address">
							<strong>
								Laticastelli Country Relais
								<br />1 Via Laticastelli, Toscana 53040, Italy
							</strong>
						</p>
						<p></p>
						<p>
							Pool Attire: Wear swimsuits, linen pants, short-sleeved button
							downs, maxi dresses, and sandals.
						</p>
						<p>
							A v chilled day relaxing by the pool and obviously we're having
							pasta for dinner (it&apos;s on us!).
						</p>
					</div>

					<div className="ss2-img-div ss2-img-div-3">
						<img className="ss2-img ss2-img-3" src={gelato} alt="gelato" />
					</div>
				</>
				<>
					<div className="wednesday-title">
						<h4>Wednesday 9th October 2024</h4>
						<h3>
							<strong>Check out</strong>
						</h3>
					</div>
					<div className="wednesday-info">
						{/* <p className="wednesday-address">
							<strong>
								Laticastelli Country Relais
								<br />1 Via Laticastelli, Toscana 53040, Italy
							</strong>
						</p> */}
						{/* <p></p> */}
						<p>Check-out is at 11am.</p>
						<p>
							We&apos;re looking into shuttles stopping at Siena and will updae
							the venue page with more info soon.
						</p>
					</div>

					<div className="ss2-img-div ss2-img-div-4">
						<img
							className="ss2-img ss2-img-4"
							src={italyflag}
							alt="italian flag"
						/>
					</div>
				</>
			</div>
		</section>
	);
};

export default ScheduleSection2;
