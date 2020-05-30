import React from "react";
import "./scss/index.scss";

interface Props {}

const Loader = (props: Props) => {
  return (
    <div className="loader-container">
    <div className="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
};

export default Loader;
