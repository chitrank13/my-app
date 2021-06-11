//import Cakes from './data';
import './component.css';
import Cake from './Cake.js';
import axios from "axios"
import {useEffect, useState} from "react"
function Cakelist(){
    var apiurl = "https://apibyashu.herokuapp.com/api/allcakes";
    var [Cakes,setCakes] = useState([])
    var [islodding,setLodding]=useState(true)
  useEffect(()=>{
      axios(
          {
              url:apiurl,
              method:"get"
          }
      ).then((response)=>{
setCakes(response.data.data)
setLodding(false)
      },(error)=>{   console.log("error..",error.data)
      setLodding(false)})
   },islodding)
    return(
        <div className="list-container" >
        <div className="card-groups"  >
    {Cakes.map((each,index)=>{   
        return (    
                 <Cake data={each} key ={index}></Cake>
         )
 
     })}
  
      </div>
    
      </div>
    )
}
export default Cakelist