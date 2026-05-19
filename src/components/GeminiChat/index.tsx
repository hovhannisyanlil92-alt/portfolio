import { useState, useRef, useEffect } from 'react';
import { Typography, Avatar, Button, Input, Space, Card, Divider, Drawer } from 'antd';
import {
  SendOutlined,
  GithubOutlined,
  LinkedinOutlined,
  PlusOutlined,
  UserOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import { GEMINI_UI, INITIAL_MESSAGE } from './consts';
import type { ChatMessage } from './types';
import { sendMessageToGemini } from './utils';
import './styles.css';

const { Title, Text, Paragraph } = Typography;

type SidebarPanelProps = {
  avatarSize: number;
  onLinkClick?: () => void;
};

function SidebarPanel({ avatarSize, onLinkClick }: SidebarPanelProps) {
  return (
    <>
      <div className="gemini-sidebar-profile">
        <Avatar size={avatarSize} src={GEMINI_UI.avatarSrc} className="gemini-sidebar-avatar" />
        <Title level={3} className="gemini-sidebar-name">
          {GEMINI_UI.name}
        </Title>
        <Text className="gemini-sidebar-role">{GEMINI_UI.role}</Text>
      </div>

      <div>
        <Title level={5} className="gemini-sidebar-heading">
          <UserOutlined /> About Me
        </Title>
        <Paragraph className="gemini-sidebar-text">{GEMINI_UI.aboutText}</Paragraph>

        <Divider className="gemini-sidebar-divider" />

        <Title level={5} className="gemini-sidebar-heading">
          <SendOutlined /> Connect
        </Title>
        <Space size="middle" wrap className="gemini-sidebar-social">
          <Button
            className="gemini-social-icon"
            icon={<GithubOutlined />}
            href="https://github.com/hovhannisyanlil92-alt"
            target="_blank"
            onClick={onLinkClick}
            shape="circle"
            ghost
          />
          <Button
            className="gemini-social-icon"
            href="https://www.linkedin.com/in/lilit-hovhannisyan-729508211"
            target="_blank"
            icon={<LinkedinOutlined />}
            onClick={onLinkClick}
            shape="circle"
            ghost
          />
          <Button
            className="gemini-social-icon"
            href="https://t.me/LilitHovhannisyan_dev"
            target="_blank"
            icon={<SendOutlined />}
            onClick={onLinkClick}
            shape="circle"
            ghost
          />
        </Space>
      </div>

      <Card className="gemini-sidebar-footer">
        <Text>{GEMINI_UI.sidebarHint}</Text>
      </Card>
    </>
  );
}

export default function GeminiChat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  const handleNewChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setInput('');
  };

  const closeSidebar = () => setSidebarOpen(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);
    const res = await sendMessageToGemini(userMsg);
    setMessages((prev) => [...prev, { role: 'ai', text: res }]);
    setLoading(false);
  };

  return (
    <div className="gemini-chat-page">
      <aside className="gemini-sidebar gemini-sidebar--desktop sidebar-container">
        <SidebarPanel avatarSize={150} />
      </aside>

      <Drawer
        title={GEMINI_UI.name}
        placement="left"
        open={sidebarOpen}
        onClose={closeSidebar}
        className="gemini-sidebar-drawer"
        width={300}
        destroyOnClose={false}
      >
        <div className="gemini-sidebar gemini-sidebar--drawer">
          <SidebarPanel avatarSize={96} onLinkClick={closeSidebar} />
        </div>
      </Drawer>

      <main className="gemini-main">
        <header className="gemini-header">
          <div className="gemini-header-start">
            <Button
              type="text"
              className="gemini-sidebar-toggle"
              icon={<MenuOutlined />}
              aria-label="Open profile sidebar"
              onClick={() => setSidebarOpen(true)}
            />
            <div className="gemini-header-titles">
              <Title level={4} className="gemini-header-title">
                {GEMINI_UI.chatTitle}
              </Title>
              <Text type="secondary" className="gemini-header-subtitle">
                {GEMINI_UI.chatSubtitle}
              </Text>
            </div>
          </div>
          <Space className="gemini-header-actions">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleNewChat}
              className="gemini-new-chat-btn"
            >
              <span className="gemini-new-chat-btn-label">{GEMINI_UI.newChatLabel}</span>
            </Button>
          </Space>
        </header>

        <div className="gemini-chat-container" ref={scrollRef}>
          {messages.length === 1 && (
            <div className="gemini-welcome-container welcome-container">
              <div className="gemini-welcome-text welcome-text">
                <Title level={2} className="gemini-welcome-title">
                  {GEMINI_UI.welcomeTitle}
                </Title>
                <Text type="secondary" className="gemini-welcome-description">
                  {GEMINI_UI.welcomeDescription}
                  <br/><br/>
                  Ask me anything in English or Armenian... 
                </Text>
              </div>
              <div className="gemini-welcome-image welcome-image">
                <img src={GEMINI_UI.welcomeImageSrc} alt="AI Illustration" />
              </div>
            </div>
          )}

          {messages.map((msg, index) => (
            <div
              key={index}
              className={msg.role === 'ai' ? 'gemini-ai-bubble' : 'gemini-user-bubble'}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          ))}
          {loading && (
            <div className="gemini-ai-bubble">
              <Text type="secondary">{GEMINI_UI.thinkingLabel}</Text>
            </div>
          )}
        </div>

        <div className="gemini-input-area">
          <Input
            placeholder={GEMINI_UI.inputPlaceholder}
            variant="borderless"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onPressEnter={handleSend}
            disabled={loading}
            className="gemini-input-field"
          />
          <Button
            type="primary"
            shape="circle"
            icon={<SendOutlined />}
            onClick={handleSend}
            loading={loading}
            className="gemini-send-btn"
            aria-label="Send message"
          />
        </div>
      </main>
    </div>
  );
}
