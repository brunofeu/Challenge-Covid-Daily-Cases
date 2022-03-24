import React, { memo, useEffect, useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

import './MapChart.css'

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";




const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};



const MapChart = ({ setTooltipContent }) => {

  const [cases, setCases] = useState([])

  useEffect(() => {
    fetch('/cases/2020-08-17/count')
      .then((res) => res.json())
      .then((response) => setCases(response));
  }, []);

  const filterCountryCases = (CountryName) => {
    const countryCases = cases.filter(({location}) => location === CountryName);
    const countryData = countryCases.map((country) => (`${country.variant}: ${country.daily_quantity}`))
    return (countryCases.length === 0) ? 'Sem dados deste país' : countryData
  }


  return (
    <div className='map-chart'>
      <ComposableMap data-tip="" projectionConfig={{ scale: 150 }}>
        <ZoomableGroup zoom={1} minZoom={1} maxZoom={1} translateExtent={[[800, 650], [0, 0]]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`${NAME} — ${filterCountryCases(NAME)}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#746AB0",
                      outline: "none",
                      stroke: '#fff',
                      strokeWidth: '0.3'
                    },
                    hover: {
                      fill: "#333333",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
