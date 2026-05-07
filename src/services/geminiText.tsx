import React, { useState, useRef, useEffect } from 'react';
import { Typography, Avatar, Button, Input, Space, Card, Divider } from 'antd';
import { 
  SendOutlined, GithubOutlined, LinkedinOutlined, InstagramOutlined, PlusOutlined, 
  SunOutlined, UserOutlined 
} from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import { sendMessageToGemini } from './gemini';
import { styles } from './styles';

const { Title, Text, Paragraph } = Typography;

interface Message {
  role: 'user' | 'ai';
  text: string;
}

export default function GeminiChat() {
  const initialMessage: Message[] = [
    { role: 'ai', text: "Hello! 👋 I'm Gemini. I can tell you about Lilit's background, skills, and more. What would you like to know?" }
  ];

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(initialMessage);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  const handleNewChat = () => {
    setMessages(initialMessage);
    setInput("");
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);
    const res = await sendMessageToGemini(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: res }]);
    setLoading(false);
  };

  return (
    <div style={styles.layout} className="gemini-chat-page">
      
      {/* SIDEBAR */}
      <aside style={styles.sidebar} className="sidebar-container">
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <Avatar size={150} src="./src/assets/about-photo-gemini.png" style={{ marginBottom: 16, backgroundPosition: 'center'}} />
          <Title level={3} style={{ color: 'white', margin: 0 }}>Lilit Hovhannisyan</Title>
          <Text style={{ color: 'rgba(255,255,255,0.6)' }}>Frontend Developer</Text>
        </div>

        <div>
          <Title level={5} style={{ color: 'white', opacity: 0.8 }}><UserOutlined /> About Me</Title>
          <Paragraph style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', lineHeight: 1.6 }}>
            Passionate Frontend Developer creating seamless user experiences with modern UI/UX principles.
          </Paragraph>

          <Divider style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '32px 0' }} />

          <Title level={5} style={{ color: 'white', opacity: 0.8 }}><SendOutlined /> Connect</Title>
          <Space size="middle">
             <GithubOutlined style={styles.socialIcon} />
             <LinkedinOutlined style={styles.socialIcon} />
             <InstagramOutlined style={styles.socialIcon} />
          </Space>
        </div>

        <Card style={styles.sidebarFooter}>
          <Text style={{ fontSize: '12px' }}>✨ Ask me anything about my experience or skills!</Text>
        </Card>
      </aside>

      {/* CHAT AREA */}
      <main style={styles.mainContent}>
        <header style={styles.header}>
          <div>
            <Title level={4} style={{ margin: 0 }}>Gemini Chat</Title>
            <Text type="secondary" style={{ fontSize: '12px' }}>Get to know more about me</Text>
          </div>
          <Space>
            <Button type="primary" icon={<PlusOutlined />} onClick={handleNewChat} style={{ borderRadius: '20px', height: '40px' }}>
              New Chat
            </Button>
          </Space>
        </header>

        <div style={styles.chatContainer} ref={scrollRef}>
          {messages.length === 1 && (
             <div style={styles.welcomeBox}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✨</div>
                <Title level={2}>Hi! I'm Gemini</Title>
                <Text type="secondary" style={{ fontSize: '16px' }}>I'm here to help you learn more about Lilit.</Text>
             </div>
          )}

          {messages.map((msg, index) => (
            <div key={index} style={msg.role === 'ai' ? styles.aiBubble : styles.userBubble}>
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          ))}
          {loading && <div style={styles.aiBubble}><Text type="secondary">Gemini is thinking...</Text></div>}
        </div>

        <div style={styles.inputArea}>
          <Input placeholder="Ask me anything..." variant="borderless" value={input} 
                 onChange={(e) => setInput(e.target.value)} onPressEnter={handleSend} disabled={loading} />
          <Button type="primary" shape="circle" icon={<SendOutlined />} onClick={handleSend} loading={loading} style={{ width: 45, height: 45 }} />
        </div>
      </main>

      {/* RESPONSIVE MEDIA QUERY */}
      <style>{`
        @media (max-width: 991px) {
          .sidebar-container { width: 260px !important; }
        }
        @media (max-width: 767px) {
          .sidebar-container { display: none !important; }
          .gemini-chat-page main { padding: 20px !important; }
        }
      `}</style>
    </div>
  );
}








// import { Input, Button } from "antd";
// import { useState } from "react";
// import { sendMessageToGemini } from './gemini';
// import ReactMarkdown from "react-markdown"


// const { TextArea } = Input;

// function GeminiText() {
//   const [input, setInput] = useState("");
//   const [response, setResponse] = useState("");

//   const handleSend = async () => {
//     const res = await sendMessageToGemini(input);
//     setResponse(res);
//   };

//   return (
//     <div style={{ padding: 20, maxWidth:800, margin: "40px auto" }} className="gemini">
//       <h2>Gemini Chat</h2>

//       <TextArea
//         rows={4}
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Ask here..."
//       />

//       <Button type="primary" 
//         onClick={handleSend} 
//         style={{ marginTop: 10 }}>
//         Send
//       </Button>
//       <div style={{ marginTop: 20 }}><ReactMarkdown>{response}</ReactMarkdown></div>
//     </div>
//   );
// }
// export default GeminiText;

