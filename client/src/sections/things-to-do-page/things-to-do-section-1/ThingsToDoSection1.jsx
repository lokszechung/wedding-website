import NavBar from "../../../components/navbar/NavBar";
import "./ThingsToDoSection1.css";
import siena from "../../../assets/siena.jpeg";
import cathedral from "../../../assets/cathedral.jpeg";

const ThingsToDoSection1 = () => {
	return (
		<section className="ttds1-section">
			<NavBar location="things-to-do" />
			<div className="ttds1-content">
				<h1>Things to do in Siena.</h1>
				<hr />
				<div className="things-to-do-list">
					<p>
						Siena, Italy, is a charming little town. Explore its cobblestone
						streets and discover amazing art, history, and delicious food!
						Here&apos;s what you can&apos;t miss:
					</p>
					<ul>
						<li>
							<p>
								<strong>Piazza del Campo:</strong> See this unique, shell-shaped
								square, the center of town. Twice a year, it becomes a racetrack
								for a wild horse race!
							</p>
						</li>
						<li>
							<p>
								<strong>Siena Cathedral:</strong> Be amazed by this black and
								white marble church. Don&apos;t miss the Piccolomini Library
								with its cool paintings.
							</p>
						</li>
						<li>
							<p>
								<strong>Torre del Mangia:</strong> Climb this tall tower for
								epic views of Siena!
							</p>
						</li>
						<li>
							<p>
								<strong>Palazzo Pubblico & Museo Civico:</strong> This town hall
								has amazing art and a museum with a famous painting called
								Maestà.
							</p>
						</li>
						<li>
							<p>
								<strong>Contrade Fun:</strong> Siena is divided into fun
								neighborhoods called contrade. Look for their flags and maybe
								even join a contrade event!
							</p>
						</li>
						<li>
							<p>
								<strong>Tuscan Countryside Day Trip:</strong> Rent a car and
								explore the beautiful rolling hills, cute villages, and wineries
								around Siena.
							</p>
						</li>
						<li>
							<p>
								<strong>Sienese Food Feast:</strong> Try pici (thick pasta),
								pecorino cheese, and wild boar stew. Don&apos;t forget the
								delicious Tuscan wine!
							</p>
						</li>
					</ul>
				</div>
				<div className="ttds1-img-div ttds1-img-div-1">
					<img className="ttds1-img ttds1-img-1" src={siena} alt="siena" />
				</div>
				<div className="ttds1-img-div ttds1-img-div-2">
					<img
						className="ttds1-img ttds1-img-2"
						src={cathedral}
						alt="cathedral"
					/>
				</div>
			</div>
		</section>
	);
};

export default ThingsToDoSection1;
