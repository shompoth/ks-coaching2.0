// Librairies
import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css"

function NavigationItem (props) {
  const css = [classes.NavigationItem];
  if(props.children === "Authentification"){
    css.push(classes.authentification);
  } 

  return (
  <NavLink className={css.join(" ")} exact={props.exact} to={props.to}>{props.children}</NavLink>
  );
};

export default NavigationItem;