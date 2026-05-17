import { useEffect, useState } from "react";
import axios from "axios";
import ChatBox from "./components/ChatBox";
import JsonViewer from "./components/JsonViewer";
import LayoutPreview from "./components/LayoutPreview";

function App() {
  const [layout, setLayout] = useState(null);

  useEffect(() => {
    fetchLayout();
  }, []);

  const fetchLayout = async () => {
    const res = await axios.get("http://localhost:5000/layout");
    setLayout(res.data);
  };

  const sendMessage = async (message) => {
    const res = await axios.post("http://localhost:5000/chat", {
      message,
    });

    setLayout(res.data.updatedLayout);
  };

  return (
    <div className="container">
      <h1>Chat Layout Agent</h1>

      <ChatBox sendMessage={sendMessage} />

      {layout && (
        <>
          <LayoutPreview layout={layout} />
          <JsonViewer layout={layout} />
        </>
      )}
    </div>
  );
}

export default App;