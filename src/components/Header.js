import React from 'react'

//number to month name
function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    //in polish
    return date.toLocaleString('pl-PL', {
      month: 'long',
    });
  }


export default function Header(props) {
  return (
    <div id="header">
        {/*first letter to upper case*/}
        <h1>{toMonthName(props.month).charAt(0).toUpperCase() + toMonthName(props.month).slice(1)}</h1>
    </div>

  )
}
