import React, {Component} from "react";
import data from "../../data/iphone13.json"
import Card from "../../layouts/Card"
class Iphone13 extends Component {
    render() {
        return (
            <div className="row">
                {data.map(data1 => {
                    return(
                   <Card name={data1.Name} mieuTa={data1.Price} image={data1.Link_Image} link={data1.Link_item}></Card>)})}
            </div>
        );
    }
}
export default Iphone13;