import "./NavBar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ location }) => {
	let { pathname } = useLocation();
	const expand = "md"; //bootstrap md breakpoint

	if (pathname === "/") {
		pathname = "home";
	}

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
				<Navbar.Brand href="/">HevLok Wedding</Navbar.Brand>
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
						<Nav className="justify-content-end flex-grow-1 flex-wrap">
							<Link
								className={`nav-link navlink ${
									pathname === "home" ? "active" : ""
								}`}
								to="/"
							>
								<div className="nav-item-content">Home</div>
							</Link>
							<Link
								className={`nav-link navlink ${
									pathname === "/schedule" ? "active" : ""
								}`}
								to="/schedule"
							>
								<div className="nav-item-content">Schedule</div>
							</Link>
							<Link
								className={`nav-link navlink ${
									pathname === "/venue" ? "active" : ""
								}`}
								to="/venue"
							>
								<div className="nav-item-content">Venue</div>
							</Link>
							<Link
								className={`nav-link navlink ${
									pathname === "/things-to-do" ? "active" : ""
								}`}
								to="/things-to-do"
							>
								<div className="nav-item-content">Things to do</div>
							</Link>
							<Link
								className={`nav-link navlink ${
									pathname === "/faq" ? "active" : ""
								}`}
								to="/faq"
							>
								<div className="nav-item-content">FAQs</div>
							</Link>
							<a
								className="nav-link"
								href="https://www.weddingpresentco.com/find-list/184158/"
								target="_blank"
							>
								<div className="nav-item-content">Registry</div>
							</a>
							<Link
								className={`nav-link navlink ${
									pathname === "/rsvp" ? "active" : ""
								}`}
								to="/rsvp"
							>
								<div className="nav-item-content">RSVP</div>
							</Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
				<div className={`offcanvas-bg ${show ? `show` : ``}`}></div>
			</Container>
		</Navbar>
	);
};

export default NavBar;
