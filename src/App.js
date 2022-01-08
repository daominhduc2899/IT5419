import './App.css';
import Nav from './layouts/Nav';
import Footer from './layouts/Footer';
import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
// import Bar1 from "./componet/Visualization/Bar1.js";
import logo from './logo.svg';
import jwt_decode from "jwt-decode";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from "./componet/contact/Contact"
import Home from "./views/Home"
import FormRe from "./componet/formRe/FormRe"
import Login from "./views/Login"
import Reg from "./views/Reg"
import Page500 from "./views/page500"
import Visualization from "./views/Visualization"
import 'react-chat-widget/lib/styles.css'
import axios from "axios";
import api from './Api/api';
import Ipad from './componet/sanPham/Ipad.js';
import Watch from './componet/sanPham/apple_watch';
import Mac from './componet/sanPham/mac';
import Iphone13 from './componet/sanPham/iphone13pro';
import Search from './componet/sanPham/search';
// import { computeHeadingLevel } from '@testing-library/react';
// const buttons = [{label: 'first', value: '1'}, {label: 'second', value: '2'}];
// class Popup extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       'message_input': '',
//       'message_output': ''

//     }
//   }


//   handleNewUserMessage = newMessage => {
//     console.log(`New message incoming! ${newMessage}`);
//     // Now send the message throught the backend API
//   };

//   handleQuickButtonClicked = data => {
//     console.log(data);
//     setQuickButtons(buttons.filter(button => button.value !== data));
//   };
//   changeHandler = async (e) => {
//     // console.log(e.target.value)
//     this.setState({ message_input: e.target.value })
//     console.log(this.state.message_input)
//   }
//   insertMessage() {
//     // let msg = this.state.message_input
//     console.log(this.state.message_input)
//     // if (msg === '') {
//     //   return false;
//     // }
//     // ('<div class="message message-personal">' + msg + '</div>').appendTo(('.mCSB_container')).addClass('new');

//   }
//   render() {
//     return (
//       <div className='popup'>
//         <div className='popup_inner'>
//           <div className="App">
//             <Widget
//               handleNewUserMessage={this.handleNewUserMessage}
//               handleQuickButtonClicked={this.handleQuickButtonClicked}
//               // profileAvatar={'text'}
//               title="Polls"
//               subtitle="Polls Demo"
//             />
//           </div>
//           {/* <div class="chat">
//             <div class="chat-title">
//               <h1>Hello</h1>
//             </div>
//             <div class="messages">
//               <div class="messages-content"></div>
//             </div>
//             <div class="message-box">
//               <textarea type="text" class="message-input" onChange={e=> this.changeHandler(e)} placeholder="Type message..."></textarea>
//               <button type="submit" class="message-submit" onClick={ this.insertMessage }>Send</button>
//             </div>
//           </div> */}

//         </div>
//       </div>
//     );
//   }


// }

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
  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat!');
    // setQuickButtons(buttons);
  }

  handleNewUserMessage = async (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    let data = {
      sender: this.props.user,
      message: newMessage
    }
    let req = await api.reqMessage(data)
    req = req.data[0].text
    addResponseMessage(req)
    console.log(req)
  };

  handleQuickButtonClicked = data => {
    console.log(data);
    // setQuickButtons(buttons.filter(button => button.value !== data));
  };
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
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
              <nav className="navbar navbar-expand-lg navbar-light bg-primary" style={{ backgroundColor: '' }}>
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
                  <form className="form-inline my-2 my-lg-0" style={{marginLeft:'40rem'}}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{backgroundColor: '#e3f2fd', color:'black'}}/>
            <a href="/s/iphone+13+pro" className="btn btn-primary">Search</a>
          </form>
                </div>


              </nav>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <a href="/iphone" className="btn btn-primary">Iphone</a>
                    <a href="/ipad" className="btn btn-primary">Ipad</a>
                    <a href="/watch" className="btn btn-primary">Apple watch</a>
                    <a href="/mac" className="btn btn-primary">MacBook</a>
                </div>
            </div>
            {/* <button onClick={this.togglePopup.bind(this)} target="_blank" rel="noreferrer" data-track-content="true" data-content-region-name="quickAction" data-content-name="fbMessengerIcon" class="css-1vv2dga">
              <img class="fb-chat" src="https://shopfront-cdn.tekoapis.com/static/a8e347d31db4d701.png" alt="fb-chat">
              </img>
            </button> */}

            {/* {this.state.showPopup ?
              <Popup
                text='Close Me'
                closePopup={this.togglePopup.bind(this)}
              />
              : null
            } */}
            <div className="App">
              <Widget
                handleNewUserMessage={this.handleNewUserMessage}
                profileAvatar={logo}
                title="Group 23"
                subtitle="hello"
              />
            </div>
            <Switch>

              <Route path="/login" render={(props) => <Login setToken={this.setToken} user={this.state.user} {...props} />} />
              <Route path="/home" render={(props) => <Home user={this.state.user} {...props} />} />
              <Route path="/500" render={(props) => <Page500  {...props} />} />
              <Route path="/contact" render={(props) => <Contact  {...props} user={this.state.user} {...props} />} />
              <Route path="/form" render={(props) => <FormRe  {...props} user={this.state.user} {...props} />} />
              <Route path="/reg" render={(props) => <Reg  {...props} user={this.state.user} {...props} />} />
              <Route path="/iphone" render={(props) => <Iphone  {...props} user={this.state.user} {...props} />} />
              <Route path="/ipad" render={(props) => <Ipad  {...props} user={this.state.user} {...props} />} />
              <Route path="/watch" render={(props) => <Watch  {...props} user={this.state.user} {...props} />} />
              <Route path="/mac" render={(props) => <Mac  {...props} user={this.state.user} {...props} />} />
              <Route path="/iphone13pro" render={(props) => <Iphone13  {...props} user={this.state.user} {...props} />} />
              <Route path="/s/iphone+13+pro" render={(props) => <Search  {...props} user={this.state.user} {...props} />} />
              <Route path="/visualization" render={(props) => <Visualization  {...props} user={this.state.user} {...props} />} />
              {/* <Route path="/:unknown">
                <Page404 />
              </Route> */}

              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <br />
            <br />
            <br />
            <Footer></Footer>
          </div>
        </BrowserRouter>

      </div>

    );
  }


}

export default App;
