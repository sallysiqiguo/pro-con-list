import React from 'react'

const Column = (props) => (
  <div className="pure-u-2-5">
    <h3>{props.isPro ? "Pro" : "Con"}</h3>
    <ul>
      {props.data.map((item, ind) => <li key={ind}>{item}</li>)}
    </ul>
  </div>

)

export default Column;