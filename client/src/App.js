import React, {useState} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MapChart from './components/MapChart/MapChart';
import ReactTooltip from "react-tooltip";
import Slider from './components/Slider/Slider';
import SelectButton from './components/SelectButton/SelectButton';


function App() {
  const [content, setContent] = useState("");

  return (
    <div className='App'>
      <Header />
      <SelectButton />
      <Slider />
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
      <Footer />
    </div>
  );
}

export default App;
