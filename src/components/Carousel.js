import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

  
import './component.css';


let Coursel = () =>{
    return (

<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="/CakeItem-01.jpg" className="d-block Coursel-img w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="/CakeItem-02.jpg" className="d-block Coursel-img w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="/CakeItem-03.jpg" className="d-block Coursel-img w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Coursel;