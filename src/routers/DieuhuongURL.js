import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Contact from "../componet/contact/Contact.js"
import Home from "../views/Home.js"
import FormRe from "../componet/formRe/FormRe.js"
import Login from "../views/Login.js"
import Reg from "../views/Reg.js"
class DieuhuongURL extends Component {
    render() {
        return (
            <div>
                <Router><Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/reg">
                        <Reg/>
                    </Route>
                    <Route path="/form">
                        <FormRe/>
                    </Route>
                </Switch></Router>
            </div>
        );
    }
}
export default DieuhuongURL;