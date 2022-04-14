import React, { memo, useContext } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import CovidContext from "../../context/CovidContext";

import './MapChart.css'

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent }) => {

  const { cases } = useContext(CovidContext)


  const filterCountryCases = (CountryName) => {

    const countryCases = cases.filter(({location}) => CountryName.includes(location));

    const countryData = countryCases.map((country) => (
      `<tr>
        <td>${country.variant}</td>
        <td>${country.total}</td>
      </tr>`
      ))

    if (countryCases.length === 0) return 'Sem dados deste país'
    return (
      `<table>
        <tr>
          <th>Variante</td>
          <th>nº casos</th>
        </tr>
        ${countryData.join('')}
      </table>`)
  }


  return (
    <div className='map-chart'>
      <ComposableMap data-tip="" projectionConfig={{ scale: 150 }}>
        <ZoomableGroup zoom={1} minZoom={1} maxZoom={2} translateExtent={[[850, 650], [0, 0]]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`<strong>${NAME.toUpperCase()}</strong> <br>    ${filterCountryCases(NAME)}`);
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
