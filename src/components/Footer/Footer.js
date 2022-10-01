import React from 'react'
import logo from '../../images/logo.jpg'
import '../Footer/Footer.css'
import facebookIcon from '../../icons/facebook.svg'
import instaIcon from '../../icons/insta.svg'
import twitterIcon from '../../icons/twitter.svg'
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div id="footer">
            <footer className="footer notranslate">
                <Container>
                    <Row>
                        <div className="footer-col first">
                            <div className="flex">
                                <img
                                    src={logo}
                                    height={75}
                                    width={75}
                                    alt=""
                                    style={{ borderRadius: "100%" }}
                                />
                                <h4 className="white-txt my-auto ms-2 font-weight-bold">
                                    KANNADA VEDIKE
                                </h4>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h4>Contact Us</h4>
                            <ul>
                                <li>
                                    <p>
                                        NH 66, Srinivasnagar
                                        <br /> Surathkal, Mangalore
                                        <br /> Karnataka 575025
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span className="white-txt"> 8989898989</span>
                                        <br />{" "}
                                        <Link className="white-txt" to="mailto:kannadavedike@nitk.ac.in">
                                            kannadavedike@nitk.ac.in
                                        </Link>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/#about">About us</Link>
                                </li>
                                <li>
                                    <Link to="/events">Events</Link>
                                </li>
                                <li>
                                    <Link to="/social">Social Activities</Link>
                                </li>
                                <li>
                                    <Link to="/alumni">Alumni</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <Link to="https://m.facebook.com/kannadavedikenitk/" target="_blank">
                                    <img src={facebookIcon} alt="" height={40} width={40} />
                                </Link>
                                <Link
                                    to="https://www.instagram.com/kannadavedike_nitk/"
                                    target="_blank"
                                >
                                    <img src={instaIcon} alt="" height={40} width={40} />
                                </Link>
                                <Link to="https://twitter.com/kv_nitk" target="_blank">
                                    <img src={twitterIcon} alt="" height={40} width={40} />
                                </Link>
                            </div>
                        </div>
                    </Row>
                </Container>
            </footer>
            <div id="lstFooter" className="flex notranslate">
                <span style={{ color: "#afafaf" }}>
                    Copyright All Rights Reserved 2021, Kannada Vedike
                </span>
                <span style={{ color: "#afafaf" }}>
                    Made with ❤️ by
                    <Link to="https://github.com/SaikiranPatil" target="_blank">
                        KV Web Team
                    </Link>
                </span>
            </div>
        </div>

    )
}

export default Footer