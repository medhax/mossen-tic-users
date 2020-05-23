import React from 'react';
import {Typography} from '@material-ui/core';
class Stats extends React.Component{
    render(){
        return(
            <div className="rootStats">
                <div className="container-1">
                    <div className="box-1">
                        <Typography variant="title">Alumnes que avui han entrat al centre</Typography>
                         <h3 className="NumAlumn">117</h3>
                    </div>
                    <div className="box-1">
                    <h1>2</h1>
                    </div>
                </div>
                <div className="container-2">
                    <div className="box-1">
                        <h1>1</h1>
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