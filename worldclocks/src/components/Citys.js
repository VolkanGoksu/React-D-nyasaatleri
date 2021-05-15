import React,{useEffect,useState} from 'react'
import axios from 'axios';

export default function Citys() {

    const [citys,setCitys] = useState([])

    useEffect(()=>{
        getCitys();
    },[])

    const getCitys = ()=>{
       axios.get('http://worldtimeapi.org/api/timezone')
       .then(response=>{
         //  console.log(res.data);
           setCitys(response.data)
       })
    }
        
    return (
        <div className="row">
           {citys.map(city=>(
               <div className="col l3 m3 s6" city={city}>
                   <div className = "card blue-grey" > 
                      <div className = "card-content white-text">
                          <p>{city}</p>
                      </div>
                   </div>
               </div>
           ))}
        </div>
    )
}
