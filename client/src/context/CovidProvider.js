import React, { useEffect, useState } from 'react';
import CovidContext from './CovidContext';
const axios = require('axios');

function CovidProvider({ children }) {

  const BASE_URL = 'https://challenge-covid-daily-cases.herokuapp.com/'

  const http = axios.create({baseURL: BASE_URL, timeout: 30000})

  axios({
    method: 'get',
    url: BASE_URL,
    responseType: 'stream'
  })
    .then(function (response) {
      console.log(response)
    });

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

    http.get('/dates')
      .then((res) => res.json())
      .then((response) => {
        setDates(response)
        setDateSelected(response[0].date)
      })
  }, [http]);

  useEffect(() => {
    // fetch(`${BASE_URL}/cases/${dateSelected}/${cumulative}`)
    http.get(`/cases/${dateSelected}/${cumulative}`)
      .then((res) => res.json())
      .then((response) => setCases(response));
  }, [dateSelected, cumulative, http]);

  return (
    <CovidContext.Provider value={ contextValue }>
      {children}
    </CovidContext.Provider>
  );
}


export default CovidProvider;
