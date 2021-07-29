import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
  } from "react-router-dom";

import Home from "./pages/home.js"
import Contact from "./pages/contact.js"


class App extends React.Component {
    render() {
        return (
            <Router>
                <ModalSwitch />
            </Router>
        );
    };
}

function ModalSwitch() {
    let location = useLocation();
    let background = location.state && location.state.background;
    return(
        <Switch location={background || location}>
            <Route exact path="/" children={<Home /> }/>
            <Route path="/art" children={<Art />} />
            <Route path="/contact" children={<Contact />} />
        </Switch>
    );
}
  
function Art() {
    return <h2>Users</h2>;
}

export default App;