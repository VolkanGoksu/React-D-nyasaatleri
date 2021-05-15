import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Citys() {

    const [citys, setCitys] = useState([])
    const [citysSup, setCitysSup] = useState(null)

    useEffect(() => {
        getCitys();
    }, [])

    const getCitys = () => {
        axios.get('http://worldtimeapi.org/api/timezone')
            .then(response => {
                //  console.log(res.data);
                setCitys(response.data)
            })
    }

    const searchCity=(e)=>{
         var bar = e.target.value
         setCitysSup((oldCitys)=>{
            return citys.filter(c=>{
                return c.toLowerCase().includes(bar.toLowerCase())
            })
         })
    }

    return (
        <div>
            <div className="row container">
              <form className="col s12 l12 m12">
                 <div className="input-field col s12">
                    <input id="city" className="input-field" type="text" placeholder='search City' onChange={searchCity}/>
                    <label htmlFor="city" className="deep-orange-text"></label>
                 </div>
              </form>
            </div>
            <div className="row">
                {
                    citysSup!=null?
                    (
                        citysSup.map(city => (
                            <div className="col l3 m3 s6" key={city}>
                                <div className="card blue-grey" >
                                    <div className="card-content white-text">
                                        <p>{city}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ):
                    (
                        citys.map(city => (
                            <div className="col l3 m3 s6" key={city}>
                                <div className="card blue-grey" >
                                    <div className="card-content white-text">
                                        <p>{city}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}
