import React from 'react'

function Activity({ activity }) {  
  const { title, desc, id, completed } = activity
  
  return (
    <li>
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>{completed === true ? 'Completed' : 'Pending' }</p>
    </li>
  )
}

export default Activity
