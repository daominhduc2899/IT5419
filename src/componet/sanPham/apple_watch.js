import React, {Component} from "react";
import data from "../../data/apple_watch.json"
import Card from "../../layouts/Card"
class Watch extends Component {
    render() {
        return (
            <div className="row">
                {data.map(data1 => {
                    return(
                   <Card name={data1.Name_Item} mieuTa={data1.Min_Price} noiBan={data1.Count_shop} image={data1.Image} link="/form"></Card>)})}
            </div>
        );
    }
}
export default Watch;