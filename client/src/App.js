import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [data, setData] = React.useState(null);
  

  React.useEffect(() => {
    fetch('/dates')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
     <Header/>
    </div>
  );
}

export default App;
