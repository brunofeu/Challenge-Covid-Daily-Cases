import React, { useState } from 'react'
import './Slider.css'

function Slider() {

  const [dates, setDates] = useState([])
  const [dateSelected, setDateSelected] = useState(0)

  React.useEffect(() => {
    fetch('/dates')
      .then((res) => res.json())
      .then((response) => setDates(response));
  }, []);

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
    </div>
  )
}

export default Slider