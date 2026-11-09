import React, { useState } from "react";

import "../css/Button.css";

const Button = ({ label, onClick, disabled = false }) => {
  return (
    <button className="custom-btn" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
  
};

export default Button;