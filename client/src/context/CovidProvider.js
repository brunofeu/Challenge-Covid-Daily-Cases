import React, { useEffect, useState } from 'react';
import CovidContext from './CovidContext';

function CovidProvider({ children }) {

  const [cumulative, setCumulative] = useState('count')
  const [dates, setDates] = useState([])
  const [dateSelected, setDateSelected] = useState(0)
  const [cases, setCases] = useState([])

  const contextValue = {
    cumulative,
    setCumulative,
    dates,
    setDates,
    dateSelected,
    setDateSelected,
    cases,
    setCases
  }

  useEffect(() => {
    fetch('/dates')
      .then((res) => res.json())
      .then((response) => {
        setDates(response)
        setDateSelected(response[0].date)
      })
  });

  useEffect(() => {
    if (!dateSelected) return
    fetch(`/cases/${dateSelected}/${cumulative}`)
      .then((res) => res.json())
      .then((response) => setCases(response));
  }, [dateSelected, cumulative]);

  return (
    <CovidContext.Provider value={ contextValue }>
      {children}
    </CovidContext.Provider>
  );
}


export default CovidProvider;
