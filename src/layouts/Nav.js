import React, { Component } from "react";
import api from "./../Api/api"
class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0,
            notifications: []

        }
    }
    render() {
        var user = this.props.user
        var logout, login, register, userProfile = ''
        var sepLogin = ''
        if (user != null) {

            userProfile =<a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-user" style={{ "fontSize": "24px" }}></i> &nbsp;<span>{user.username}</span> &nbsp;
                </a>;


            logout =
                <a className="dropdown-item" href="#" onClick={this.logOut}>
                    <p><i className="fas fa-sign-out-alt"></i>&nbsp; Đăng xuất</p>
                </a>
        } else {
            login = <a href='/login' className="login no-user">
                <p>Login</p>
            </a>;
            register = <a href='/reg' className="register no-user">
                <p>Register</p>
            </a>

            sepLogin = <div className="seperator no-user"></div>
        }
        return (
            <div>
                <header id="header herp" className="fixed-top header-transparent">
                    <div className="container d-flex align-items-center justify-content-between">
                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><a className="nav-link scrollto active" href="/home">Home</a></li>
                                <li><a className="nav-link scrollto" href="/visualization">Visualization</a></li>


                                <li><a className="nav-link scrollto" href="/contact">About Us</a></li>
                                <li>{login}</li>
                                <li>{sepLogin}</li>
                                <li>{register}</li>
                                <li>{userProfile}</li>
                                <li>{logout}</li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle" />
                        </nav>
                    </div>
                </header>
                <section id="hero">
                    <div className="hero-container" data-aos="fade-up">
                        <h1>Welcome to Group 23</h1>
                        <h2>Tích hợp hệ thông thông tin</h2>
                        <a href="#about" className="btn-get-started scrollto"><i className="bx bx-chevrons-down" /></a>
                    </div>
                </section>
            </div>
        );
    }
    logOut = async () => {
        localStorage.removeItem('accessToken')
        try {
            await api.logout()
        } catch (err) {
            console.log(err)
        }
        window.location.replace("/");
    }
}
export default Nav;