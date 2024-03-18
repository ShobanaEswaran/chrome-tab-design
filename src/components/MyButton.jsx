import React, { useState } from "react";
import './MyButton.css'

function MyButton() {
  const [blackBtn, setBlackBtn] = useState(false);

  const handleClick = () => {
    setBlackBtn(!blackBtn)
  }

  return (
    <button onClick={handleClick} className={`btn ${(blackBtn ? 'black-btn' : 'white-btn')} `}>
      { (blackBtn ? 
        <>
        Change to White Color
        </>
        :
        <>
        Change to Black Color
        </>
      )}
    </button>
  );
}

export default MyButton;
