import React, { useState } from "react";
import "./style.css";
import imageData from "../../assets/scripts/imageData.json";

function Contact() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("email is " + email);
    console.log("phone is " + phone);
    console.log("message is" + message);
    // to clear the input or select field. Thanks TA Robert!
    //console.log(e.target)
    e.target.reset();
  };

  return(
    // aside header  
    <main className="container-md">
        <div className="row">
            <div className="col-md-5 ">
                <h1 className="display-1 p-2 m-2" id="contact-greeting" >It would be great to hear from you</h1>
                <div id="myInfo" className="m-2 p-2">
                    <h5>More ways to get in touch</h5>
                    <p>shayla.rose.stevenson@gmail.com</p>
                    <a href={imageData[2].url} target="_blank">View my resume</a>
                </div>
            </div>
    {/* form */}
            <div className="col-md-7 mt-2 p-2">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name-input">Name</label>
                        {/* <input id="name-input" type="name" className="form-control form-control-lg text-muted" name="name" placeholder="You're name here, please."> */}
                        <input
                            className="form-control form-control-lg text-muted"
                            id="name-input"
                            type="text"
                            placeholder="Your name here, please."
                            name="username"
                            onChange={e => setUsername(e.target.value)}
                        />
                        <p className="form-text text-muted">Nice to meet you.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email-input">Email Address</label>
                        {/* <input id="email-input" type="email" className="form-control form-control-lg text-muted" name="email" placeholder="example@email.com"> */}
                        <input
                            className="form-control form-control-lg text-muted"
                            id="email-input"
                            type="email"
                            placeholder="example@email.com"
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <p className="form-text text-muted">Your privacy is important to me.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone-input">Phone Number</label>
                        {/* <input id="phone-input" type="tel" className="form-control form-control-lg text-muted" name="phone" placeholder="XXX-XXX-XXXX"> */}
                        <input
                            className="form-control form-control-lg text-muted"
                            id="phone-input"
                            type="phone"
                            placeholder="XXX-XXX-XXXX"
                            name="phone"
                            onChange={e => setPhone(e.target.value)}
                        />
                        <p className="form-text text-muted"><em>ring...ring...</em>hi</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message-input">Message</label>
                        {/* <textarea id="message-input" className="form-control" rows="6" placeholder="Please provide a brief description of your web service needs. I am here to help!"></textarea> */}
                        <textarea
                            className="form-control"
                            id="message-input"
                            rows="6"
                            type="message"
                            placeholder="Please provide a brief description of your web service needs. I am here to help!"
                            name="message"
                            onChange={e => setMessage(e.target.value)}
                        />
                        <p className="form-text text-muted">We're off to a great start!</p>
                    </div> 
                    <button type="submit" className="btn btn-lg" id="submit-button">
                        Submit
                    </button>
                    {/* <button className="btn btn-success" type="submit">
                        Submit
                    </button> */}
                    {/* test message */}
                    {/* <div className="container mt-4">
                        <h3>Hello {username}!</h3>
                        <p> your email is {email}!</p>
                        <p> your phone number is {phone}!</p>
                        <p> your message is {message}!</p>
                    </div> */}
                </form>
            </div>
        </div>
    </main>
  )
};


export default Contact; 