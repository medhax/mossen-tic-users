import React from 'react'
import { forwardRef } from 'react';
import {withRouter} from 'react-router-dom'
import MaterialTable from 'material-table'
import FilterList from '@material-ui/icons/FilterList';
import {AddBox,FirstPage,LastPage,Remove,SaveAlt,ViewColumn,Search,Edit,DeleteOutline,ArrowDownward,Check,ChevronLeft,ChevronRight,Clear} from "@material-ui/icons";
import {Link} from "react-router-dom";
import { IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
       titol: props.location.state.titol
     }
     console.log(props);
   }
   render(){
  return (
    <div>
    <MaterialTable
    icons={tableIcons}
      title={this.state.titol}
      columns={[
        {
          title: 'Foto',
          field: 'avatar',
          render: rowData => (
            <img alt="Avatar dels usuaris"
              style={{ height: 36, borderRadius: '50%' }}
              src={rowData.avatar}
            />
          ),
        },
        { title: 'Nom', field: 'nom' },
        { title: 'Darrera temperatura', field: 'darrera_temp' },
        { title: 'Darrer cop al centre', field: 'darrera_entrada' },
      ]}
      data={query =>
        new Promise((resolve, reject) => {
          let url = 'https://reqres.in/api/users?'
          url += 'per_page=' + query.pageSize
          url += '&page=' + (query.page + 1)
          fetch(url)
            .then(response => response.json())
            .then(result => {
              resolve({
                data: result.data,
                page: result.page - 1,
                totalCount: result.total,
              })
            })
        })
      }
    />
    <Link to="/admin"> <IconButton color="secondary" aria-label="delete">
    <ExitToAppIcon />
  </IconButton></Link>
  </div>
  )
}
}

export default withRouter(Taula);