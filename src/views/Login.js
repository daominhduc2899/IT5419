import React, { Component } from "react";
import './login.css'
import Reg from './Reg.js';
class Login extends Component {
    render() {
        return (
            <div >
              <div className="container">
                  <div className="row">
                      <div className="col-sm">
                      </div>
                      <div className="col-sm">
                      <div className="form-tt">
                <h2>Đăng nhập</h2>
        <form action="#" method="post" name="dang-ky">
          <input type="text" name="username" placeholder="Nhập tên đăng ký" />
          <input type="password" name="password" placeholder="Nhập mật khẩu" />
          <input type="checkbox" id="checkbox" name="checkbox" /><label className="checkbox-text">Nhớ đăng nhập lần sau</label>
          <input type="submit" name="submit" defaultValue="Đăng nhập" />
          <a className="nav-link scrollto" href="/reg">Đăng ký</a>
          <br/>
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
}
export default Login;
