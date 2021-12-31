import React from 'react'
import './Component.css'

const ShowHighestVolume = (props) => {
    return (
        <div>
            <h1 className='title' >Highest volume</h1>
            <h3 className='outputdata' >Date: {props.volume[0]} GMT +0200</h3>
            <h3 className='outputdata'>Volume: {props.volume[1]} €</h3>            
        </div>
    )
}

export default ShowHighestVolume
