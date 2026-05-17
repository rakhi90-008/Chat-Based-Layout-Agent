import { useState } from "react";

function ChatBox({ sendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!message.trim()) return;

    sendMessage(message);
    setMessage("");
  };

  return (
    <div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter instruction"
      />

      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default ChatBox;