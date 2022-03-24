import React, { useState } from 'react'

function SelectButton() {

  const [cumulative, setCumulative] = useState(false)

 
  //  const handleChange = (e) => {
  //   setDateSelected(e.target.value)
  //   console.log(dateSelected)
  // }

  return (
    <div>
      <select name="cumulative" id="cumulative" onChange= { (e) => setCumulative(e.target.value)}>
        <option value='false'>Por dia</option>
        <option value='true'>Total até a data</option>
      </select>
    </div>
  )
}

export default SelectButton;
