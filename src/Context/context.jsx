import React, { createContext, useState, useEffect, useReducer } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const MyContext = createContext();

const boxes = [
  {id: 1,
    name: "Relax",
    price: 35.00,
    price_3: 105.00,
    price_6: 210.00,
    price_12: 420.00,
    callout: "Surrender after a long day",
    description_1: "Relax Experience will calm your mind and body, reduce stress and promote a state of deep relaxation.",
    description_2: "Bring into your life feelings of tranquility and peace, enhanced ability to unwind and let go of daily tensions.",
    button_color: "bg-stone-700",
    text_color: "text-white",
    bg_color: "bg-[#F2D2C6]",
    background: "/Relax1.jpg",
    box_out: "/Relax2.png",
    quantity: 1,
  }, 
  {id: 2,
    name: "Revive",
    price: 35.00,
    price_3: 105.00,
    price_6: 210.00,
    price_12: 420.00,
    callout: "Energize your morning routine",
    description_1: "Revive Experience will invigorate the senses, boost energy levels and awaken the body and the mind.",
    description_2: "Increase your vitality and alertness, renew your enthusiasm and zest for life.",
    button_color: "bg-[#CC7D8C]",
    text_color: "text-white",
    background: "/Revive1.jpg",
    box_out: "/Revive2.png",
    quantity: 1,
  },
  {id: 3,
    name: "Reconnect",
    price: 35.00,
    price_3: 105.00,
    price_6: 210.00,
    price_12: 420.00,
    callout: "Deepen your connections",
    description_1: "Reconnect Experience will foster deeper connections with oneself and loved ones, enhancing emotional bonds and self-awareness. ",
    description_2: "Strengthen your relationships and understand better your personal needs and desires.",
    button_color: "bg-[#9C725B]",
    text_color: "text-white",
    background: "/Reconnect1.jpg",
    box_out: "/Reconnect2.png",
    quantity: 1,
  },
  {id: 4,
    name: "Recharge",
    price: 35.00,
    price_3: 105.00,
    price_6: 210.00,
    price_12: 420.00,
    callout: "Restore your energy levels",
    description_1: "Recharge Experience will restore physical and mental energy, combating fatigue and promoting overall wellness.",
    description_2: "Enhance your energy levels and sense of renewal. Become ready to take on new challenges.",
    button_color: "bg-[#E08656]",
    text_color: "text-white",
    background: "/Recharge1.jpg",
    box_out: "/Recharge2.png",
    quantity: 1,
  },
  {id: 5,
    name: "Refresh",
    price: 35.00,
    price_3: 105.00,
    price_6: 210.00,
    price_12: 420.00,
    callout: "Cool and cleanse your senses",
    description_1: "Refresh Experience will cool and cleanse the mind and body, leaving one feeling light and invigorated.",
    description_2: "Bring into your life a sense of clarity and invigoration, with a rejuvenated and revitalized outlook.",
    button_color: "bg-[#75827A]",
    text_color: "text-[#75827A]",
    background: "/Refresh1.jpg",
    box_out: "/Refresh2.png",
    quantity: 1,
  },
  {id: 6,
    name: "Refocus",
    price: 35.00,
    price_3: 105.00,
    price_6: 210.00,
    price_12: 420.00,
    callout: "Sharpen your mind",
    description_1: "Refocus Experience will sharpen mental clarity, improve concentration, and realign priorities.",
    description_2: "Enhance your focus and productivity, with a clear sense of direction and purpose.",
    button_color: "bg-[#636E67]",
    text_color: "text-[#636E67]",
    background: "/Refocus1.jpg",
    box_out: "/Refocus2.png",
    quantity: 1,
  },
  {id: 7,
    name: "Rebalance",
    price: 35.00,
    price_3: 105.00,
    price_6: 210.00,
    price_12: 420.00,
    callout: "Find your inner peace",
    description_1: "Rebalance Experience will harmonize the body, mind, and spirit, creating a state of equilibrium.",
    description_2: "Get into a profound sense of balance and harmony, with a stable and centered outlook on life.",
    button_color: "bg-[#CFB39E]",
    text_color: "text-[#785D55]",
    background: "/Rebalance1.jpg",
    box_out: "/Rebalance2.png",
    quantity: 1,
  }
]



