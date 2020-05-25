import React from 'react';
import {Typography} from '@material-ui/core';
import { Line } from 'react-chartjs-2';
class Stats extends React.Component{
    render(){

        const lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          
            }
    
        return(
            <div className="rootStats">
                <div className="container-1">
                    <div className="box-1">
                        <Typography>Alumnes que avui han entrat al centre</Typography>
                         <h3 className="NumAlumn">117</h3>
                    </div>
                    <div className="box-1">
                    <h1>2</h1>
                    </div>
                </div>
                <div className="container-2">
                    <div className="box-1">
                        <h1><Line data={lineData}/></h1>
                    </div>
                    <div className="box-1">
                    <h1>2</h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default Stats;