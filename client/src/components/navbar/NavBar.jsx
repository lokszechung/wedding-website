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
							<Nav.Link className={`${pathname === "home" ? "active" : ""}`}>
								<Link className={`navlink`} to="/">
									Home
								</Link>
							</Nav.Link>
							<Nav.Link
								className={`${pathname === "/schedule" ? "active" : ""}`}
							>
								<Link className={`navlink`} to="/schedule">
									Schedule
								</Link>
							</Nav.Link>
							<Nav.Link className={`${pathname === "/venue" ? "active" : ""}`}>
								<Link className={`navlink`} to="/venue">
									Venue
								</Link>
							</Nav.Link>
							{/* <Nav.Link>Things to do</Nav.Link> */}
							{/* <Nav.Link>FAQs</Nav.Link> */}
							<a
								className="nav-link"
								href="https://www.weddingpresentco.com/find-list/184158/"
								target="_blank"
							>
								Registry
							</a>
							<Nav.Link>
								<Link className={`navlink`} to="/rsvp">
									RSVP
								</Link>
							</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
				<div className={`offcanvas-bg ${show ? `show` : ``}`}></div>
			</Container>
		</Navbar>
	);
};

export default NavBar;
