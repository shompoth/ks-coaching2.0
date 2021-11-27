// Librairies
import React from 'react';
import classes from "./Header.module.css";

// Composants
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

function Header () {
  return (
    <header className={[classes.Header, "container"].join(' ')}>
        <Logo />
        <nav>
          <Navigation />
        </nav>
    </header>
  );
};

export default Header;