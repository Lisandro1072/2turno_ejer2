import React from "react";
import "./barra.css";
const Barra = () => {
  return (
    <div className="barra">
      <div>
        <h1 className="hora">9:41</h1>
      </div>
      <img src="./Wifi.png" alt="" />
      <img src="./Cellular Connection.png" alt="" />
      <img src="./Battery.png" alt="" />
    </div>
  );
};

export default Barra;
