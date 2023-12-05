import React from 'react';
import Banner from '../Components/Banner/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faHeart, faMap, faMobile } from '@fortawesome/free-solid-svg-icons';
import FormContact from '../Components/FormContact/FormContact';
import './contact.css';

const Contact = () => {
    return (
        <div>
            <Banner title="Contact" smtitle="contact us"/>
            <div className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <FormContact />
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="side">
                                <div className="overlay">
                                    <h3>Contact us For any Information</h3>
                                    <li> <FontAwesomeIcon icon={faMap} />Location</li>
                                    <hr/>
                                    <p>Mansoura mitghamr buha 806 suqe 16, Egypte</p>
                                    <li> <FontAwesomeIcon icon={faEnvelope} />Email & Phone</li>
                                    <hr/>
                                    <p>norhanhamed07@gmail.com</p>
                                    <p>+212 655 255</p>
                                    <li> <FontAwesomeIcon icon={faGlobe} />Fllow Us</li>
                                    <ul>
                                        <li> <FontAwesomeIcon icon={faHeart} /></li>
                                        <li> <FontAwesomeIcon icon={faGlobe} /></li>
                                        <li> <FontAwesomeIcon icon={faMobile} /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
