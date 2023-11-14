// rafc
import React from 'react'

export default function Button({ classes, text, icon, onClick }) {
  return (
    // <button className="btn btn-light btn-sm">-</button>
    <button className={`btn btn-${classes}`} onClick={onClick}> 
        {icon}    
        {!text ? "Button" : text}
    </button>
  )
}


/// Up to 1:09