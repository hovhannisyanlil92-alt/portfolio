import { useState } from 'react';
import {
  Card,
  Input,
  Button,
  Space,
  Typography,
  message,
  Spin,
  Radio,
  Select,
} from 'antd';
import axios from 'axios';
import { DID_DEFAULTS, DID_LABELS, LANGUAGE_OPTIONS, type LanguageOption } from './consts';
import { didStyles } from './styles';

const { Text, Title } = Typography;
const { TextArea } = Input;

function DId() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(DID_DEFAULTS.imageUrl);
  const [scriptText, setScriptText] = useState(DID_DEFAULTS.scriptText);
  const [outputType, setOutputType] = useState<'video' | 'audio'>('video');
  const [selectedVoice, setSelectedVoice] = useState<LanguageOption>(LANGUAGE_OPTIONS[0]);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [status, setStatus] = useState('');

  const apiKey = import.meta.env.VITE_DID_API_KEY;

  const axiosConfig = {
    auth: { username: apiKey, password: '' },
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  };

  const handleTextToAudio = () => {
    if (!scriptText) {
      message.error('Մուտքագրեք տեքստ');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(scriptText);

    const setVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find((v) => v.lang.startsWith(selectedVoice.langCode.split('-')[0]));

      if (voice) {
        utterance.voice = voice;
      }

      window.speechSynthesis.speak(utterance);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = setVoice;
    } else {
      setVoice();
    }

    utterance.onstart = () => {
      setLoading(true);
      setStatus('Լսվում է...');
    };
    utterance.onend = () => {
      setLoading(false);
      setStatus('');
    };
  };

  const pollVideoStatus = (id: string) => {
    const interval = window.setInterval(async () => {
      try {
        const response = await axios.get(`https://api.d-id.com/talks/${id}`, axiosConfig);
        if (response.data.status === 'done') {
          window.clearInterval(interval);
          setVideoUrl(response.data.result_url);
          setLoading(false);
          setStatus('Պատրաստ է');
        } else if (response.data.status === 'error') {
          window.clearInterval(interval);
          setLoading(false);
          message.error('Մշակման սխալ');
        }
      } catch {
        window.clearInterval(interval);
        setLoading(false);
      }
    }, 3000);
  };

  const handleCreateVideo = async () => {
    if (!imageUrl || scriptText.length < 3) {
      message.error('Լրացրեք բոլոր դաշտերը');
      return;
    }

    setLoading(true);
    setStatus('Վիդեոն պատրաստվում է D-ID-ի կողմից...');
    setVideoUrl(null);

    try {
      const response = await axios.post(
        'https://api.d-id.com/talks',
        {
          source_url: imageUrl,
          script: {
            type: 'text',
            input: scriptText,
            provider: {
              type: 'microsoft',
              voice_id: selectedVoice.value,
            },
          },
        },
        axiosConfig,
      );
      pollVideoStatus(response.data.id);
    } catch {
      message.error('D-ID API Error');
      setLoading(false);
    }
  };

  return (
    <div style={didStyles.page}>
      <Card title={<Title level={4}>{DID_DEFAULTS.cardTitle}</Title>} style={didStyles.card}>
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          <div>
            <Text strong>{DID_LABELS.outputType}</Text>
            <br />
            <Radio.Group
              value={outputType}
              onChange={(e) => setOutputType(e.target.value)}
              optionType="button"
              buttonStyle="solid"
              style={didStyles.radioGroup}
            >
              <Radio.Button value="video">{DID_LABELS.videoMode}</Radio.Button>
              <Radio.Button value="audio">{DID_LABELS.audioMode}</Radio.Button>
            </Radio.Group>
          </div>

          <div>
            <Text strong>{DID_LABELS.language}</Text>
            <Select
              style={{ width: '100%', ...didStyles.field }}
              value={selectedVoice.value}
              onChange={(val) => {
                const option = LANGUAGE_OPTIONS.find((o) => o.value === val);
                if (option) setSelectedVoice(option);
              }}
              options={LANGUAGE_OPTIONS}
            />
          </div>

          {outputType === 'video' && (
            <div>
              <Text strong>{DID_LABELS.imageUrl}</Text>
              <Input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                style={didStyles.field}
              />
            </div>
          )}

          <div>
            <Text strong>{DID_LABELS.script}</Text>
            <TextArea
              rows={4}
              value={scriptText}
              onChange={(e) => setScriptText(e.target.value)}
              style={didStyles.field}
            />
          </div>

          <Button
            type="primary"
            block
            size="large"
            onClick={outputType === 'video' ? handleCreateVideo : handleTextToAudio}
            loading={loading}
          >
            {outputType === 'video' ? DID_LABELS.videoButton : DID_LABELS.audioButton}
          </Button>

          {loading && (
            <div style={didStyles.loading}>
              <Spin tip={status} />
            </div>
          )}

          {videoUrl && outputType === 'video' && (
            <video src={videoUrl} controls style={didStyles.video} />
          )}
        </Space>
      </Card>
    </div>
  );
}

export default DId;
