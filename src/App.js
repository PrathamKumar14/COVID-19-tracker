import React from "react";
import Cards from "./components/Cards.jsx"
import Chart from "./components/Chart.jsx"
import CountryPicker from "./components/CountryPicker.jsx";
import { fetchData } from "../api/";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
    country: ""
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async country => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    const date = new Date();
    const year = date.getFullYear();

    return (
      <div className={styles.container}>
        <h1>COVID-19 Tracker</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <h4>© Copyright {year}: PRATHAM</h4>
      </div>
    );
  }
}

export default App;
