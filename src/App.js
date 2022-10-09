import React from "react";

import Days from "./components/Days";
import DaysOfTheWeek from "./components/DaysOfTheWeek";
import Header from "./components/Header";

const month="10";

function App() {
  return (
    <>
        <Header month={month}/>
        
        <div id="calendar">
            <DaysOfTheWeek />
            <Days month={month} year="2022"/>
        </div>
    </>
  );
}

export default App;
