import './App.css';
import Nav from './layouts/Nav';
import Footer from './layouts/Footer';
import React from 'react';
import Bar1 from "./componet/Visualization/Bar1.js";

import jwt_decode from "jwt-decode";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from "./componet/contact/Contact"
import Home from "./views/Home"
import FormRe from "./componet/formRe/FormRe"
import Login from "./views/Login"
import Reg from "./views/Reg"
import Page500 from "./views/page500"
import Visualization from "./views/Visualization"
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
          <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-primary" style={{backgroundColor: ''}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">Hidden brand</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{backgroundColor: '#e3f2fd'}}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <a href="/form" className="btn btn-primary">Iphone</a>
                    <a href="/form" className="btn btn-primary">Ipad</a>
                    <a href="/form" className="btn btn-primary">Apple watch</a>
                    <a href="/form" className="btn btn-primary">MacBook</a>
                </div>
            </div>
            <Switch>
              
              <Route path="/login" render={(props) => <Login setToken={this.setToken} user={this.state.user} {...props} />} />
              <Route path="/home" render={(props) => <Home user={this.state.user} {...props} />} />
              <Route path="/500" render={(props) => <Page500  {...props} />} />
              <Route path="/contact" render={(props) => <Contact  {...props} user={this.state.user} {...props} />} />
              <Route path="/form" render={(props) => <FormRe  {...props} user={this.state.user} {...props} />} />
              <Route path="/reg" render={(props) => <Reg  {...props} user={this.state.user} {...props} />} />
              <Route path="/visualization" render={(props) => <Visualization  {...props} user={this.state.user} {...props} />} />
              {/* <Route path="/:unknown">
                <Page404 />
              </Route> */}
              
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <br/>
            <br/>
            <br/>
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
