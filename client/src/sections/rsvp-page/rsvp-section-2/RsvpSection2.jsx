import { useEffect, useState } from "react";
import hevlokBakery from "../../../assets/hevlok-bakery.jpeg";
import "./RsvpSection2.css";

const RsvpSection2 = () => {
	const [attendanceSelected, setAttendanceSelected] = useState(false);
	const [travelSelected, setTravelSelected] = useState(false);
	const [rsvpSent, setRsvpSent] = useState(false);
	const [rsvpSending, setRsvpSending] = useState(false);
	const [formFields, setFormFields] = useState({
		firstname: "",
		lastname: "",
		attendance: "",
		days: [],
		dietary: "",
		guests: "",
		travel: "",
		flights: "",
		songs: "",
		noodles: "",
	});
	const [error, setError] = useState(null);

	const handleAttendanceChange = () => {
		setAttendanceSelected(true);
	};

	const handleTravelChange = () => {
		setTravelSelected(true);
	};

	const handleRsvpSubmit = (e) => {
		e.preventDefault();
		setRsvpSending(true);
		try {
			console.log("RSVP submitted");
			setRsvpSent(true);
		} catch {
			console.log("RSVP failed to submit");
		} finally {
			setRsvpSending(false);
		}
	};

	const handleChange = (e) => {
		if (e.target.name === "days") {
			if (formFields.days.includes(e.target.value)) {
				setFormFields({
					...formFields,
					days: formFields.days.filter((day) => day !== e.target.value),
				});
			} else {
				setFormFields({
					...formFields,
					days: [...formFields.days, e.target.value],
				});
			}
		}
		// console.log(`${e.target.name} - ${e.target.value}`);
		if (e.target.name !== "days") {
			setFormFields({ ...formFields, [e.target.name]: e.target.value });
			// return setErrors({ ...errors, [e.target.name]: '', message: '' })
		}
	};

	useEffect(() => {
		console.log(formFields);
	}, [formFields]);

	return (
		<section className="rs2-section">
			<div className="rs2-content">
				<div className="rsvp-form-container">
					<form>
						<div className="field-list">
							<fieldset className="form-name">
								<legend>
									<span>Name</span>
									<span>(required)</span>
								</legend>
								<div className="multi-fields">
									<div className="field form-first-name">
										<label htmlFor="firstname">First name</label>
										<input
											type="text"
											id="firstname"
											name="firstname"
											autoComplete="given-name"
											onChange={handleChange}
											required
										/>
									</div>
									<div className="field form-last-name">
										<label htmlFor="lastname">Last name</label>
										<input
											type="text"
											id="lastname"
											name="lastname"
											autoComplete="family-name"
											onChange={handleChange}
											required
										/>
									</div>
								</div>
							</fieldset>
							<fieldset className="form-attendance">
								<legend>
									<span>Are you coming?</span>
									<span>(required)</span>
								</legend>
								<div className="select-container">
									<select
										required
										onChange={(e) => {
											handleAttendanceChange();
											handleChange(e);
										}}
										name="attendance"
										className={!attendanceSelected ? "not-selected" : ""}
									>
										<option value="Select an option" disabled hidden selected>
											Select an option
										</option>
										<option value="Oh Yes!">Oh Yes</option>
										<option value="Sorry No">Sorry No</option>
									</select>
									<div className="dropdown-arrow">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="12"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M0.439453 1.49825L1.56057 0.501709L9.00001 8.87108L16.4395 0.501709L17.5606 1.49825L9.00001 11.1289L0.439453 1.49825Z"
											></path>
										</svg>
									</div>
								</div>
							</fieldset>
							<fieldset className="form-days">
								<legend>
									<span>Which days are you joining us?</span>
								</legend>
								<div className="option">
									<label>
										<input
											type="checkbox"
											value="6th October - Welcome"
											name="days"
											onChange={handleChange}
										></input>
										<span>6th October - Welcome</span>
									</label>
								</div>
								<div className="option">
									<label>
										<input
											type="checkbox"
											value="7th October - Knot Tying"
											name="days"
											onChange={handleChange}
										></input>
										<span>7th October - Knot Tying</span>
									</label>
								</div>
								<div className="option">
									<label>
										<input
											type="checkbox"
											value="8th October - Pool Party"
											name="days"
											onChange={handleChange}
										></input>
										<span>8th October - Pool Party</span>
									</label>
								</div>
							</fieldset>
							<div className="form-diet">
								<label htmlFor="dietary">
									<span>Dietary Requirements</span>
								</label>
								<input
									type="text"
									id="dietary"
									name="dietary"
									onChange={handleChange}
								/>
							</div>
							<div className="form-guests">
								<label htmlFor="guests">
									<span>Additional Guests</span>
								</label>
								<p className="description">Only if they&apos;re invited.</p>
								<textarea
									id="guests"
									placeholder="Are you RSVPing for others? Please type in their names and any dietary requirefications."
									name="guests"
									onChange={handleChange}
								></textarea>
							</div>
							<fieldset className="form-travel">
								<legend>
									<span>Travel</span>
									<p className="description">
										How will you be getting to the venue?
									</p>
								</legend>
								<div className="select-container">
									<select
										required
										onChange={(e) => {
											handleTravelChange();
											handleChange(e);
										}}
										className={!travelSelected ? "not-selected" : ""}
										name="travel"
									>
										<option value="Select an option" disabled hidden selected>
											Select an option
										</option>
										<option value="Train + Shuttle (shuttles will be free)">
											Train + Shuttle (shuttles will be free)
										</option>
										<option value="Taxi from airport (Hail your own taxi)">
											Taxi from airport (Hail your own taxi)
										</option>
										<option value="Car hire (Hire your own vehicle)">
											Car hire (Hire your own vehicle)
										</option>
										<option value="Walk">Walk</option>
									</select>
									<div className="dropdown-arrow">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="12"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M0.439453 1.49825L1.56057 0.501709L9.00001 8.87108L16.4395 0.501709L17.5606 1.49825L9.00001 11.1289L0.439453 1.49825Z"
											></path>
										</svg>
									</div>
								</div>
							</fieldset>
							<div className="form-flights">
								<label htmlFor="flights">
									<span>
										If you&apos;ve booked your flights, what are your flight
										times?
									</span>
								</label>
								<p className="description">
									Please include the airport you&apos;re travelling to/from.
								</p>
								<textarea
									id="flights"
									name="flights"
									onChange={handleChange}
								></textarea>
							</div>
							<div className="form-songs">
								<label htmlFor="songs">
									<span>Song Requests</span>
								</label>
								<textarea
									id="songs"
									name="songs"
									onChange={handleChange}
								></textarea>
							</div>
							<div className="form-noodles">
								<label htmlFor="noodles">
									<span>Favourite Cup Noodle</span>
								</label>
								<textarea
									id="noodles"
									name="noodles"
									onChange={handleChange}
								></textarea>
							</div>
							<button
								className="rsvp-submit-btn"
								type="submit"
								onClick={handleRsvpSubmit}
							>
								<span>{rsvpSending ? "Submitting" : "RSVP"}</span>
							</button>
						</div>
					</form>
				</div>
				<div className="rs2-img-div rs2-img-div-1">
					<img
						className="rs2-img rs2-img-1"
						src={hevlokBakery}
						alt="outside bakery"
					/>
				</div>
			</div>
		</section>
	);
};

export default RsvpSection2;
