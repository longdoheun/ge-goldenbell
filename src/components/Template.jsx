import React from 'react';

export default function Template (props) {
  return(
    <div className="con1">
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}