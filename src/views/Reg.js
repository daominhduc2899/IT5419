import React, { Component } from "react";
import './reg.css'
class Reg extends Component {
    render() {
        return (
            <div>
                <div >
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                            </div>
                            <div className="col-sm">
                                <div className="to">
                                    <div className="form">
                                        <h2>Đăng ký</h2>
                                        <i className="fab fa-app-store-ios" />
                                        <label style={{ marginLeft: '-150px' }}>Tên đăng nhập</label>
                                        <input type="text" name="hoten" />
                                        <label>Mật khẩu</label>
                                        <input type="password" name="pw" />
                                        <label >Nhập lại</label>
                                        <input type="password" name="pw" />
                                        <input id="submit" type="submit" name="submit" defaultValue="Gửi" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Reg;
