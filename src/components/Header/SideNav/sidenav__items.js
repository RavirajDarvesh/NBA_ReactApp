import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Style from './sidenav.css';

const SideNavItems = ()=>{

    const items = [
      {
        type:Style.option,
        icon:'home',
        text:'HOME',
        link:'/'
      },
      {
        type:Style.option,
        icon:'file-text-o',
        text:'News',
        link:'/news'
      },
      {
        type:Style.option,
        icon:'play',
        text:'Videos',
        link:'/videos'
      },
      {
        type:Style.option,
        icon:'sign-in',
        text:'Sign in',
        link:'/sign-in'
      },
      {
        type:Style.option,
        icon:'sign-out',
        text:'Sign out',
        link:'/sign-out'
      },
    ]

    const showItem = () =>{
      return items.map((item,i)=>{
          return (
            <div key={i} className={item.type}>
              <Link to={item.link}>
                  <FontAwesome name={item.icon}/>
                  {item.text}
              </Link>
            </div>
          )
      }) 
    } 
    
    return(
      <div>
      {showItem()}
      </div>
    )
}

export default SideNavItems;