import React from "react";
import Cards from "./components/Cards.jsx";
import Chart from "./components/Chart.jsx";
import CountryPicker from "./components/CountryPicker.jsx";
import styles from "./App.module.css";
import { fetchData } from "./api"


class App extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <h1>COVID-19</h1>
        <Cards data={ data }/>
        <Chart />
        <CountryPicker />
      </div>
    )
  }
}

export default App;
