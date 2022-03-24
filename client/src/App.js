import React, {useState} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MapChart from './components/MapChart/MapChart';
import ReactTooltip from "react-tooltip";


function App() {
  const [content, setContent] = useState("");

  return (
    <div className='App'>
      <Header />
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
      <Footer />
    </div>
  );
}

export default App;
