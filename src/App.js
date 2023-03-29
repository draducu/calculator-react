import React from "react";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes["calculator-grid"]}>
      <div className={classes["output"]}>
        <div></div>
      </div>
    </div>
  );
};

export default App;
