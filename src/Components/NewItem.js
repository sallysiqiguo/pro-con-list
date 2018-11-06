import React from 'react'

const NewItem = (props) => (
  <form className="pure-u-2-5" onSubmit={(e) => props.handleSubmit(e, props.isPro)}>
    <label>{props.isPro ? "Pro" : "Con"}</label><input type="text" />
    <button type="submit">Submit</button>
  </form>
)

export default NewItem;