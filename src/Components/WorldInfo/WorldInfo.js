import React from 'react';
import Cards from './Cards/Cards';
import Chart from './Chart/Chart';
import CountryPicker from './CountryPicker/CountryPicker';
import { fetchData } from './api/';
import styles from './WourldInfo.module.css';
import {Link} from "react-router-dom";
import { IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
class WorldInfo extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {

    const { data, country } = this.state;

    return (

      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
          <Link to="/"> <IconButton color="secondary" aria-label="delete">
            <ExitToAppIcon />
          </IconButton></Link> 
      </div>
    );
  }
}

export default WorldInfo;