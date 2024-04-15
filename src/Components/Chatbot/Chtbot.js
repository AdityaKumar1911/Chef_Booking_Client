import React, { useState } from 'react';
import axios from 'axios';
import './ChatBox.css'; 
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');

  const sendMessage = () => {
    const userId = localStorage.getItem("userid");
    const apiUrl = 'http://localhost:4000/message';

    const data = {
      text: message,
      userId : userId
      // Add any other data you need to send with the message
    };

    axios.post(apiUrl, data)
    .then(response => {
      console.log('Message sent successfully:', response.data);
      if (response.data.status) {
        setReceivedMessage(response.data.chatMessage.text);
      }
    })
    .catch(error => {
      console.error('Error sending message:', error);
      // Handle the error
    });

    // Clear the message input after sending
    setMessage('');
  };

  return (
    <>
      <NavBar />
      <div className='chat-space'>
        <div className="chat">
          <div className="chat-title">
            <h1>Chef on wheels</h1>
            <span className="chat-status">Online</span>
            <span className="dot"></span>
            <figure className="avatar">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" alt="Avatar" />
            </figure>
          </div>

          <div className="messages">
            <div className="messages-content">
              {receivedMessage && <div className="message">{receivedMessage}</div>}
            </div>
          </div>
          <div className="message-box">
            <textarea
              type="text"
              className="message-input"
              placeholder="Type message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="message-submit"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChatBox;