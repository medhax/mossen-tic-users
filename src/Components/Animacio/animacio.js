import React from 'react';
import './animacio.css'


class Animacio extends React.Component{
    componentDidMount() {
        setTimeout(function () {
            
        }, 1000);
    }
    
    render(){
        return(
         <div className="root">  
        <div className="loader">     
            <span>A</span>
            <span>L</span>
            <span>C</span>
            <span>O</span>
            <span>X</span>
            <span>I</span>
            <span>D</span>
            <span>E</span>
        </div>
        <p className="copyR">Copyright © 2020 aLCoxide Solutions - Tots els drets reservats</p>
        </div>
        )
    }
}
	 export default Animacio;	