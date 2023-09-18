import React,{useState} from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { UserData } from "./userdata";
import '../index.css'

function BarChart({ chartData }) {

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: '#98D89E',
            borderColor: "black",
            borderRadius : 5,
            width : 1,
          },
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userLost),
            backgroundColor: '#EE8484',
            borderColor: "black",
            borderRadius : 5,
            width : 1,
            spacing : 20,
            GridLineOptions : {
                color : 'red',
                display : false,
            }
            // borderSkipped : true
          },
          
        ]
      });

      const options = {
        maintainAspectRation : true,
        plugins : {
          legend : {
            // position : 'right',
            align : 'end',
            labels : {
              font : {
                size : 14,
              },
              usePointStyle : true,
              pointStyle : 'circle'
            }
          }
        },
        scales: {
          x: {
            // display: false,
          }
        },
      };


    

  return <Bar data={userData} options={options}/>;
}

export default BarChart;