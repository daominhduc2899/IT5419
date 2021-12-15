import React, { Component } from "react";
class Nav extends Component {
    render() {
        return (
            <div>
                <header id="header herp" className="fixed-top header-transparent">
                    <div className="container d-flex align-items-center justify-content-between">
                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><a className="nav-link scrollto active" href="/home">Home</a></li>
                                <li><a className="nav-link scrollto" href="/checkin">Visualization</a></li>
                                <li><a className="nav-link scrollto" href="/login">Login</a></li>
                                        
                                
                                <li><a className="nav-link scrollto" href="/contact">About Us</a></li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle" />
                        </nav>{/* .navbar */}
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
}
export default Nav;