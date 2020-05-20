import React from 'react';
import './Control.css';
import {TextField, Button} from '@material-ui/core';
class Control extends React.Component{
    render(){
    return(
        <div className="root">
            <div className="container-1">
                <div className="box-1">
                    <div className="botons">
                    <form  noValidate autoComplete="off">
                    <TextField label="Nom" size="small" variant="outlined" />
                    <TextField  label="Organització" size="small" variant="outlined" />
                    </form>
                    <Button color="secondary" variant="ourlined">Generar nou codi QR</Button>
                    </div>
                </div>
                <div className="box-2"><h2>cajados</h2></div>
            </div>
            <div className="container-2"><h2>cajatres</h2></div>
        </div>
    )
}
}

export default Control