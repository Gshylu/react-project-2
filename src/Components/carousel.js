import React ,{Component} from "react"
import Carousel from 'react-bootstrap/Carousel';

export default class Slides extends Component{

render(){
    return(
       <div className="about">
  

       <Carousel>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src="https://tse2.mm.bing.net/th?id=OIP.1oyB0pra1CGHLcka58AtMAHaD4&pid=Api&P=0"
             alt="First slide"
            
           />
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src="https://i1.wp.com/www.indiayojana.in/wp-content/uploads/2021/01/Link-Aadhar-With-Voter-ID.jpg?resize=1024%2C576&ssl=1"
             alt="Second slide"
           />
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src="https://cdn.slidesharecdn.com/ss_thumbnails/aadharcardcorrection-180320132403-thumbnail-4.jpg?cb=1521552428"
             alt="Third slide"
           />
         </Carousel.Item>
       </Carousel>
   </div>
    )}}