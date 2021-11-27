// Librairies
import React from "react";
import classes from "./App.module.css";

// Composants
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Home />
      {/* <div className="divWhite">HELLLOOOO</div>
      <div className="divGrey"><span>tes un morray</span></div>
      <div className="divWhite">Home</div> */}
      <Footer />
    </div>
  );
}

export default App;
