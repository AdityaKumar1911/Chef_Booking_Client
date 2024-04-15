import React, { useState } from 'react';
import './ChatBox.css'; // Import your CSS file for styling

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = { text: message, fromUser: true };
    setChatMessages([...chatMessages, newMessage]);
    setMessage('');
  };

  return (
    <div className="chat-box-container">
      <div className="card chat-box" style={{ height: "400px" }}>
        <div className="card-body chat-messages">
          {chatMessages.map((msg, index) => (
            <div key={index} className={msg.fromUser ? "user-message" : "server-message"}>
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="card-footer chat-input-form">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={handleMessageChange}
            className="form-control chat-input"
          />
          <button
            type="submit"
            className="btn btn-primary send-button" 
            disabled={!message.trim()} // Disable if message is empty or contains only whitespace
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
