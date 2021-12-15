import React, { Component } from "react";
import axios from "axios";
class Card extends Component {
    constructor (props) {
        super(props)
    };
    render() {
        return (
            <div className="col">
                <div className="card" style={{width: '18rem'}}>
                <img src={this.props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.mieuTa}</p>
                    <a href="#" className="btn btn-primary">Thông tin</a>
                </div>
            </div>
            <hr/>
            </div>
        );
    }
}
export default Card;