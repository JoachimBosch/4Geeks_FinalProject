import React, { createContext, useState, useEffect } from 'react';
import backgroundRelax from '../images/Background-Relax.jpg';
import relaxOut from '../images/RelaxOut.png';

const MyContext = createContext();

const boxes = [
  {id: 1,
    name: "Relax",
    callout: "Surrender after a long day",
    description_1: "Relax Experience will calm your mind and body, reduce stress and promote a state of deep relaxation.",
    description_2: "Bring into your life feelings of tranquility and peace, enhanced ability to unwind and let go of daily tensions.",
    button_color: "bg-stone-700",
    text_color: "text-white",
    background: {backgroundRelax},
    image_out: {relaxOut},
    image_in: {relaxOut},
  }
]



export const MyProvider = ({ children }) => {
    const [login, setLogin] = useState(false)





    
    /* Add variable names within appContext */
    let appContext = {login, setLogin}

    return (
        <MyContext.Provider value={appContext}>
          {children}
        </MyContext.Provider>
      );
};

export default MyContext