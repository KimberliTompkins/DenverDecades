import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/footer";
import HiddenHeader from "./components/HiddenHeader";
import HorizontalTimeline from "./components/timeline";
import HeroBanner from "./components/HeroBanner";
import Section from "./components/Section";

// CAN WE HAVE A COMPONENT (vertical timeline) IN ANOTHER COMPONENT (container)
import MainBody from "./components/MainBody";
import './App.css';

function App() {
  return (
    <div>
    <Router>
        <Nav />
        <HiddenHeader />
        <HeroBanner />
        <HorizontalTimeline />
        <Section />
        <Section />
        <MainBody />
        <Switch>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
