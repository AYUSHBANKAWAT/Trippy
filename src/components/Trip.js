import"./TripStyles.css"
import TripData from "./TripData"
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

function Trip(){
    return(
        <div className="trip" >
            <h1>RecentProjects</h1>
            <p>You can discover unique destinations using Google Maps</p>
            <div className="tripCard">
                <TripData
                    image = {image3}
                    heading = "Lorem, ipsum dolor" 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corporis suscipit fuga, voluptate veritatis consectetur molestiae fugiat quasi, architecto ipsum nam atque consequuntur maiores eum. Nobis quaerat adipisci quasi officia"
                ></TripData>

                <TripData
                    image = {image7}
                    heading = "Lorem, ipsum dolor" 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corporis suscipit fuga, voluptate veritatis consectetur molestiae fugiat quasi, architecto ipsum nam atque consequuntur maiores eum. Nobis quaerat adipisci quasi officia"
                ></TripData>


                <TripData
                    image = {image5}
                    heading = "Lorem, ipsum dolor" 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corporis suscipit fuga, voluptate veritatis consectetur molestiae fugiat quasi, architecto ipsum nam atque consequuntur maiores eum. Nobis quaerat adipisci quasi officia"
                ></TripData>
                
            </div>
        </div>
        
    )
}


export default Trip;