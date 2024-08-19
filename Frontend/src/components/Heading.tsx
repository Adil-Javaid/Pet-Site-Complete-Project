import React from 'react'
import "./heading.css";

interface Props{
    heading: string;
}
const Heading = ({heading}: Props) => {
  return (
    <div className="one">
      <h1>{heading}</h1>
    </div>
  );
}

export default Heading
