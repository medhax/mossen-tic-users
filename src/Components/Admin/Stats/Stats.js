import React from 'react';
import { Line,Bar } from 'react-chartjs-2';
import * as fire from 'firebase';
import {Button} from '@material-ui/core';

class Stats extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            labelsTempAvui: null,
            dataTempAvui: null,
            avui: new Date().toLocaleDateString('es-ES').replace(/[/]/g,'-'),
            alumnesAvui: 0
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.actualitzaTemperatures = this.actualitzaTemperatures.bind(this);
    }
    componentDidMount(){
        let thus = this;
     fire.database().ref('temperatures/' + this.state.avui ).on('value', function(snapshot) {
         thus.setState({alumnesAvui: snapshot.numChildren()})
        thus.actualitzaTemperatures(snapshot.val())
      }); 
      
    }
     getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
    actualitzaTemperatures(persona){
       
        if (persona){
            let  nomPersones = [];
            let tempPersones = [];
            var dataset = Object.values(persona);
            for (const usuari of dataset) {  
             
                nomPersones.push(usuari.nomUsuari)
                tempPersones.push(usuari.tempAvui)
               
            }
            this.setState({labelsTempAvui: nomPersones, dataTempAvui: tempPersones})
            this.forceUpdate()
        } else {
            this.forceUpdate()
        }
   

    
    }
    render(){
        const barData={
            labels: this.state.labelsTempAvui,
            datasets: [
              {
                label: 'Temperatura al llarg de la setmana',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: this.state.dataTempAvui
              }
            ] 
        }
        const lineData = {
            labels: this.state.labelsTempAvui,
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
                data: this.state.dataTempAvui
              }
            ]
          
            }
    
        return(
            <div className="rootStats">
                <div className="container-1">
                    <div className="box-1">
                        <h2>Alumnes que avui han entrat al centre</h2>
                         <h3 className="NumAlumn">{this.state.alumnesAvui}</h3>
                    </div>
                    <div className="box-1">
                    <Button variant="contained" color="secondary" onClick={() => (
                        fire.database().ref('temperatures/'+this.state.avui+ '/llullluis15825').set({tempAvui: this.getRndInteger(34,38), nomUsuari: 'llullluis15825'})
                    )}>
                        Randomitza lluiset (i genera si és el primer pic del dia)
                        </Button>
                    </div>
                </div>
                <div className="container-2">
                    <div className="box-1">
                        <Line data={lineData}/>
                    </div>
                    <div className="box-1">
                    <Bar data={barData}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Stats;