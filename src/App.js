import React, { Component } from "react";

import "./App.css";
import Countdown from "./components/countdown";

class App extends Component {
  render() {
    return (
      <div>
        <Countdown
          finalDate="27-04-2020"
          img=""
          theme="dark"
          title="Coming Soon"
          text="Stick here"
        />
      </div>
    );
  }
}

export default App;
