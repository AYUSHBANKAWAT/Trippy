import { Component } from 'react';
import './DestinationStyles.css'
import image1 from "../assets/5.jpg"
import image2 from "../assets/7.jpg"
import image3 from "../assets/3.jpg"
import image4 from "../assets/4.jpg"
import image5 from "../assets/10.jpg"
import image6 from "../assets/2.jpg"
import image7 from "../assets/1.jpg"
import image8 from "../assets/9.jpg"
import image9 from "../assets/6.jpg"
import image10 from "../assets/11.jpg"


class DestinationData extends Component{
    render(){
        return (
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>
                        {this.props.text}
                    </p>
                </div>
            <div className="image">
                <img alt="image" src={this.props.img1}/>
                <img alt="image" src={this.props.img2}/>
            </div>
        </div>
        )
    }
} 

export default DestinationData;