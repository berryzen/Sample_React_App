import React from 'react'
import { useState } from "react"

function InputForm(props) {
    const [startDate, setStartDate] = useState(null);  
    const [endDate, setEndDate] = useState(null);  
    
    return (
        <form  className='add-form'  onSubmit={() => props.fetchData(startDate, endDate)} >
        <div  className='form-control'>
          <label>Start date: </label>
            <input type='date' 
              onChange={(e) => setStartDate(e.target.value)}
              />
        </div>
        <div className='form-control' >
          <label>End date: </label>
          <input type='date' 
            onChange={(e) => setEndDate(e.target.value)}
            />
        </div>
          <input type='submit' value='Load data' className='btn btn-block'  />
          
      </form>
  
    )
}

export default InputForm
