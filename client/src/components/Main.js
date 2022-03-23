import React, { useEffect, useState }from 'react'

function Main() {

  const [dates, setDates] = useState([]);
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    setLoading(true)
    fetch('/dates')
      .then((res) => res.json())
      .then((response) => setDates(response))
      .then(setLoading(false));
  }, []);


  useEffect(() => {
    setLoading(true)
    fetch('/cases/2020-08-17/count')
      .then((res) => res.json())
      .then((response) => setCases(response))
      .then(setLoading(false));
  }, []);

  return (
    loading ? <p> Loading </p> 
    : (
    <div>
      <ul>
        { dates.map(({date}) => <option>{date}</option>)}
      </ul>
    </div>
    )
  )
}

export default Main;
