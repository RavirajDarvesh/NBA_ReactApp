import React from 'react';
import Styles from './footer.css'
import {Link} from 'react-router-dom';
import {currentYear} from '../../config';


const Footer = () =>{
    return(
        <div className={Styles.footer}>
            <Link to="/" className={Styles.logo}>
                <img alt="Footer logo" src="/images/nba_logo.png"/>
            </Link>
            <div className={Styles.right}>
                @NBA {currentYear} All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer;