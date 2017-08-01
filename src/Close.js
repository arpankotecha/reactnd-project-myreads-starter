import React from 'react'
import { Link } from 'react-router-dom'

const Close = (props) => {
  return (
    <Link to={props.to} className={props.className}>Close</Link>
  )
}

export default Close
