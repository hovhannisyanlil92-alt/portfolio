import { useState, useRef, useEffect } from 'react';
import { Typography, Avatar, Button, Input, Space, Card, Divider } from 'antd';
import { 
  SendOutlined, GithubOutlined, LinkedinOutlined, InstagramOutlined, PlusOutlined, UserOutlined 
} from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import { sendMessageToGemini } from './gemini';
import { styles } from './styles';
import '../App.css'

const { Title, Text, Paragraph } = Typography;

interface Message {
  role: 'user' | 'ai';
  text: string;
}

export default function GeminiChat() {
  const initialMessage: Message[] = [
    { role: 'ai', text: "I can tell you about my background, skills, and more. What would you like to know?" }
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
            <Title level={4} style={{ margin: 0 }}>Chat with me</Title>
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
             <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '24px',  padding: '40px',boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)', marginBottom: '24px'}} className="welcome-container">
              <div className="welcome-text" style={{flex: "1.2"}}>
                {/* <div style={{ fontSize: '48px', marginBottom: '16px' }}>✨</div> */}
                <Title level={2} style={{ margin: 0, fontSize: '28px', color: '#1a1a1a' }}>Hi! I'm Lilit</Title>
                <Text type="secondary" style={{ fontSize: '16px', lineHeight: '1.5', display: 'block', maxWidth: '350px' }}>
                  "I'm a Frontend Developer. Feel free to ask me anything about my background, skills, or projects!
                </Text>
             </div>
              <div className="welcome-image" style={{flex: '1', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                <img 
                  src="/src/assets/cv-sidebar.png"  
                  alt="Lilit AI Illustration" 
                  style={{ width: '100%', maxWidth: '500px', height: 'auto', display: 'block' }}
                />
              </div>
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
        @media (max-width: 768px) {
            .welcome-container {
              flex-direction: column-reverse; 
              text-align: center;
              padding: 20px;
            }
            
            .welcome-text {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            
            .welcome-image {
              justify-content: center;
              margin-bottom: 20px;
            }
        }
      `}</style>
    </div>
  );
}
