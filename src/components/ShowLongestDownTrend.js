import React from 'react'
import './Component.css'

function ShowLongestDownTrend(props) {
    return (
        <div>
            <h1 className='title'>Longest downtrend </h1>
            <h3 className='outputdata'>Longest Downtrend: {props.downTrendRecord} days </h3>
        </div>
    )
}

export default ShowLongestDownTrend
