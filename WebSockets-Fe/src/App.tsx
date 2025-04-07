import { useState } from "react";


type MessageType =  string;

function App() {
  const [mssg, setMssg] = useState<MessageType>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMssg(e.target.value);
  };

  const SendMessage = () => {
    console.log("Message sent:", mssg);
    setMssg('');
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter Message..."
          value={mssg}
          onChange={handleChange}
        />
        <button onClick={SendMessage}>Send</button>
      </div>
    </>
  );
}

export default App;
