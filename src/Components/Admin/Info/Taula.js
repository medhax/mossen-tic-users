import React from 'react'
import { forwardRef } from 'react';
import {withRouter} from 'react-router-dom'
import MaterialTable from 'material-table'
import FilterList from '@material-ui/icons/FilterList';
import {AddBox,FirstPage,LastPage,Remove,SaveAlt,ViewColumn,Search,Edit,DeleteOutline,ArrowDownward,Check,ChevronLeft,ChevronRight,Clear} from "@material-ui/icons";
import {Link} from "react-router-dom";
import { IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import firebase from 'firebase';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};



class Taula extends React.Component{
   constructor(props){
     super(props);
     this.state={
       titol: props.location.state.titol,
       ruta: props.location.state.ruta,
       grup: '',
       opcions: []
     }
     this.handleChange = this.handleChange.bind(this)
     this.componentDidMount = this.componentDidMount.bind(this)
    this.tableRef = React.createRef();
   }
   handleChange(event) {
    this.setState({grup: event.target.value});
    return this.tableRef.current && this.tableRef.current.onQueryChange()
   }
   componentDidMount(){
     let thus = this;
    firebase.database().ref(this.state.ruta).on('value', function(snapshot) {
           if (snapshot.val() !== null){
            thus.setState({opcions: Object.keys(snapshot.val())})
           }
  
     
    });
   }
   render(){
    

  return (
    <div style={{display: 'flex',
      alignItems: 'center',
      justifyContent:'center', flexDirection: 'column', width: '100%'}}>
      <FormControl variant='filled' style={{margin: 10, width: 300}}>
        <InputLabel>Grup a consultar</InputLabel>
        <Select
       
          value={this.state.grup}
          onChange={this.handleChange}
        >
          {this.state.opcions.map(function(opt) {
    return <MenuItem key={opt} value={opt}>{opt}</MenuItem>;
})}
          
          
        </Select>
      </FormControl>
    <MaterialTable style={{width: '100%'}}
    tableRef={this.tableRef}
    icons={tableIcons}
      title={this.state.titol}
      columns={[
       
        { title: 'Nom', field: 'nomUsuari' },
        { title: 'Darrera temperatura', field: 'darreraTemp' },
        { title: 'Darrera entrada al centre', field: 'darrerDiaRegistrat' },
      ]}
      data={query =>
        new Promise((resolve, reject) => {
     
          
          firebase.database().ref(this.state.ruta + '/' + this.state.grup).limitToFirst(query.pageSize).on('value', function(snapshot) {
           
        if (snapshot.val() !== null){
          resolve({
            data: Object.values(snapshot.val()),
            page: query.page,
            totalCount: snapshot.numChildren()
            
          })
        } else {
          resolve({
            data: [],
            page: query.page,
            totalCount: snapshot.numChildren()
            
          })
        }
           
          });

         
        })
      }
    />
    <Link style={{alignSelf: 'center', color: 'transparent'}} to="/admin"> <IconButton color="secondary" aria-label="delete">
      Tornar    
   <ExitToAppIcon />
  </IconButton></Link>
  </div>
  )
}
}

export default withRouter(Taula);