import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import moment from 'moment'
export default function Clock({match}) {
   const [clock,setClock] = useState('')
  

    useEffect(()=>{
        //console.log(match.params);
        getClock();
    },[])
    const getClock = () =>{
        axios.get(`http://worldtimeapi.org/api/timezone/${match.params.continent}/${match.params.place}`)
        .then(res=>{
           // console.log(res.data);
          // console.log(res.data.datetime);
          setClock(res.data.datetime)
        })
    }
    return (
        <div className="container">
            <div className="card">
               <Link to={'/'} className="btn-floating halfway-fab waves-light waves-effect deep-gray">
                  <i className="material-icons">undo</i>
               </Link>
               <div className="card-content">
                   <h4 className='red-text'>{match.params.place}</h4>
                   <h3>{moment(clock).format('MMMM Do YYYY, h:mm:ss a')}</h3>
               </div>
            </div>
        </div>
    )
}
