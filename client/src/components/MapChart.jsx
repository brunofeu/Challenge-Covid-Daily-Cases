import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import * as ChartGeo from 'chartjs-chart-geo'
import { useEffect } from 'react'

const MapChart = () =>{

    useEffect(()=>{

        let canvas = document.getElementById("canvas")
        if(!canvas) return

        fetch('https://unpkg.com/world-atlas/countries-50m.json').then((r) => r.json()).then((data) => {
          const countries = ChartGeo.topojson.feature(data, data.objects.countries).features;

            const chart = new Chart(canvas.getContext("2d"), {
              type: 'choropleth',
              plugins: [ChartDataLabels],
              data: {
                labels: countries.map((d) => d.properties.name),
                datasets: [{
                  label: 'Countries',
                  data: countries.map((d) => ({feature: d, value: Math.random()})),
                }]
              },
              options: {
                showOutline: false,
                showGraticule: false,
                plugins: {
                  legend: {
                    display: false
                  },
                },
                scales: {
                  xy: {
                    projection: 'equalEarth'
                  }
                }
              }
            });
          });
    },)
    
    return(
        <div>
            <canvas id='canvas'></canvas>
        </div>
    )
}

    export default MapChart;