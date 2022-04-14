import React, { useEffect, useState } from 'react';
import CovidContext from './CovidContext';
const axios = require('axios');

function CovidProvider({ children }) {

  const { REACT_APP_BASE_URL } = process.env;

  const [cumulative, setCumulative] = useState('count')
  const [dates, setDates] = useState([])
  const [dateSelected, setDateSelected] = useState(0)
  const [cases, setCases] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const contextValue = {
    cumulative,
    setCumulative,
    dates,
    setDates,
    dateSelected,
    setDateSelected,
    cases,
    setCases,
    isLoading,
    setIsLoading
  }

  useEffect(() => {
    setIsLoading(true);

    axios({
      method: 'get',
      url: `${REACT_APP_BASE_URL}/dates`,
    }).then(({data}) => {
        setDates(data)
        setDateSelected(data[0].date)
      }).then(() => setIsLoading(false));

  }, []);

  useEffect(() => {
    setIsLoading(true);

    axios({
      method: 'get',
      url: `${REACT_APP_BASE_URL}/cases/${dateSelected}/${cumulative}`,
    }).then(({data}) => setCases(data))
    .then(() => setIsLoading(false));
    
  }, [dateSelected, cumulative]);

  return (
    <CovidContext.Provider value={ contextValue }>
      {children}
    </CovidContext.Provider>
  );
}


export default CovidProvider;
