import React from 'react';
import Style from './header.css';
import { Link } from 'react-router-dom';
import FontAwsome from 'react-fontawesome';
import SideNavigation from './SideNav/sideNav';

const Header = (props) =>{

    const navBars = () =>{
        return(
            <div className={Style.bars}>
            <FontAwsome name="bars" 
                onClick={props.onOpenNav}
                style={{
                    color:'#ffffff',
                    padding:'10px',
                    cursor: 'pointer'
                }}
            />
            </div>
        )
    }

    const logo=()=>{
        return(
            <Link to="/" className={Style.logo}>
                <img alt="nba logo" src="/images/nba_logo.png"/>
            </Link>

        )
    }

    return(
        <header className={Style.header}>
            <SideNavigation {...props} />
            <div className={Style.headerOpt}>
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header;