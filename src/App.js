import './App.css';
import Nav from './layouts/Nav';
import Footer from './layouts/Footer';
import React from 'react';
import jwt_decode from "jwt-decode";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from "./componet/contact/Contact"
import Home from "./views/Home"
import FormRe from "./componet/formRe/FormRe"
import Login from "./views/Login"
import Reg from "./views/Reg"
import Page500 from "./views/page500"
class App extends React.Component {
  constructor(props) {
    super(props)
    let token = localStorage.getItem('accessToken');
    let user = null
    if (token) {
      try {
        user = jwt_decode(token)
      } catch (err) {
        console.log(err)
      }
    }
    this.state = {
      user: user,
      token: token
    }
  }
  setToken = (newValue) => {
    this.setState({ 'token': newValue, 'user': (newValue ? jwt_decode(newValue) : null) })
  }
  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <div className='content-wrapper'>
          <Nav key={window.location.pathname} user={this.state.user} setToken={this.setToken}></Nav>
            <Switch>
              
              <Route path="/login" render={(props) => <Login setToken={this.setToken} user={this.state.user} {...props} />} />
              <Route path="/home" render={(props) => <Home user={this.state.user} {...props} />} />
              <Route path="/500" render={(props) => <Page500  {...props} />} />
              <Route path="/contact" render={(props) => <Contact  {...props} user={this.state.user} {...props} />} />
              <Route path="/form" render={(props) => <FormRe  {...props} user={this.state.user} {...props} />} />
              <Route path="/reg" render={(props) => <Reg  {...props} user={this.state.user} {...props} />} />
              {/* <Route path="/:unknown">
                <Page404 />
              </Route> */}

              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
