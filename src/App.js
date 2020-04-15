import React from "react";
import Cards from "./components/Cards.jsx";
import Chart from "./components/Chart.jsx";
import CountryPicker from "./components/CountryPicker.jsx";
import styles from "./App.module.css"


class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    )
  }
}

export default App;
