import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css';

const Banner = (props) => {
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <h2>{props.title}</h2>
                            <li>
                                <Link to='/home'>
                                   <FontAwesomeIcon icon={faHome} />home</Link>
                                   / {props.smtitle}
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
