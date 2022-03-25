import React, { useContext } from 'react'
import CovidContext from '../../context/CovidContext'
import './Slider.css'

function Slider() {

  const { dateSelected, setDateSelected, dates } = useContext(CovidContext)
  const handleChange = (e) => {
    setDateSelected(dates[e.target.value].date)
    changeElement(e)
  }

  function changeElement(e) {
    const el = document.getElementById('bubble');
    el.style.left = `${((e.target.value-3)/dates.length)*100}%`
  }

  return (
    <div className="range-container">
      <input
        name="range"
        className="dates-range"
        type="range"
        min="0"
        onChange={handleChange}
        max={dates.length-1}
        step='1'
        list="tickmarks"
      />
      <datalist id="tickmarks">
        {dates.map((_d, index) => <option key={index} value= {index}/>)}
      </datalist>
      <div>
        <p id="bubble" className="position btn btn-outline-dark">{dateSelected}</p>
      </div>
      
      
    </div>
  )
}

export default Slider
