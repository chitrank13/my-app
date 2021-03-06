
import {Link, Router, useParams, withRouter} from "react-router-dom";
import "./component.css";

import axios from "axios";
import { useEffect, useState } from 'react';

function Cakedetails(props){
var params = useParams(props)

var apiurl="https://apibyashu.herokuapp.com/api"+"/cake/"+params.cakeid
var [data,setData]=useState([]);
var [islodding,setLodding]=useState(true)
var [similarCake , setSimilarCakes]=useState()
        useEffect(()=>{
            axios({method:"GET",url:apiurl,data:JSON}).then((response)=>{
                console.log("response",response.data.data)
                setData(response.data.data)
                setLodding(false)
            },(error)=>{
        
                console.log("error..",error)
                setLodding(false)
            });
    
},islodding)
    return(
<div className="container-full">
        <div className="container">

          {islodding}
{!islodding &&
 <div className=" mt-5 card row mb-5 p-4 ">
    
            <div className="card-block">
                <div className="row">
                    <div className="col card-detail-image-block ">
                        <p  className="text-muted"><small ><Link to="/"><span style={{"color":"black"}}>back</span></Link></small></p>
                       <div className="carddetails">
                     
                       <img className=" carddetails-img  mb-3"  src={data.image}  alt="image"/>
                       
                           </div>
                      
                        <div className="action m-5">
							<button className="add-to-cart btn btn-default" type="button">add to cart</button>
							<button className="like btn btn-default" type="button"><span className="fa fa-heart">{data.likes}</span></button>
						</div>
                   
                    </div>
                    <div className="details description col-md-6">
                        <div className="row"> 
                        <h3 className="product-title">{data.name}</h3>
                        <small className="mb-2">by {data.owner.name} </small>
						<div className="rating">
                            Ratings
							<span className="review-no">{data.reviews} rewies</span>
						</div>
                        {
                            data.description && 
                            <>
                             <p className="product-description"><strong>Discription : </strong><span> {data.description}</span></p>
                           
                            </>
                        }
                       
						<h4 className="price">current price: <span>Rs {data.price}</span></h4>
						<hr></hr>
                         </div>
                        
                      
                      {
                            data.ingredients &&
                            <>
                             <strong className="title">INGREDIENTS :</strong>
                          <div className = "ingriedent col-md-6">
                          <ul className="pl-3 .list-container">
                                
                                {data.ingredients.map((value,index)=>{
                                    return(
                                    <li key={index}>{value}</li>
                                    )   
                                })}
                                </ul>
                          </div>
                          

                            </>
                           
                        } 
                        <hr></hr>
                        {data.weight  && <p className="product-description"> <strong> Weight : </strong> <span>{data.weight} kg</span> </p>}
                        {data.type && <p className="product-description"> <strong> Occasion : </strong> <span>{data.type}</span> </p>}
                     {data.flavour &&    <p className="product-description"> <strong> Flavour : </strong> <span>{data.flavour}</span> </p>}
                      
						
					</div>
                 
                </div>
            </div>
      
    </div>}
        </div>
      
        </div>

    )
}

export default Cakedetails