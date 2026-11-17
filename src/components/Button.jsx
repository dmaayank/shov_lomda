<<<<<<< HEAD
import React, { useState } from "react";

import "../css/Button.css";

const Button = ({ label, onClick, disabled = false }) => {
  return (
    <button className="custom-btn" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
  
};

=======
import React, { useState } from "react";

import "../css/Button.css";

const Button = ({ label, onClick, disabled = false }) => {
  return (
    <button className="custom-btn" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
  
};

>>>>>>> 84d32e05897533f269634b07f56285b320436f12
export default Button;