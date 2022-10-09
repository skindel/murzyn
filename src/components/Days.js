import React from 'react'
import Day from "./Day";
//get the nubmer of days in each month
function DaysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
//adding blank days to correct the days of the week
function AddingBlankDays(month, year, array){
    var firstDay = new Date(year + "-" + month + "-01").getDay();
    //adding blank days in front
    for(var i = 0; i<(firstDay-1); i++){
        array.unshift(null);
    }
    //adding blank days in the back
    if(Math.round(array.length/7 - 0.5) >= 5){
        for(var i = 0; i<(array.length%7); i++){
            array.push(null);
        }
    }else{
        for(var i = 0; i<(array.length%7); i++){
            array.push(null);
        }
        array.push(null,null,null,null,null,null,null);
    }
    
}
export default function Days(props) {
   
    const days = Array(DaysInMonth(props.month, props.year)).fill(0).map((e,i)=>i+1);
    AddingBlankDays(props.month, props.year, days)
    
    
    return (
    days.map(n => {
        return <Day number={n} />
    })
  )
}
