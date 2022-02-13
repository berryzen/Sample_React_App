import React from 'react'
import { useState } from "react"


//TODO
//Input validation
//Only allow Date range between current date and day smaller than this day, that is not smaller first day of dataset
function InputForm(props) {

    const [startDate, setStartDate] = useState("");  
    const [endDate, setEndDate] = useState("");    
    return (
        <header className='header'>
            <h1 className='title'> Load market data </h1>
           
            <form className='add-form' >
                <div className='form-control'>
                    <label>Start date: </label>
                    <input type='date' 
                    onChange={(e) => setStartDate(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>End date: </label>
                    <input type='date' 
                    onChange={(e) => setEndDate(e.target.value)}/>
                </div>
        
            </form>
    
            <button className='btn btn-block' onClick={()=> props.func(startDate, endDate)}>  Load data </button>
        </header>  
        
    )
}

export default InputForm
