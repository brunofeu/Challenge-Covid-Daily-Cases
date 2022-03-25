import React, { useContext } from 'react'
import CovidContext from '../../context/CovidContext';
import './SelectButton.css'

function SelectButton() {

  const { setCumulative } = useContext(CovidContext)

  // const [cumulative, setCumulative] = useState(false)

  return (
    <div className="select-button-container">
      <label htmlFor="cumulative">Ver números de casos:  </label>
      <select name="cumulative" id="cumulative" onChange= { (e) => setCumulative(e.target.value)}>
        <option value='count'>Por dia</option>
        <option value='cumulative'>Total até a data</option>
      </select>
    </div>
  )
}

export default SelectButton;
