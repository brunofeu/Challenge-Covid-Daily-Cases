import React, { useContext } from 'react'
import CovidContext from '../../context/CovidContext'
import './Slider.css'

function Slider() {

  const { dateSelected, setDateSelected, dates } = useContext(CovidContext)
  const handleChange = (e) => {
    setDateSelected(dates[e.target.value].date)
  }

  return (
    <div className="range-container">
      <input
        className="dates"
        type="range"
        min="0"
        onChange={handleChange}
        max={dates.length-1}
        step='1'
        list="tickmarks"
      />
      <datalist id="datalist">
        {dates.map(({date}) => <option key={date} value= {date}/>)}
      </datalist>
      <span>{dateSelected}</span>
    </div>
  )
}

export default Slider