export const MyProvider = ({ children }) => {
    
  /*UseState*/

    const [loggingIn, setLoggingIn] = useState({email: "", password: ""});
    const [subscribe, setSubscribe] = useState({email: "", password: ""});
    const [changePassword, setChangePassword] = useState({email: "", old_password: "", new_password: ""});
    const [personInfo, setPersonInfo] = useState({
        id: "1",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
        phone: "",
    });
    const [addressInfo, setAddressInfo] = useState([]);
    const [subscriptionInfo, setSubscriptionInfo] = useState([]);
    const [formData, setFormData] = useState(addressInfo || {
      relation_to_user: '',
      street: '',
      street_number: '',
      postal_code: '',
      city: '',
      country: '',
    });
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("myCart")) || []);
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(faEyeSlash);
    const [subData, setSubData] = useState();
    const [loggedIn, setLoggedIn] = useState(true);
    const [index, setIndex] = useState("");
  

    /*UseEffect*/

    useEffect(() => {
      localStorage.setItem("myCart", JSON.stringify(cart));
      
      if (personInfo.id) {
        fetchUser(personInfo.id);
        fetchAddresses(personInfo.id);
        fetchSubscriptions(personInfo.id);
      }
  }, [cart]);

    /*UseReducer*/

    const initialState = (JSON.parse(localStorage.getItem("myCart")) || []);

    /* FUNCTIONS */

    const fetchUser = async (userId) => {
      try {
        const response = await fetch(`https://39ngdl4z-3000.uks1.devtunnels.ms/user/${userId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
    
        if (!response.ok) {
          console.error('Error while retrieving user information:', error);
          return null;
        }
    
        const data = await response.json();
        console.log('User data:', data);
        setPersonInfo(data);
        return data;
      } catch (error) {
        console.error('Error while retrieving user information:', error);
      }
    };
    
    const fetchAddresses = async (userId) => {
      try {
        const response = await fetch(`https://39ngdl4z-3000.uks1.devtunnels.ms/user/${userId}/addresses`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
    
        if (!response.ok) {
          console.error('Error while fetching addresses:', error);
          return null;
        }
    
        const data = await response.json();
        console.log("addresses:", data)
        setAddressInfo(data);
        return data;
      } catch (error) {
        console.error('Error while fetching addresses:', error);
      }
    };

    const fetchSubscriptions = async (userId) => {
      try {
        const response = await fetch(`https://39ngdl4z-3000.uks1.devtunnels.ms/user/${userId}/subscriptions`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
    
        if (!response.ok) {
          console.error('Error while fetching subscriptions:', error);
          return null;
        }
    
        const data = await response.json();
        console.log('Subscription data:', data);
        setSubscriptionInfo(data);
        return data;
      } catch (error) {
        console.error('Error while fetching subscriptions:', error);
      }
    };

    function onAddToCart(box) {
      cart.find(item => item.id == box.id) ? increaseQuantity(box.id) : setCart(prevCart => [...prevCart, box]);
      };

    function onDeleteFromCart(id) {
        setCart(prevCart => prevCart.filter(product => product.id !== id));
    };

    function increaseQuantity(id) {
      setCart(prevCart => 
          prevCart.map(box =>
              box.id === id ? {...box, quantity: box.quantity +1 } : box
      ));
  };

    function decreaseQuantity(id) {
        setCart(prevCart => 
            prevCart.map(box =>
                box.id === id ? {...box, quantity: box.quantity -1 } : box
        ));
    };    

    boxes;

    /* User functions */

    const register = async () => {
      try {
        let body = JSON.stringify({
          email: subscribe.email, 
          password: subscribe.password, 
        })
        const response = await fetch(`https://39ngdl4z-3000.uks1.devtunnels.ms/register`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: body});
          await response.json();
          console.log(response);
      } catch (error) {
        console.error('Error while registering:', error);
      };
    }

    const login = async () => {
      try {
        let body = JSON.stringify({
          email: loggingIn.email, 
          password: loggingIn.password, 
        });
        const response = await fetch(`https://39ngdl4z-3000.uks1.devtunnels.ms/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: body,
        });
        const data = await response.json();
    
        if (response.ok) {
          setLoggedIn(true);
        } else {
          console.error('Login failed:', data);
        }
      } catch (error) {
        console.error('Error while logging in:', error);
      }
    }

    const change_Password = async () => {
      try {
        let body = JSON.stringify({
          email: "joachim@4geeks.com", 
          old_password: changePassword.old_password,
          new_password: changePassword.new_password,
        })
        console.log(body)
        const response = await fetch(`https://39ngdl4z-3000.uks1.devtunnels.ms/change-password`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: body});

          if (response.ok) {
            return true;
          } else {
            console.error('Login failed:', data);
            return false
          }
      } 
      catch (error) {
        console.error('Something went wrong:', error);
      };
    }

    const logout = () => {
      /* localStorage.removeItem("token-info"); */
      setLoggedIn(false)
  };

    /* Address functions */

    const storeAddress = async (addressData) => {
      try {
        let body = JSON.stringify(addressData)

        const response = await fetch(`https://39ngdl4z-3000.uks1.devtunnels.ms/address`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: body,
        });

        if (!response.ok) {
          console.error('Something went wrong:', error);
          return null;
        };

        const data = await response.json();
        console.log(data);
        setAddressInfo={
          ...addressInfo,
          data
        };
        return data;
      } catch (error) {
        console.error('Error while registering:', error);
      };
    }

    const updateAddress = async (addressId, updatedData) => {
      try {
          const response = await fetch(`https://39ngdl4z-3000.uks1.devtunnels.ms/address/${addressId}`, {
              method: "PUT",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify(updatedData),
          });

          if (!response.ok) {
              console.error('Something went wrong:', error);
              return null;
          }

          const data = await response.json();
          console.log(data);
          return data;
      } catch (error) {
          console.error('Error while updating address:', error);
          return null;
      }
  };

  const deleteAddress = async (addressId) => {
    try {
      const response = await fetch(`https://39ngdl4z-3000.uks1.devtunnels.ms/address/${addressId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) {
        console.error('Error deleting address:', error);
        return null;
      }
  
      console.log(`Address with ID ${addressId} deleted successfully`);
      setAddressInfo(prevAddresses => prevAddresses.filter(address => address.id !== addressId)); 
    } catch (error) {
      console.error('Error while deleting address:', error);
    }
  };

  const handleToggle = () => {
    if (type==='password'){
       setIcon(faEye);
       setType('text')
    } else {
       setIcon(faEyeSlash)
       setType('password')
    }
 }

 /* Subscription related */

 const storeSubscription = async (subscriptionData) => {
  try {
    let body = JSON.stringify(subscriptionData)

    const response = await fetch(`https://39ngdl4z-3000.uks1.devtunnels.ms/subscriptions`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: body,
    });

    if (!response.ok) {
      console.error('Something went wrong:', error);
      return null;
    };

    const data = await response.json();
    console.log(data);
    setSubscriptionInfo={
      ...subscriptionInfo,
      data
    };
    return data;
  } catch (error) {
    console.error('Error while adding subscription:', error);
  };
}

const updateSubscription = async (subscriptionID, updatedData) => {
  try {
      const response = await fetch(`https://39ngdl4z-3000.uks1.devtunnels.ms/subscriptions/${subscriptionID}`, {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
          throw new Error('Failed to update subscription');
      }

      const data = await response.json();
      console.log(data);
      return data;
  } catch (error) {
      console.error('Error while updating subscription:', error);
      return null;
  }
};
    
    /* Add variable names within appContext */
    let appContext = {loggingIn, setLoggingIn, boxes, subscribe, setSubscribe, personInfo, setPersonInfo, addressInfo, setAddressInfo, subscriptionInfo, setSubscriptionInfo, cart, setCart, onAddToCart, onDeleteFromCart, increaseQuantity, decreaseQuantity, register, login, changePassword, setChangePassword, change_Password, storeAddress, updateAddress, formData, setFormData,  type, setType, icon, setIcon, handleToggle, deleteAddress, loggedIn, setLoggedIn, logout, fetchAddresses, fetchSubscriptions ,storeSubscription, updateSubscription, subData, setSubData, index, setIndex}

    return (
        <MyContext.Provider value={appContext}>
          {children}
        </MyContext.Provider>
      );
};

export default MyContext