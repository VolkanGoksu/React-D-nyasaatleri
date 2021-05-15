import React,{useEffect} from 'react'
import axios from 'axios';

export default function Citys() {
    useEffect(()=>{
        getCitys();
    },[])
    const getCitys = ()=>{
       axios.get('http://worldtimeapi.org/api/timezone')
       .then(res=>{
           console.log(res.data);
       })
    }
        
    return (
        <div>
           
        </div>
    )
}
