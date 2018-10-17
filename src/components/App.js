import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Films from "./Films";
import People from "./People";
import Error from "./Error";
import Navigation from "./Navigation";
import SingleFilm from './SingleFilm'



class App extends Component {
    render() {
        return (
            <BrowserRouter>
        <React.Fragment>
            <Navbar />
        
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route exact path="/films" component={Films} />
                        <Route exact path="/films/:id" component= {SingleFilm} />
                        <Route exact path="/people" component={People} />
                        {/* <Route component={Error} /> */}
                    </Switch>
                </div>
                </React.Fragment>
            </BrowserRouter>

        );
    }
}

export default App;