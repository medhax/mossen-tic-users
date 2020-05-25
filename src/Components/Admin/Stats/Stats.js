import React from 'react';
import { Line,Bar } from 'react-chartjs-2';
class Stats extends React.Component{
    render(){
        const barData={
            labels: ['Fa 2 setmanes', 'Fa 1 setmana', 'Fa 3 dies', 'Dispús ahir', 'Ahir', 'Avui'],
            datasets: [
              {
                label: 'Temperatura al llarg de la setmana',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [36.8, 37, 37.1, 37.2, 37.2, 37, 39.9]
              }
            ] 
        }
        const lineData = {
            labels: ['10% alumnes', '20% alumnes', '30% alumnes', '40% alumnes', '50% alumnes', '60% alumnes', '70% alumnes', '80% alumnes', '90% alumnes', '100% alumnes'],
            datasets: [
              {
                label: "Temperatura d'avui",
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
                data: [36.8, 37, 37, 36.6, 37 ,37.5 ,37, 37.2,37.4,37.4,37.8,37.4,37.5,37,37.1,36.9]
              }
            ]
          
            }
    
        return(
            <div className="rootStats">
                <div className="container-1">
                    <div className="box-1">
                        <h2>Alumnes que avui han entrat al centre</h2>
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
                    <h1><Bar data={barData}/></h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default Stats;