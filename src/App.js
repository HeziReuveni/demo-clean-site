import React, { useContext, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from "./components/Gallery";
import UploadImages from "./components/UploadImages";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/upload-images" component={UploadImages} />
          <div className="Program-page">
            <Navbar />

            <Hero />
            <About />
            <Demo />
            <div
              style={{
                textAlign: "center",
                fontSize: "1.8rem",
                fontWeight: "bold",
              }}
              className="gallery-page"
            >
              <h2>גלרייה</h2>
              <span className="line"></span>
              <br></br>
              <br></br>
              <Gallery />
            </div>
            <ContactUs />
            <Footer />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
