import { Carousel } from "react-bootstrap";
import "./item.css"
function Slider() {
    return <div className="pl-4 pr-4 pt-2 mt-2 ml-5 mr-5 myslider">
      <Carousel indicators={false} fade className="">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.discordapp.net/attachments/621099308694896660/818931236101816371/FB_IMG_1615303410118.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.discordapp.net/attachments/621099308694896660/816269976469766175/FB_IMG_1613171204310.jpg"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://clips-media-assets2.twitch.tv/AT-cm%7C1026917548-preview-260x147.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
     
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
      </div>
}
export default Slider;

