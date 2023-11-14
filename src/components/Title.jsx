// rfce   React Functional Export Component
import React from 'react' //   The current version of React, DO NOT REQUIERE us to import React

function Title({ text, color }) {
// function Title({ text = "my title"}) {    
    // We can also set parameter (if it is not passed)   as a default value    
  return (
    // // in the next line, text is called Prop, which is a variable passed s parameter
    // <h1 className="text-purple">{!text ? "Title": text}</h1>
    <h1 className={`text-${color}`}>{!text ? "Title": text}</h1>

  )
}

export default Title