import React from "react";
import './login.css'
import api from '../Api/api'
import Page500 from './page500'
import { Redirect } from 'react-router-dom';
// import Reg from './Reg.js';
class Login extends React.Component {
  constructor(props) {
    super(props)
    var successRegister = false
    // if (this.props.location.state && this.props.location.state.successRegister) {
    //   successRegister = this.props.location.state.successRegister
    // }
    this.state = {
      "serverError": false,
      "formData": {},
      "logInFailed": false,
      "successRegister": successRegister,
      "successLogin": false
    }

  }
  render() {
    var failedLogIn = ''
    var successRegister = ''

    if (this.state.serverError === true) {
      return <Page500 />
    }

    if (this.props.user != null || this.state.successLogin === true) {
      let returnPage = '/home'
      
      return <Redirect to={{ pathname: returnPage }}></Redirect>
    }


    if (this.state.successRegister === true) {
      successRegister = <div className="row success-register text-primary">
        Bạn đã đăng ký thành công và có thể đăng nhập
      </div>;
    }

    if (this.state.logInFailed === true) {
      failedLogIn = <div className="row failed-login">
        Tài khoản hoặc mật khẩu không đúng
      </div>;
      successRegister = '';
    }
    return (
      <div >
        <div className="container">
          <div className="row">
            <div className="col-sm">
            </div>
            <div className="col-sm">
              <div className="form-tt">
                <h2>Đăng nhập</h2>
                <form action="#" method="post" name="dang-ky" onSubmit={e => this.logInUser(e)}>
                  {failedLogIn}
                  {successRegister}
                  <input type="text" name="username" onChange={e => this.changeHandler(e)} placeholder="Nhập tên đăng ký" />
                  <input type="password" name="password" onChange={e => this.changeHandler(e)} placeholder="Nhập mật khẩu" />
                  <input type="checkbox" id="checkbox" name="checkbox" /><label className="checkbox-text">Nhớ đăng nhập lần sau</label>
                  <input type="submit" name="submit" defaultValue="Đăng nhập" />
                  <a className="nav-link scrollto" href="/reg">Đăng ký</a>
                  <br />
                  <label href="http://google.com" className="psw-text">Quên mật khẩu</label>
                </form>
              </div>
            </div>
            <div className="col-sm">
            </div>
          </div>
        </div>
      </div>
    );
  }
  changeHandler(e) {
    let name = e.target.name;
    let value = e.target.value;
    let temp = this.state.formData;
    temp[name] = value;
    this.setState({ 'formData': temp })
  }
  componentDidMount() {
    document.title = "Login"
  }
  logInUser = async (e) => {
    let data = this.state.formData
    e.preventDefault()
    try {
      var response = await api.login(data);
      if (response.status === 200) {
        this.setState({ 'successLogin': true })
        localStorage.setItem('accessToken', response.data.accessToken)
        await this.props.setToken(response.data.accessToken)
        return
      }
      if (response.status === 403) {
        this.setState({ 'logInFailed': true })
      }
    } catch (err) {
      console.log(err)
      this.setState({ "serverError": true })
    }
  }
}
export default Login;
