// Librairies
import React from "react";
import classes from "./Logo.module.css";
import routes from "../../../config/routes";

// Composants
import LogoKs from "../../../assets/img/logo-ks-coaching.png";
import LogoTransform from "../../../assets/img/logo-transformation.png";
import NavigationItem from "../Navigation/NavigationItem/NavigationItem";

function Logo() {
    return (
        // <a className={classes.Logo} href="../../../public/index.html">
        //   <img classeName={classes.pic} src={LogoKs} alt="logo-ks" />
        //   <img classeName={classes.pic} src={LogoTransform} alt="logo-transform" />
        // </a>
        <NavigationItem to={routes.HOME}>
            <div className={classes.Logo}>
                <img classeName={classes.pic} src={LogoKs} alt="logo-ks" />
                <img classeName={classes.pic} src={LogoTransform} alt="logo-transform" />
            </div>
        </NavigationItem>
    );
}

export default Logo;
