// Librairies
import React from "react";
import classes from "./Navigation.module.css";
import routes from "../../../config/routes";
// import { withRouter } from "react-router-dom";

// Composants
import NavigationItem from "./NavigationItem/NavigationItem";

function Navigation() {
  return (
    <ul className={classes.Navigation}>
      <NavigationItem to={routes.COACHINGS}>Coachings</NavigationItem>
      <NavigationItem to={routes.TEMOIGNAGES}>Témoignages</NavigationItem>
      <NavigationItem to={routes.BOUTIQUE}>Boutique</NavigationItem>
      <NavigationItem exact to={routes.BLOG}>
        Blog
      </NavigationItem>
      <NavigationItem to={routes.ESPACE}>Espace personnel</NavigationItem>
      <div className={classes.authentification}>
        <NavigationItem to={routes.AUTHENTIFICATION}>Authentification</NavigationItem>
      </div>
    </ul>
  );
}

export default Navigation;
// export default withRouter(Navigation);
