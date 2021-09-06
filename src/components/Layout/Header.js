import React from "react";
import ssImg from '../../assets/ssf.jpeg';
import HeaderCardButton from "./HeaderCardButton";

import classes from './Header.module.css';

const Header = props => {
   return <React.Fragment>
       <header className={classes.header}>
              <h1>SS Foods</h1> 
              <HeaderCardButton onClick={props.showCartHandler}/>
       </header>
       <div className={classes['main-image']}>
           <img src={ssImg} />
       </div>
   </React.Fragment>
};

export default Header;