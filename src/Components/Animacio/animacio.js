import React from 'react';
import './animacio.css'


class Animacio extends React.Component{
    componentDidMount() {
        setTimeout(function () {
            
        }, 2200);
    }
    
    render(){
        return(
           
        <div class="loader">     
            <span>A</span>
            <span>L</span>
            <span>C</span>
            <span>O</span>
            <span>X</span>
            <span>I</span>
            <span>D</span>
            <span>E</span>
        </div>
        
        )
    }
}
	 export default Animacio;	