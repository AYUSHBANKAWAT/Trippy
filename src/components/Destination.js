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
import "./DestinationStyles.css"
import DestinationData from "./DestinationData"


const  Destination = ()=>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you oppertuinity to see a lot,within a time frame</p>
            <DestinationData
            className = "first-des"
            heading = "Taal Volcanos, Batngas"
            text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cupiditate dignissimos magni ut facere amet porro inventore natus laboriosam doloribus, ad dolor modi veritatis soluta, rem vitae officiis eaque molestiae? Doloribus nam suscipit eos dolore qui possimus ratione aspernatur neque totam, placeat hic magnam odio iste accusantium aut voluptas veniam fugiat deleniti? Aperiam, corporis sapiente quasi quaerat nisi sit alias. Velit ratione vel debitis amet officiis dolorum ex."
            img1 = {image1}
            img2 = {image2}   
            />
            <DestinationData
            className = "first-des-reverse"
            heading = "Beaches , Snow Deserts"
            text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cupiditate dignissimos magni ut facere amet porro inventore natus laboriosam doloribus, ad dolor modi veritatis soluta, rem vitae officiis eaque molestiae? Doloribus nam suscipit eos dolore qui possimus ratione aspernatur neque totam, placeat hic magnam odio iste accusantium aut voluptas veniam fugiat deleniti? Aperiam, corporis sapiente quasi quaerat nisi sit alias. Velit ratione vel debitis amet officiis dolorum ex."
            img1 = {image5}
            img2 = {image6}   
            />
        </div>

    )
}
export default Destination