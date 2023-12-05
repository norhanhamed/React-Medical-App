import React from 'react';
import './footer.css';
import footerImg from '../../Assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import linkedin from '../../Assets/linkedin.png';
import facebook from '../../Assets/facebook.png';
import instegram from '../../Assets/instegram.png';
import twitter from '../../Assets/twitter.png';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 main-footer">
                            <img src={footerImg} alt="" className='footer-logo'/>
                            <p>Lorem ipsum dolor sit constr <br />.Possimus, delectus Possimus, <br /> ipsum sit constr delectus.</p>
                            <div className="footer-contect">
                                <div className="footer-icon">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className="footer-text">
                                    <h6>Contact Us</h6>
                                    <h4> +10 235 146 789</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h2>Quick Links</h2>
                            <ul className='drop-menue'>
                                <li><a href='/'>home</a></li>
                                <li><a href='/'>about</a></li>
                                <li><a href='/'>blog</a></li>
                                <li><a href='/'>booking</a></li>
                                <li><a href='/'>FAQ'S</a></li>
                                <li><a href='/'>our team</a></li>
                                <li><a href='/'>services</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                        <h2>our services</h2>
                            <ul className='drop-menue'>
                                <li><a href='/'>dental care</a></li>
                                <li><a href='/'>cardiac clinic</a></li>
                                <li><a href='/'>massage therapy</a></li>
                                <li><a href='/'>caerdiology</a></li>
                                <li><a href='/'>prcise diagnosis</a></li>
                                <li><a href='/'>ambluance services</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h2>subscribe</h2>
                            <form action="">
                                <input type="email" placeholder='Enter Mail'/>
                                <button type='submit'>subscribe now</button>
                            </form>
                            <ul className='media'>
                                <li><a href='/'><img src={facebook} alt=''/></a></li>
                                <li><a href='/'><img src={instegram} alt=''/></a></li>
                                <li><a href='/'><img src={twitter} alt=''/></a></li>
                                <li><a href='/'><img src={linkedin} alt=''/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-copyright">
                    <div className="row">
                        <div className="col-md-12">
                            <span>Copyright @ 2022 Developed byThemeTreads </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
