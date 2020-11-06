import React from 'react';
import FadeIn from 'react-fade-in';
import CardNoti from './CardNoti';
import NavBarInterna from '../../NavBar/NavBarInterna'
import { Container } from '@material-ui/core';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import Fab from '@material-ui/core/Fab';
import BackupIcon from '@material-ui/icons/Backup';
import {DropzoneDialog} from 'material-ui-dropzone'

class Notificacions extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            notificacions: [],
            fitxers: [],
            arxiusPujats: [],
            emailNet: '',
            open: false,
            objQR: JSON.parse(localStorage.getItem("profileObj")),
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }
    handleClose() {
      this.setState({
          open: false
      });
  }

  handleSave(files) {
      //Saving files to state for further use and closing Modal.
      this.setState({
          arxiusPujats: files,
          open: false
      });
      this.uploadFile(files[0])
  }

  handleOpen() {
      this.setState({
          open: true,
      });
  }
    componentDidMount(){
        var storage = firebase.storage();
        var storageRef = storage.ref();
        let usuari = JSON.parse(localStorage.getItem('profileObj'));
        console.log(usuari)
        let emailNet = usuari.email.replace('@iesmossenalcover.cat', '');
        this.setState({emailNet: emailNet});
      
        // Create a reference under which you want to list
var listRef = storageRef.child('arxius/' + emailNet);

let thus = this;

let llistaFitxers = [];
// Find all the prefixes and items.
listRef.listAll().then(function(res) {
  
    console.log(res)
  res.prefixes.forEach(function(folderRef) {
    // All the prefixes under listRef.
    // You may call listAll() recursively on them.
  });
  res.items.forEach(function(itemRef) {
    console.log(itemRef.name)
      itemRef.getDownloadURL().then(function (url) {
        llistaFitxers.push({item: itemRef, url: url})

       return thus.setState({fitxers: llistaFitxers});
    }).catch(function (error) {
        console.error(error);
        
    });
    // All the items under listRef.
  });
}).catch(function(error) {
  // Uh-oh, an error occurred!
});
        
        var llistatNotis = firebase.database().ref('notificacions/').limitToLast(2);
        llistatNotis.on('value', function(snapshot) {
            if (snapshot) {
                thus.setState({notificacions: Object.values(snapshot.val())})
                console.log(thus.state.notificacions)
            }
           
                    });
                    
    }

    uploadFile(arxiu){
      var storage = firebase.storage();
        var storageRef = storage.ref();
      // File or Blob named mountains.jpg
var file = arxiu;



// Upload file and metadata to the object 'images/mountains.jpg'
var uploadTask = storageRef.child('arxius/'+this.state.emailNet+'/' + file.name).put(file);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
        default:
    }
  }, function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

   

    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      break;
      default:
  }
}, function() {
  // Upload completed successfully, now we can get the download URL
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
  });
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
             <NavBarInterna usuari={this.state.objQR} /> 
             <Container style={{height: '85vh',flex:1, justifyContent: "center", alignItems:"center"}} maxWidth="sm">
            
          
            {this.state.fitxers.map((fitxer) =>
              <CardNoti title={fitxer.item.name} body={fitxer.url} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'}/>
            )}


                </Container>
                <DropzoneDialog

                    open={this.state.open}
                    dialogTitle='Afegeix fitxer al teu magatzem'
                    onSave={this.handleSave.bind(this)}
                    
                    showPreviews={true}
                    maxFileSize={5000000}
                    filesLimit={1}
                    onClose={this.handleClose.bind(this)}
                />
                <div className="FAB">
                <Fab onClick={this.handleOpen.bind(this)}  variant="extended">
        <BackupIcon style={{padding: 10}} />
        Afegir fitxers
      </Fab>
                </div>
               
             </div>
                

            
        ) 
    }
}

export default Notificacions;




