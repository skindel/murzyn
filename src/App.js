import React from "react";

import Days from "./components/Days";
import DaysOfTheWeek from "./components/DaysOfTheWeek";
function App() {
  return (
    <>
        <div id="header">
            <h1>CALENDAR WEBSITE</h1>
        </div>
        
        <div id="calendar">
          
            <DaysOfTheWeek />
            <Days month="1" year="2022"/>
        </div>
    </>
  );
}

export default App;
