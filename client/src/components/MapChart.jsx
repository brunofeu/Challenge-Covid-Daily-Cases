import React, {useEffect, useState} from "react";
import { VectorMap } from "react-jvectormap";
import { getData } from "country-list";



function MapChart() {
  return (
    <div className='map-container'>
      <VectorMap
      map={"world_mill"}
      zoomOnScroll={true}
      // onRegionClick={null}
      backgroundColor='black'
      containerClassName="map"
      regionStyle={{
        initial: {
          fill: "#e4e4e4",
          "fill-opacity": 0.9,
          stroke: "none",
          "stroke-width": 0,
          "stroke-opacity": 0,
          cursor: "pointer"
        },
        hover: { 
          "fill-opacity": 0.8,
          cursor: "pointer"
        },
        selected: {
          fill: "#212121",
          stroke: "#212121",
          "stroke-width": 1,
        },
        selectedHover: {
          "fill-opacity": 0.8,
        }
      }}
      series={{
        regions: [
          {
            // values: countryCodeStateObj,
            scale: ["#5606A5", "#E5D1F9"],
            normalizeFunction: "polynomial"
          }
        ]
      }}
    />
    </div>
  )
}

export default MapChart