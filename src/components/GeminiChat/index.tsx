import { useState, useRef, useEffect } from 'react';
import { Typography, Avatar, Button, Input, Space, Card, Divider } from 'antd';
import {
  SendOutlined,
  GithubOutlined,
  LinkedinOutlined,
  PlusOutlined,
  UserOutlined,
} from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import { GEMINI_UI, INITIAL_MESSAGE } from './consts';
import type { ChatMessage } from './types';
import { sendMessageToGemini } from './utils';
import './styles.css';

const { Title, Text, Paragraph } = Typography;

export default function GeminiChat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  const handleNewChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setInput('');
  };

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
      <aside className="gemini-sidebar sidebar-container">
        <div className="gemini-sidebar-profile">
          <Avatar size={150} src={GEMINI_UI.avatarSrc} className="gemini-sidebar-avatar" />
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
          <Space size="middle">
            <Button
              className="gemini-social-icon"
              icon={<GithubOutlined />}
              href="https://github.com/hovhannisyanlil92-alt"
              target="_blank"
            />
            <Button
             className="gemini-social-icon"
              href="https://www.linkedin.com/in/lilit-hovhannisyan-729508211"
              target="_blank"
              icon={<LinkedinOutlined />}
            />
             <Button
              className="gemini-social-icon"
              href="https://t.me/LilitHovhannisyan_dev"
              target="_blank"
              icon={<SendOutlined />}
            />

          </Space>
        </div>

        <Card className="gemini-sidebar-footer">
          <Text>{GEMINI_UI.sidebarHint}</Text>
        </Card>
      </aside>

      <main className="gemini-main">
        <header className="gemini-header">
          <div>
            <Title level={4} className="gemini-header-title">
              {GEMINI_UI.chatTitle}
            </Title>
            <Text type="secondary" className="gemini-header-subtitle">
              {GEMINI_UI.chatSubtitle}
            </Text>
          </div>
          <Space>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleNewChat}
              className="gemini-new-chat-btn"
            >
              {GEMINI_UI.newChatLabel}
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
                </Text>
              </div>
              <div className="gemini-welcome-image welcome-image">
                <img src={GEMINI_UI.welcomeImageSrc} alt="Lilit AI Illustration" />
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
          />
          <Button
            type="primary"
            shape="circle"
            icon={<SendOutlined />}
            onClick={handleSend}
            loading={loading}
            className="gemini-send-btn"
          />
        </div>
      </main>
    </div>
  );
}
