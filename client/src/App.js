import React, {useState} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MapChart from './components/MapChart/MapChart';
import ReactTooltip from "react-tooltip";
import Slider from './components/Slider/Slider';
import SelectButton from './components/SelectButton/SelectButton';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [content, setContent] = useState("");

  return (
    <div className='App'>
      <Header />
      <div className='main-container'>
        <SelectButton />
        <Slider />
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip html={true} className='custom-tooltip'>{content}</ReactTooltip>
      </div>
      <Footer />
    </div>
  );
}

export default App;
