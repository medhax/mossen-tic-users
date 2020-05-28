import React from 'react';
import '../Admin.css';
import {TextField, Button, ButtonGroup} from '@material-ui/core';
import logoMossen from '../../../img/logoMossen.png'
import ReactQr from 'react-awesome-qr'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageUploader from 'react-images-upload';
import { exportComponentAsPNG } from "react-component-export-image";
import MaterialTable from 'material-table'
import * as fire from 'firebase'

class Control extends React.Component{
constructor(props){
  super(props);
  this.state = {
    llistaAlertes: [],
    avui: new Date().toLocaleDateString('es-ES').replace(/[/]/g,'-'),
  }
  this.componentDidMount = this.componentDidMount.bind(this);
}
componentDidMount(){
  let thus = this;
  fire.database().ref('alertes/' ).on('value', function(snapshot) {
    thus.setState({llistaAlertes: Object.values(snapshot.val())})
   
 }); 
}
    render(){ 
    return(
        <div>
            <div className="container-1">
                <div className="box-1">
                    <GenQr/>
                </div>
                <div className="box-2"><Notis/></div>
            </div>
            <div className="container-2">
              <div className="box-1">
              <div style={{ maxWidth: '100%' }}>
              <MaterialTable 
      title="Alertes del centre"
      columns={[
        { title: 'Nom de l"emisor', field: 'nomUsuari' },
        { title: 'Correu electrònic', field: 'email' },
        { title: 'Missatge enviat', field: 'missatgeAlerta' },
        {title: 'Data i hora', field: 'timestamp'},
        
      ]}
      data={this.state.llistaAlertes}        
      options={{
        exportButton: true
      }}
    />
      </div></div>
              </div>
        </div>
    )
}
}

export default Control

//generadorDeNotificacions
class Notis extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        titol:"",
        subtitol:"",
        text:"",
        imgUrl:"",
      }
    }
      render(){
        return(
          <div>
          <div className="notificacions">
            <div className="titols">
               <TextField label="Titol" size="small" variant="outlined" />
               <TextField label="Subtitol" size="small" variant="outlined" />
               <TextareaAutosize rowsMin="3" placeholder="Introduir la notificació" />               
            </div>
            <div className="importarImg">
            <ImageUploader
                withPreview={true}
                withIcon={true}
                buttonText='Importar imatge'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            </div>
          </div>
            <ButtonGroup className="botonsNotis" size="small" disableElevation variant="text" color="primary">
            <Button>Penjar notificació</Button>
            <Button color="secondary">Eliminar notificacions</Button>
        </ButtonGroup>
        </div>
        )
      }
  }



  //generadorDeCodisQR
class GenQr extends React.Component {
    constructor(props) {
      super(props);
      this.componentRef = React.createRef();
      this.state = {
        inputValue1: "",
        inputValue2: "",
      };
    }
  
    render() {
        const inputValue1 = this.state.inputValue1;
        const inputValue2 = this.state.inputValue2;
        
      return (
        <div >
            <div className="botons">
        <TextField placeholder="Dona un valor al QR" value={this.state.inputValue1} onChange={evt => this.updateInputValue1(evt)} label="Nom" size="small" variant="outlined" />
        <TextField placeholder="Dona un valor al QR" value={this.state.inputValue2} onChange={evt => this.updateInputValue2(evt)} label="Organització" size="small" variant="outlined" />
             </div>
            <div className="botons">
     <QR  nom={inputValue1} organitzacio={inputValue2} ref={this.componentRef} />
        <Button onClick={() => exportComponentAsPNG(this.componentRef)} className="exportar" color="secondary" size="small" variant="outlined">Exportar</Button>
             </div>
        </div>
      );
    }
  
    updateInputValue1(evt){
      this.setState({
        inputValue1: evt.target.value
      });
    }
      updateInputValue2(evt){
        this.setState({
          inputValue2: evt.target.value
        });
    }
  };
 
  class QR extends React.Component{
    
    render(){
      return(
        <ReactQr margin={0}  text={"Nom:"+this.props.nom+".Organització:"+this.props.organitzacio+"."}  logoMargin="7"  logoSrc={logoMossen} size={200} dotScale={1} correctLevel={3} />
      )
      }
  }