import React, { useState } from "react";
import "../App.css";
import { db } from "../config";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setloader] = useState(false);

    const handlesubmit = (e) => {
        e.preventDefault();
        setloader(true);
        db.collection('contacts').add({
            name:name,
            email:email,
            message:message,
        })
        .then(() => {
            alert('Message Done!');
            setloader(false);
        })
        .catch((error) =>{
            alert(error.message);
            setloader(false);
        });

        setMessage("");
        setName("");
        setEmail("");
    };

    return (
        <form className="form" onSubmit = {handlesubmit}> 
            <h1 style={{textAlign:'center'}}>Contact Form</h1>
            
            <label>Name</label>
            <input placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            
            <label>Email</label>
            <input placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            
            <label>Message</label>
            <textarea placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}/>

            <button type="submit" style={{ backgroundColor: loader ? "#ccc" : "rgb(2,2,110)"}}> Submit

            </button>


        </form>
    );
};

export default Contact;