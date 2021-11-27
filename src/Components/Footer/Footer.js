import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return <footer className={[classes.Header, "container"].join(" ")}>Footer</footer>;
}

export default Footer;
