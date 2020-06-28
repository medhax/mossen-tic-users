import React from 'react';
import FadeIn from 'react-fade-in';
import CardNoti from './CardNoti';
import NavBar from '../../NavBar/NavBarInterna'
import { Container } from '@material-ui/core';
import firebase from 'firebase/app';
import 'firebase/database';

class Notificacions extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            notificacions: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount(){
        let thus = this;
        var llistatNotis = firebase.database().ref('notificacions/').limitToLast(2);
        llistatNotis.on('value', function(snapshot) {
            if (snapshot) {
                thus.setState({notificacions: Object.values(snapshot.val())})
                console.log(thus.state.notificacions)
            }
           
                    });
                    
    }
    render(){
        return(
            
         
             <div style={{marginTop: "8px",
    marginRight: "8px",
    marginBottom: "8px",
    marginLeft: "8px",
    display: "block"}}>
           <FadeIn/>
             <NavBar/> 
             <Container style={{flex:1, justifyContent: "center", alignItems:"center"}} maxWidth="sm">
            
            {this.state.notificacions.map((notif)=>
                <CardNoti title={notif.title} body={notif.body} imgUrl={notif.imgUrl}/>
            )}
                

                </Container>

             </div>
                

            
        ) 
    }
}

export default Notificacions;