import React, { Component } from "react";
class FormRe extends Component {
    render() {
        function handleAdd() {
            alert("Thêm thành công");
        }
        return (
            <div>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-3"></div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputEmail4">Tên</label>
                            <input type="email" className="form-control" placeholder="Định danh" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputPassword4">Tên định danh</label>
                            <input type="text" className="form-control" placeholder="Tên định danh" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3"></div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputAddress">Chức danh</label>
                        <input type="text" className="form-control" placeholder="Dev" />
                        </div>
                    </div>
                <div className="form-row">
                <div className="form-group col-md-3"></div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputCity">Image</label>
                    <input type="file" className="form-control"/>
                </div>
                <div className="form-group col-md-1">
            <label htmlFor="inputState">Type</label>
            <select id="inputState" className="form-control">
                <option selected>Nhân viên</option>
                <option>Khách hàng</option>
            </select>
            </div>
            <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
            </div>
        </div>
        <div className="form-group">
        </div>
        <a href="/home" type="submit" className="btn btn-primary" onClick={handleAdd}>Thêm</a>
        </form>
            </div>
        );
    }
}
export default FormRe;