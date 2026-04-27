import { Input, Button } from "antd";
import { useState } from "react";
import { sendMessageToGemini } from './gemini';
import ReactMarkdown from "react-markdown"


const { TextArea } = Input;

function GeminiText() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const res = await sendMessageToGemini(input);
    setResponse(res);
  };

  return (
    <div style={{ padding: 20, maxWidth:800, margin: "40px auto" }} className="gemini">
      <h2>Gemini Chat</h2>

      <TextArea
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask here..."
      />

      <Button type="primary" 
        onClick={handleSend} 
        style={{ marginTop: 10 }}>
        Send
      </Button>
      <div style={{ marginTop: 20 }}><ReactMarkdown>{response}</ReactMarkdown></div>
    </div>
  );
}
export default GeminiText;

