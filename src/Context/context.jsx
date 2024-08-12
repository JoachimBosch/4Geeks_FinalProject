import React, { createContext, useState, useEffect } from 'react';


const MyContext = createContext();

const boxes = [
  {id: 1,
    name: "Relax",
    callout: "Surrender after a long day",
    description_1: "Relax Experience will calm your mind and body, reduce stress and promote a state of deep relaxation.",
    description_2: "Bring into your life feelings of tranquility and peace, enhanced ability to unwind and let go of daily tensions.",
    button_color: "bg-stone-700",
    text_color: "text-white",
    bg_color: "bg-[#F2D2C6]",
    background: "/Relax1.jpg",
    box_out: "/Relax2.png",
  }, 
  {id: 2,
    name: "Revive",
    callout: "Energize your morning routine",
    description_1: "Revive Experience will invigorate the senses, boost energy levels and awaken the body and the mind.",
    description_2: "Increase your vitality and alertness, renew your enthusiasm and zest for life.",
    button_color: "bg-[#CC7D8C]",
    text_color: "text-white",
    background: "/Revive1.jpg",
    box_out: "/Revive2.png",
  },
  {id: 3,
    name: "Reconnect",
    callout: "Deepen your connections",
    description_1: "Reconnect Experience will foster deeper connections with oneself and loved ones, enhancing emotional bonds and self-awareness. ",
    description_2: "Strengthen your relationships and understand better your personal needs and desires.",
    button_color: "bg-[#9C725B]",
    text_color: "text-white",
    background: "/Reconnect1.jpg",
    box_out: "/Reconnect2.png",
  },
  {id: 4,
    name: "Recharge",
    callout: "Restore your energy levels",
    description_1: "Recharge Experience will restore physical and mental energy, combating fatigue and promoting overall wellness.",
    description_2: "Enhance your energy levels and sense of renewal. Become ready to take on new challenges.",
    button_color: "bg-[#E08656]",
    text_color: "text-white",
    background: "/Recharge1.jpg",
    box_out: "/Recharge2.png",
  },
  {id: 5,
    name: "Refresh",
    callout: "Cool and cleanse your senses",
    description_1: "Refresh Experience will cool and cleanse the mind and body, leaving one feeling light and invigorated.",
    description_2: "Bring into your life a sense of clarity and invigoration, with a rejuvenated and revitalized outlook.",
    button_color: "bg-[#75827A]",
    text_color: "text-[#75827A]",
    background: "/Refresh1.jpg",
    box_out: "/Refresh2.png",
  },
  {id: 6,
    name: "Refocus",
    callout: "Sharpen your mind",
    description_1: "Refocus Experience will sharpen mental clarity, improve concentration, and realign priorities.",
    description_2: "Enhance your focus and productivity, with a clear sense of direction and purpose.",
    button_color: "bg-[#636E67]",
    text_color: "text-[#636E67]",
    background: "/Refocus1.jpg",
    box_out: "/Refocus2.png",
  },
  {id: 7,
    name: "Rebalance",
    callout: "Find your inner peace",
    description_1: "Rebalance Experience will harmonize the body, mind, and spirit, creating a state of equilibrium.",
    description_2: "Get into a profound sense of balance and harmony, with a stable and centered outlook on life.",
    button_color: "bg-[#CFB39E]",
    text_color: "text-[#785D55]",
    background: "/Rebalance1.jpg",
    box_out: "/Rebalance2.png",
  }
]



export const MyProvider = ({ children }) => {
    const [login, setLogin] = useState(false)
    const [subscribe, setSubscribe] = useState({email: "", password: ""})
    const [personInfo, setPersonInfo] = useState({
        id: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
        phone: "",
    });
    const [addressInfo, setAddressInfo] = useState({
        id: "",
        user_id: "",
        relation_to_user: "",
        street: "",
        street_number: "",
        postal_code: "",
        city: "",
        country: "",
    });
    const [subscriptionInfo, setSubscriptionInfo] = useState({
      label: "",
      billingAddress: "",
      shippingAddress: "",
      term: ""
  });
    boxes;




    
    /* Add variable names within appContext */
    let appContext = {login, setLogin, boxes, subscribe, setSubscribe, personInfo, setPersonInfo, addressInfo, setAddressInfo, subscriptionInfo, setSubscriptionInfo}

    return (
        <MyContext.Provider value={appContext}>
          {children}
        </MyContext.Provider>
      );
};

export default MyContext