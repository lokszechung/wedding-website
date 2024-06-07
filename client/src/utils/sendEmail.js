import emailjs from "@emailjs/browser";

const sendEmail = async (rsvp) => {
	const rsvpFormatted = {
		name: rsvp.firstname + " " + rsvp.lastname,
		attendance: rsvp.attendance,
		dayWelcome: rsvp.days.includes("6th October - Welcome") ? "Y" : "N",
		dayWedding: rsvp.days.includes("7th October - Knot Tying") ? "Y" : "N",
		daysPoolParty: rsvp.days.includes("8th October - Pool Party") ? "Y" : "N",
		dietary: rsvp.dietary,
		guests: rsvp.guests,
		travel: rsvp.travel,
		flights: rsvp.flights,
		songs: rsvp.songs,
		noodles: rsvp.noodles,
	};

	await emailjs.send(
		import.meta.env.VITE_SERVICE_ID,
		import.meta.env.VITE_TEMPLATE_ID,
		rsvpFormatted,
		import.meta.env.VITE_PUBLIC_KEY
	);
};

export default sendEmail;
