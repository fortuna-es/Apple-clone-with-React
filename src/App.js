import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// BrowserRouter
// To add the ability to add routing functionality
// Switch
// Checks provided paths and stops checking all as soon as it finds a match
// Route
// Renders components based on the URL

// Home page
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

// Pages
import Iphone from "./Pages/Iphone/iphone";
import Productpage from "./Pages/Productpage/Productpage";
import Ipad from "./Pages/Ipad/Ipad";
import IpadProdPage from "./Pages/Ipad/IpadProdPage";
import Tv from "./Pages/Tv/Tv";
import TvProdPage from "./Pages/Tv/TvProdPage";
import Mac from "./Pages/Mac/Mac";
import MacProdPage from "./Pages/Mac/MacProdPage";
import Watch from "./Pages/Watch/Watch";
import WatchProdPage from "./Pages/Watch/WatchProdPage";
import Airpods from "./Pages/Airpods/Airpods";
import AirpodsProdPage from "./Pages/Airpods/AirpodsProdPage"
import Four04 from "./Pages/Four04/Four04";

// import general css
import "./css/style.css";
import Youtube from "./Components/Youtube/Youtube";
import News from "./Components/News/News";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/mac/:pid" exact component={MacProdPage} />
          <Route path="/ipad" exact component={Ipad} />
          <Route path="/ipad/:pid" exact component={IpadProdPage} />
          <Route path="/airpods" exact component={Airpods} />
          <Route path="/airpods/:pid" exact component={AirpodsProdPage} />
          <Route path="/watch" exact component={Watch} />
          <Route path="/watch/:pid" exact component={WatchProdPage} />
          <Route path="/tv" exact component={Tv} />
          <Route path="/tv/:pid" exact component={TvProdPage} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/iphone/:pid" exact component={Productpage} />    
          <Route path="/" component={Four04} />
        </Switch>
        <Youtube />
        <News />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
