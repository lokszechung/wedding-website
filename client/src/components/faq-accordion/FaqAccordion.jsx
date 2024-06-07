import Accordion from "react-bootstrap/Accordion";
import "./FaqAccordion.css";

const FaqAccordion = () => {
	return (
		<Accordion defaultActiveKey="0" flush>
			<div className="accordion-divider"></div>
			<Accordion.Item eventKey="0">
				<Accordion.Header>What date should I RSVP by?</Accordion.Header>
				<Accordion.Body>
					<p>Please RSVP on our website by the 9th of June 2024.</p>
				</Accordion.Body>
			</Accordion.Item>
			<div className="accordion-divider"></div>
			<Accordion.Item eventKey="1">
				<Accordion.Header>
					Is there parking at the wedding venue?
				</Accordion.Header>
				<Accordion.Body>
					<p>
						If you choose to hire a car, there is ample car parking on site.
					</p>
				</Accordion.Body>
			</Accordion.Item>
			<div className="accordion-divider"></div>
			<Accordion.Item eventKey="2">
				<Accordion.Header>Will the wedding be outdoors?</Accordion.Header>
				<Accordion.Body>
					<p>
						Yes, hopefully! Please dress appropriately for the Tuscan sun.
						Lather up on SPF. Dinner will also be outside so you might want to
						bring a light jacket. Don&apos;t worry, we have a plan B in place if
						there is rain.
					</p>
				</Accordion.Body>
			</Accordion.Item>
			<div className="accordion-divider"></div>
			<Accordion.Item eventKey="3">
				<Accordion.Header>Will there be a shuttle service?</Accordion.Header>
				<Accordion.Body>
					<p>
						We are looking into this and will add more info on the ‘Venue’ page.
						Shuttles will likely run from Siena to the venue and will be on us
						(so FREE travel for you!).
					</p>
				</Accordion.Body>
			</Accordion.Item>
			<div className="accordion-divider"></div>
			<Accordion.Item eventKey="4">
				<Accordion.Header>What is the dress code?</Accordion.Header>
				<Accordion.Body>
					<p>
						Welcome party - wear whatever you don&apos;t mind dripping a bit of
						pizza sauce on.
					</p>
					<p>
						Wedding day - cocktail attire. Go ham on the colours and patterns.
					</p>
					<p>
						Pool party - the clue is in the name. Wear what you would to a fancy
						beach holiday. Don&apos;t forget your inflatables.
					</p>
				</Accordion.Body>
			</Accordion.Item>
			<div className="accordion-divider"></div>
			<Accordion.Item eventKey="5">
				<Accordion.Header>Can I bring a plus one?</Accordion.Header>
				<Accordion.Body>
					<p>
						Unfortunately, due to space limitations, we simply can&apos;t afford
						for all of our lovely guests to bring a guest of their own.
					</p>
					<p>
						Plus ones are therefore by invitation only and we ask other guests
						to please not bring a plus one. Thank you so much for understanding!
					</p>
				</Accordion.Body>
			</Accordion.Item>
			<div className="accordion-divider"></div>
			<Accordion.Item eventKey="6">
				<Accordion.Header>Where do we send your wedding gift?</Accordion.Header>
				<Accordion.Body>
					<p>
						Your presence at our wedding is the greatest gift we could ask for!
					</p>
					<p>
						If you would like to give us a gift, you can have it delivered to
						our home. Please contact us for our address.
					</p>
				</Accordion.Body>
			</Accordion.Item>
			<div className="accordion-divider"></div>
			<Accordion.Item eventKey="7">
				<Accordion.Header>Do I need to bring cash?</Accordion.Header>
				<Accordion.Body>
					<p>The currency in Italy is the Euro (EUR).</p>
					<p>You can pay by card at the wedding venue and for taxis.</p>
				</Accordion.Body>
			</Accordion.Item>
			<div className="accordion-divider"></div>
			<Accordion.Item eventKey="8">
				<Accordion.Header>When shall I arrive?</Accordion.Header>
				<Accordion.Body>
					<p>
						Check-in is from 3pm on the 6th of October. Please do not arrive any
						earlier than 3pm as you won&apos;t be allowed in!
					</p>
				</Accordion.Body>
			</Accordion.Item>
			<div className="accordion-divider"></div>
			<Accordion.Item eventKey="9">
				<Accordion.Header>When do I have to leave?</Accordion.Header>
				<Accordion.Body>
					<p>Check-out is at 11am on the 9th of October.</p>
					<p>
						Obviously, if you have a flight and need to leave earlier, go do
						that.
					</p>
				</Accordion.Body>
			</Accordion.Item>
			<div className="accordion-divider"></div>
			<Accordion.Item eventKey="10">
				<Accordion.Header>
					Am I allowed to take photos during the wedding ceremony?
				</Accordion.Header>
				<Accordion.Body>
					<p>
						Heather: Obviously, wedding photos are super important to me. I even
						blew our wedding photography budget to get a photographer I love.
					</p>
					<p>
						So please, let our expensive photographer do the work and refrain
						from taking any photographs during the ceremony. We&apos;d love for
						you to be present and we&apos;d love to see your faces (not your
						devices).
					</p>
					<p>
						Feel free to take as many photos as you want outside of the
						ceremony!
					</p>
				</Accordion.Body>
			</Accordion.Item>
			<div className="accordion-divider"></div>
		</Accordion>
	);
};

export default FaqAccordion;
