import "./VenueSection4.css";

const VenueSection4 = () => {
	return (
		<section className="vs4-section">
			<div className="vs4-content">
				<div className="vs4-heading-container">
					<p className="vs4-heading">Booking your room at the venue</p>
				</div>
				<ul>
					<li className="booking-1">
						<div>
							<h2>Find a friend.</h2>
							<p>
								All rooms are shared so find a friend to stay with. If you need
								a friend to share with, speak to us.
							</p>
						</div>
					</li>
					<li className="booking-2">
						<div>
							<h2>Book a room.</h2>
							<div className="booking-2-info">
								<p>
									We&apos;ve got exclusive use of the venue and have saved a
									room for you!
								</p>
								<p>
									Click on the spreadsheet link{" "}
									<a
										href="https://docs.google.com/spreadsheets/d/1EiqxLem95dV_pTJxFY95MnHdecyTyJRV3h2wquOxBZU/edit?usp=sharing"
										target="_blank"
									>
										HERE
									</a>{" "}
									and put your name next to the room you would like.
								</p>
								<p>Main beds (Queen bed or twin bed) - €275</p>
								<p>Sofa beds - €210</p>
							</div>
						</div>
					</li>
					<li className="booking-3">
						<div>
							<h2>Payment.</h2>
							<p>
								Once all the rooms are confirmed, we&apos;ll send you a form to
								fill in along with payment details. Payment for each room must
								be made by 1 guest. You will need to handle your reimbursements
								to the payer privately.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default VenueSection4;
