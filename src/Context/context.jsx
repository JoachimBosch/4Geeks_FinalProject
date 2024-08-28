import React, { createContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';


const MyContext = createContext();

const boxes = [
  {id: 1,
    name: "Relax",
    price: 49.00,
    price_3: 132.00,
    price_6: 246.00,
    price_12: 456.00,
    callout: "Surrender after a long day",
    description_1: "Relax Experience will calm your mind and body, reduce stress and promote a state of deep relaxation.",
    description_2: "Bring into your life feelings of tranquility and peace, enhanced ability to unwind and let go of daily tensions.",
    button_color: "bg-[#54413C]",
    text_color: "text-white",
    bg_color: "bg-[#F2B7A6] bg-opacity-50",
    background: "/Relax1.jpg",
    box_out: "/Relax2.png",
    quantity: 1,
    item_1: "Bath bomb",
    item_2: "Scented Candle",
    item_3: "Chamomile tea",
    item_4: "Pillow spray",
    item_1_text: "text",
    item_2_text: "text",
    item_3_text: "text",
    item_4_text: "text",
  }, 
  {id: 2,
    name: "Revive",
    price: 49.00,
    price_3: 132.00,
    price_6: 246.00,
    price_12: 456.00,
    callout: "Energize your morning routine",
    description_1: "Revive Experience will invigorate the senses, boost energy levels and awaken the body and the mind.",
    description_2: "Increase your vitality and alertness, renew your enthusiasm and zest for life.",
    button_color: "bg-[#665463]",
    text_color: "text-white",
    bg_color: "bg-[#E8D3E3] bg-opacity-50",
    background: "/Revive1.jpg",
    box_out: "/Revive2.png",
    quantity: 1,
    item_1: "Face mask",
    item_2: "Herbal tea",
    item_3: "Essential oil roller",
    item_4: "Refreshing spray",
    item_1_text: "text",
    item_2_text: "text",
    item_3_text: "text",
    item_4_text: "text",
  },
  {id: 3,
    name: "Reconnect",
    price: 49.00,
    price_3: 132.00,
    price_6: 246.00,
    price_12: 456.00,
    callout: "Deepen your connections",
    description_1: "Reconnect Experience will foster deeper connections with oneself and loved ones, enhancing emotional bonds and self-awareness. ",
    description_2: "Strengthen your relationships and understand better your personal needs and desires.",
    button_color: "bg-[#63493A]",
    text_color: "text-white",
    bg_color: "bg-[#E4A887] bg-opacity-60",
    background: "/Reconnect1.jpg",
    box_out: "/Reconnect2.png",
    quantity: 1,
    item_1: "Conversation Starter Cards",
    item_2: "Gratitude Journal",
    item_3: "Calming essential oil roller",
    item_4: "Item4",
    item_1_text: "text",
    item_2_text: "text",
    item_3_text: "text",
    item_4_text: "text",
  },
  {id: 4,
    name: "Recharge",
    price: 49.00,
    price_3: 132.00,
    price_6: 246.00,
    price_12: 456.00,
    callout: "Restore your energy levels",
    description_1: "Recharge Experience will restore physical and mental energy, combating fatigue and promoting overall wellness.",
    description_2: "Enhance your energy levels and sense of renewal. Become ready to take on new challenges.",
    button_color: "bg-[#824E32]",
    text_color: "text-white",
    bg_color: "bg-[#F5CBB3] bg-opacity-70",
    background: "/Recharge1.jpg",
    box_out: "/Recharge2.png",
    quantity: 1,
    item_1: "Energy drink",
    item_2: "Protein snack",
    item_3: "Motivational book",
    item_4: "Energy boosting supplements",
    item_1_text: "text",
    item_2_text: "text",
    item_3_text: "text",
    item_4_text: "text",
  },
  {id: 5,
    name: "Refresh",
    price: 49.00,
    price_3: 132.00,
    price_6: 246.00,
    price_12: 456.00,
    callout: "Cool and cleanse your senses",
    description_1: "Refresh Experience will cool and cleanse the mind and body, leaving one feeling light and invigorated.",
    description_2: "Bring into your life a sense of clarity and invigoration, with a rejuvenated and revitalized outlook.",
    button_color: "bg-[#4A524D] text-black",
    text_color: "text-[#75827A]",
    bg_color: "bg-[#FEFAEF]",
    background: "/Refresh1.jpg",
    box_out: "/Refresh2.png",
    quantity: 1,
    item_1: "Cooling eye gel",
    item_2: "Refreshing body wash",
    item_3: "Exfoliating body scrub",
    item_4: "Mint-scented facial mist",
    item_1_text: "text",
    item_2_text: "text",
    item_3_text: "text",
    item_4_text: "text",
  },
  {id: 6,
    name: "Refocus",
    price: 49.00,
    price_3: 132.00,
    price_6: 246.00,
    price_12: 456.00,
    callout: "Sharpen your mind",
    description_1: "Refocus Experience will sharpen mental clarity, improve concentration, and realign priorities.",
    description_2: "Enhance your focus and productivity, with a clear sense of direction and purpose.",
    button_color: "bg-[#404F45]",
    text_color: "text-[#404F45]",
    bg_color: "bg-[#B3C7BA] bg-opacity-50",
    background: "/Refocus1.jpg",
    box_out: "/Refocus2.png",
    quantity: 1,
    item_1: "Item1",
    item_2: "Item2",
    item_3: "Item3",
    item_4: "Item4",
    item_1_text: "text",
    item_2_text: "text",
    item_3_text: "text",
    item_4_text: "text",
  },
  {id: 7,
    name: "Rebalance",
    price: 49.00,
    price_3: 132.00,
    price_6: 246.00,
    price_12: 456.00,
    callout: "Find your inner peace",
    description_1: "Rebalance Experience will harmonize the body, mind, and spirit, creating a state of equilibrium.",
    description_2: "Get into a profound sense of balance and harmony, with a stable and centered outlook on life.",
    button_color: "bg-[#B89F8C]",
    text_color: "text-[#785D55]",
    bg_color: "bg-[#FAE6DE] bg-opacity-50",
    background: "/Rebalance1.jpg",
    box_out: "/Rebalance2.png",
    quantity: 1,
    item_1: "Item1",
    item_2: "Item2",
    item_3: "Item3",
    item_4: "Item4",
    item_1_text: "text",
    item_2_text: "text",
    item_3_text: "text",
    item_4_text: "text",
  }
]


export const MyProvider = ({ children }) => {
    const _APILINK_ = "https://39ngdl4z-3000.uks1.devtunnels.ms" 
    /* const _APILINK_ = "" */        /* Add the public link of your browser and comment the one above */
  /*UseState*/

    const [loggingIn, setLoggingIn] = useState({email: "", password: ""});
    const [subscribe, setSubscribe] = useState({email: "", password: ""});
    const [changePassword, setChangePassword] = useState({email: "", old_password: "", new_password: ""});
    const [personInfo, setPersonInfo] = useState(() => {
      const savedPersonInfo = localStorage.getItem('personInfo');
      return savedPersonInfo ? JSON.parse(savedPersonInfo) : {
        id: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
        phone: "",
      };
    });
    const [addressInfo, setAddressInfo] = useState(() => {
      const savedAddresses = localStorage.getItem('addressInfo');
      return savedAddresses ? JSON.parse(savedAddresses) : [];
    });
    const [subscriptionInfo, setSubscriptionInfo] = useState(() => {
      const savedSubscriptions = localStorage.getItem('subscriptionInfo');
      return savedSubscriptions ? JSON.parse(savedSubscriptions) : [];
    });;
    const [formData, setFormData] = useState(addressInfo || {
      user_id: personInfo.id,
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
    const [index, setIndex] = useState("");
  
    const [token, setToken_] = useState(localStorage.getItem("token"));

    /*UseEffect*/

    useEffect(() => {
      localStorage.setItem("myCart", JSON.stringify(cart));
      
  }, [cart]);

    /* FUNCTIONS */

    const fetchUser = async (userId) => {
      try {
        const response = await axios.get(`${_APILINK_}/user/${userId}`
        );
        setPersonInfo(response.data);
        console.log(response.data);
        localStorage.setItem('personInfo', JSON.stringify(response.data));
        }
        catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    const saveToken = (userToken) => {
      setToken_(userToken);
    }

    const clearAll = () => {
      setToken_(null);
      setPersonInfo({});
      localStorage.removeItem('token');
      localStorage.removeItem('personInfo');
      localStorage.removeItem('addressInfo');
      localStorage.removeItem('subscriptionInfo');
    }
    
    const fetchAddresses = async (userId) => {
      try {
        const response = await axios.get(`${_APILINK_}/user/${userId}/addresses`);
        setAddressInfo(response.data);
        localStorage.setItem('addressInfo', JSON.stringify(response.data))
      } catch (error) {
        console.error('Error fetching addresses:', error);
      }
    };

    const fetchSubscriptions = async (userId) => {
      try {
        const response = await axios.get(`${_APILINK_}/user/${userId}/subscriptions`);
        setSubscriptionInfo(response.data);
        localStorage.setItem('subscriptionInfo', JSON.stringify(response.data));
        console.log(response.data)
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
        const response = await axios.post(`${_APILINK_}/register`, {
          email: subscribe.email, 
          password: subscribe.password, 
        })
        alert('Successfully registered');
        setSubscribe({email: "", password: ""});
      } catch (error) {
        console.error('Error while registering:', error);
      };
    }

    const login = async () => {
        try {
          const response = await axios.post(`${_APILINK_}/login`, {
            email: loggingIn.email,
            password: loggingIn.password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }});
          console.log(response.data);
          const userId = response.data.user.id;
          saveToken(response.data.access_token);
          setPersonInfo(response.data.user);
          const savedPersonInfo = JSON.parse(localStorage.getItem('personInfo'));
          const savedAddress = JSON.parse(localStorage.getItem('addressInfo'));
          const savedSub = JSON.parse(localStorage.getItem('subscriptionInfo'));
          if (savedPersonInfo) {
            setPersonInfo(savedPersonInfo);
          } else {
            await fetchUser(userId);
          };
          if (savedAddress) {
            setAddressInfo(savedAddress);
          } else {
            await fetchAddresses(userId);
          };
          if (savedSub) {
            setSubscriptionInfo(savedSub);
          } else {
            await fetchSubscriptions(userId);
          };

          setLoggingIn({email: "", password: ""});
          window.location.href = "/profile";
        } catch (error) {
          alert('Incorrect username or password');
          setLoggingIn({email: "", password: ""});
          console.error('Login error:', error);
        }};

    const logout = async () => {
      try {
        await axios.post(`${_APILINK_}/logout`);
        clearAll();
        window.location.href = "/";
      } catch (error) {
        console.error('Logout error:', error);
      }
    };

    const updatePersonInfo = async (userId, data) => {
      try {
        await axios.put(`${_APILINK_}/user/${userId}`, data);
        const updatedPersonInfo = { ...personInfo, ...data };
        setPersonInfo(updatedPersonInfo);
        localStorage.setItem('personInfo', JSON.stringify(updatedPersonInfo));
        console.log('Personal information updated successfully');
      } catch (error) {
        console.error('Error updating data:', error);
      }
    };
    
    const change_Password = async () => {
      try {
        const response = await axios.post(`${_APILINK_}/change-password`, {
          email: personInfo.email, 
          old_password: changePassword.old_password,
          new_password: changePassword.new_password,
        });
        alert('Password updated successfully');
      } catch (error) {
        console.error('Something went wrong:', error);
      };
    }

    /* Address functions */

    const storeAddress = async (addressData) => {
      try {
        const response = await axios.post(`${_APILINK_}/address`, 
          addressData
        );
        const updatedAddresses = [...addressInfo, addressData];
        setAddressInfo(updatedAddresses);
        localStorage.setItem('addressInfo', JSON.stringify(updatedAddresses));
      } catch (error) {
        console.error('Error while saving address:', error);
      };
    }

    const updateAddress = async (addressId, updatedData) => {
      try {
          const response = await axios.put(`${_APILINK_}/address/${addressId}`, 
            updatedData
          );
          const updatedAddressList = addressInfo.map(address =>
            address.id === addressId ? { ...address, ...updatedData } : address
          );
          setAddressInfo(updatedAddressList);
          localStorage.setItem('addressInfo', JSON.stringify(updatedAddressList));
      } catch (error) {
          console.error('Error while updating address:', error);
      }
  };

  const deleteAddress = async (addressId) => {
    try {
      await axios.delete(`${_APILINK_}/address/${addressId}`);
      console.log(`Address deleted successfully`);
      const updatedAddressList = addressInfo.filter(address => address.id !== addressId);
      setAddressInfo(updatedAddressList);
      localStorage.setItem('addressInfo', JSON.stringify(updatedAddressList)); 
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
    const response = await axios.post(`${_APILINK_}/subscriptions`, {
      subscriptionData
    });
    const updatedSubscriptions = [...subscriptionInfo, response.data];
    setSubscriptionInfo(updatedSubscriptions);
    localStorage.setItem('subscriptionInfo', JSON.stringify(updatedSubscriptions));
  } catch (error) {
    console.error('Error while adding subscription:', error);
  };
}

const updateSubscription = async (subscriptionID, updatedData) => {
  try {
      const response = await axios.put(`${_APILINK_}/subscriptions/${subscriptionID}`, {
        updatedData
      });
      const updatedSubscriptions = subscriptionInfo.map(subscription => 
        subscription.id === subscriptionID ? { ...subscription, ...updatedData } : subscription
      );
      setSubscriptionInfo(updatedSubscriptions);
      localStorage.setItem('subscriptionInfo', JSON.stringify(updatedSubscriptions));
  } catch (error) {
      console.error('Error while updating subscription:', error);
  }
};
    
    /* Add variable names within appContext */
    let appContext = {loggingIn, setLoggingIn, boxes, subscribe, setSubscribe, personInfo, setPersonInfo, addressInfo, setAddressInfo, subscriptionInfo, setSubscriptionInfo, cart, setCart, onAddToCart, onDeleteFromCart, increaseQuantity, decreaseQuantity, register, login, changePassword, setChangePassword, change_Password, storeAddress, updateAddress, formData, setFormData,  type, setType, icon, setIcon, handleToggle, deleteAddress, fetchAddresses, fetchSubscriptions ,storeSubscription, updateSubscription, subData, setSubData, index, setIndex, saveToken, logout, token, setToken_, updatePersonInfo }

    return (
        <MyContext.Provider value={appContext}>
          {children}
        </MyContext.Provider>
      );
};

export default MyContext