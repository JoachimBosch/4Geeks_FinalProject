import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const Return = () => {
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState('');
  
    useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const sessionId = urlParams.get('session_id');
  
      fetch(`/session-status?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setStatus(data.status);
          setCustomerEmail(data.customer_email);
        })
        .catch((error) => {
            console.error("Error fetching session status:", error)
        })
    }, []);
  
    if (status === 'open') {
        alert('Payment failed, please try again')
      return ( 
        <Navigate to="/checkout" />
      )
    }
  
    if (status === 'complete') {
      return (
        <>
            <div className="my-28">
                <section id="success">
                <p>
                    We appreciate your business! A confirmation email will be sent to {customerEmail}.
        
                    If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
                </p>
                </section>
            </div>
            
        </>
        
      )
    }
  
    return null;
  }

  export default Return