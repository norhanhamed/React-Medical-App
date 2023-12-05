import React from 'react';
import landScaping from '../Assets/landscape.png';
import './home.css';
//2links for react fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSquare } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>we provide all health care solution</h5>
                            <h2>protect your health and take care of your health</h2>
                            <button><a href='/'>read more</a></button>
                            <span className='plus-icon'>+</span>
                        </div>
                        <div className="col-md-6">
                            <div className="header-box">
                                <img src={landScaping} alt="" />
                                <FontAwesomeIcon icon={faSquare} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;
