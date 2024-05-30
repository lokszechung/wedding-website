import "./NavBar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

// import { useLocation } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ location }) => {
	// let { pathname } = useLocation();
	const expand = "md"; //bootstrap md breakpoint

	// if (pathname === "/") {
	// 	pathname = "home";
	// }

	// const pathClassname = "navbar-" + pathname;

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Navbar
			key={expand}
			expand={expand}
			className={`mb-0 ${location} navbar`}
			// className="mb-0 navbar"
		>
			<Container fluid>
				<Navbar.Brand>HevLok Wedding</Navbar.Brand>
				<Navbar.Toggle
					aria-controls={`offcanvasNavbar-expand-${expand}`}
					onClick={handleShow}
				/>
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-${expand}`}
					aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
					placement="bottom"
					backdrop={false}
					onHide={handleClose}
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
							HevLok Wedding
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1">
							<Nav.Link href="#Home">Home</Nav.Link>
							<Nav.Link href="#Schedule">Schedule</Nav.Link>
							<Nav.Link href="#Venue">Venue</Nav.Link>
							<Nav.Link href="#Thigns-to-do">Things to do</Nav.Link>
							<Nav.Link href="#FAQs">FAQs</Nav.Link>
							<Nav.Link href="#Registry">Registry</Nav.Link>
							<Nav.Link href="#RSVP">RSVP</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
				<div className={`offcanvas-bg ${show ? `show` : ``}`}></div>
			</Container>
		</Navbar>
	);
};

export default NavBar;
