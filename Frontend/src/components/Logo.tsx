import React from "react";
import "./logo.css";

const Logo: React.FC = () => {
    return (
      <div className="logo">
        <img src={`/pic/TwinTails.png`} alt="Logo" />
      </div>
    );
}
export default Logo;