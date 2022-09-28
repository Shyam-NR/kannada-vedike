import '../Header/Header.css'
import langIcon from '../../icons/language.svg'
import logo from '../../images/logo.jpg'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Container fluid md={3} className="header flex px-3">
                <div className="flex languageSection">
                    <img className="m-auto" width="20" height="20" src={langIcon} alt="" />
                    <div id="language" className="m-auto ps-1 notranslate btn">
                        ಕನ್ನಡ
                    </div>
                </div>
                <div className="support me-5 py-2 px-4 red-bg white-txt"><a href="#">Support Us</a></div>
            </Container>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/"> <img
                        id="logo"
                        src={logo}
                        alt=""
                        width="100"
                        height="100"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="/events">Events</Nav.Link>
                            <Nav.Link href="/social">Social Activities</Nav.Link>
                            <Nav.Link href="/alumni">Alumni</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default Header
