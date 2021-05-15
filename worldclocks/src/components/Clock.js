import React,{useEffect} from 'react'

export default function Clock({match}) {
    useEffect(()=>{
        console.log(match);
    })
    return (
        <div>
            <h1>Clock info</h1>
        </div>
    )
}
