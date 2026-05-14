// import { useState } from 'react';
// import { Card, Input, Button, Space, Typography, message, Spin } from 'antd';
// import axios from 'axios';

// const { Text } = Typography;
// const { TextArea } = Input;

// const DIDVideoCreator = () => {
//   const [loading, setLoading] = useState(false);
//   const [imageUrl, setImageUrl] = useState('https://i.ibb.co/gLQnCMYF/Chat-GPT-Image-12-2026-20-57-01.png');
//   const [scriptText, setScriptText] = useState('Hello, this is a short line for the avatar to speak.');
//   const [videoUrl, setVideoUrl] = useState(null);
//   const [status, setStatus] = useState('');

//   const API_KEY = import.meta.env.VITE_DID_API_KEY;

//   const axiosConfig = {
//     auth: {
//       username: API_KEY,
//       password: ''
//     },
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }
//   };

//   const createVideo = async () => {
//     if (!imageUrl || scriptText.length < 3) {
//       return message.error("Լրացրեք բոլոր դաշտերը:");
//     }

//     setLoading(true);
//     setStatus('Հարցումը ուղարկվում է...');

//     try {
//       const response = await axios.post(
//         'https://api.d-id.com/talks',
//         {
//           source_url: imageUrl,
//           script: {
//             type: 'text',
//             input: scriptText
//           }
//         },
//         axiosConfig
//       );

//       const talkId = response.data.id;
//       pollVideoStatus(talkId);

//     } catch (error) {
//       console.error("API Error Response:", error.response?.data);
//       message.error(error.response?.data?.message || "Սխալ հարցման ընթացքում (400 Bad Request)");
//       setLoading(false);
//     }
//   };

//   const pollVideoStatus = async (id) => {
//     const interval = setInterval(async () => {
//       try {
//         const response = await axios.get(`https://api.d-id.com/talks/${id}`, axiosConfig);
//         const data = response.data;

//         if (data.status === 'done') {
//           clearInterval(interval);
//           setVideoUrl(data.result_url);
//           setLoading(false);
//           setStatus('Պատրաստ է');
//         } else if (data.status === 'error' || data.status === 'rejected') {
//           clearInterval(interval);
//           setLoading(false);
//           message.error("Վիդեոյի մշակումը մերժվեց:");
//         } else {
//           setStatus(`Կարգավիճակ՝ ${data.status}...`);
//         }
//       } catch (err) {
//         clearInterval(interval);
//         setLoading(false);
//       }
//     }, 3000);
//   };

//   return (
//     <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
//       <Card title="D-ID Video Creator">
//         <Space direction="vertical" style={{ width: '100%' }} size="large">
//           <div>
//             <Text strong>Image URL:</Text>
//             <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
//           </div>
//           <div>
//             <Text strong>Script:</Text>
//             <TextArea rows={4} value={scriptText} onChange={(e) => setScriptText(e.target.value)} />
//           </div>
//           <Button type="primary" block onClick={createVideo} loading={loading}>
//             Create Video
//           </Button>

//           {loading && (
//             <div style={{ textAlign: 'center' }}>
//               <Spin description={status} />
//               <p>{status}</p>
//             </div>
//           )}

//           {videoUrl && (
//             <video src={videoUrl} controls style={{ width: '100%', marginTop: '20px', borderRadius: '8px' }} />
//           )}
//         </Space>
//       </Card>
//     </div>
//   );
// };

// export default DIDVideoCreator;




import React, { useState, useEffect } from 'react';
import { Card, Input, Button, Space, Typography, message, Spin, Radio, Divider, Select } from 'antd';
import axios from 'axios';

const { Text, Title } = Typography;
const { TextArea } = Input;

// Լեզուների և ձայների ցուցակը
const languageOptions = [
  { label: 'Հայերեն (Armine)', value: 'hy-AM-ArmineNeural', langCode: 'hy-AM' },
  { label: 'English (Jenny)', value: 'en-US-JennyNeural', langCode: 'en-US' },
  { label: 'English (Guy)', value: 'en-US-GuyNeural', langCode: 'en-US' },
  { label: 'Русский (Svetlana)', value: 'ru-RU-SvetlanaNeural', langCode: 'ru-RU' },
  { label: 'Deutsch (Katja)', value: 'de-DE-KatjaNeural', langCode: 'de-DE' },
  { label: 'Français (Denise)', value: 'fr-FR-DeniseNeural', langCode: 'fr-FR' },
];

const DIDVideoCreator = () => {
  const [loading, setloading] = useState(false);
  const [imageUrl, setImageUrl] = useState('https://i.ibb.co/gLQnCMYF/Chat-GPT-Image-12-2024-20-57-01.png');
  const [scriptText, setScriptText] = useState('Բարև ձեզ, ինչպե՞ս եք։');
  const [outputType, setOutputType] = useState('video');
  const [selectedVoice, setSelectedVoice] = useState(languageOptions[0]); // Լռելյայն հայերեն
  const [videoUrl, setVideoUrl] = useState(null);
  const [status, setStatus] = useState('');

  const API_KEY = import.meta.env.VITE_DID_API_KEY;

  const axiosConfig = {
    auth: { username: API_KEY, password: '' },
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
  };

  // --- 1. Տեքստից Աուդիո (Browser) ---
  const handleTextToAudio = () => {
    if (!scriptText) return message.error("Մուտքագրեք տեքստ");

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(scriptText);
    
    const setVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      // Փնտրում ենք ձայն ըստ ընտրված լեզվի կոդի (օր. 'hy-AM')
      const voice = voices.find(v => v.lang.startsWith(selectedVoice.langCode.split('-')[0]));
      
      if (voice) {
        utterance.voice = voice;
      } else {
        console.warn("Համակարգում այս լեզվի ձայնը չգտնվեց, կօգտագործվի լռելյայն ձայնը։");
      }
      
      window.speechSynthesis.speak(utterance);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = setVoice;
    } else {
      setVoice();
    }

    utterance.onstart = () => { setloading(true); setStatus('Լսվում է...'); };
    utterance.onend = () => { setloading(false); setStatus(''); };
  };

  // --- 2. Տեքստից Վիդեո (D-ID) ---
  const handleCreateVideo = async () => {
    if (!imageUrl || scriptText.length < 3) return message.error("Լրացրեք բոլոր դաշտերը");

    setloading(true);
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
              voice_id: selectedVoice.value // Օգտագործում ենք ընտրված voice_id-ն
            }
          }
        },
        axiosConfig
      );
      pollVideoStatus(response.data.id);
    } catch (error) {
      message.error("D-ID API Error");
      setloading(false);
    }
  };

  const pollVideoStatus = async (id) => {
    const interval = setInterval(async () => {
      try {
        const response = await axios.get(`https://api.d-id.com/talks/${id}`, axiosConfig);
        if (response.data.status === 'done') {
          clearInterval(interval);
          setVideoUrl(response.data.result_url);
          setloading(false);
          setStatus('Պատրաստ է');
        } else if (response.data.status === 'error') {
          clearInterval(interval);
          setloading(false);
          message.error("Մշակման սխալ");
        }
      } catch (err) { clearInterval(interval); setloading(false); }
    }, 3000);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <Card title={<Title level={4}>AI Content Generator</Title>} style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          
          {/* Ռեժիմի ընտրություն */}
          <div>
            <Text strong>Ընտրեք արդյունքը՝</Text><br/>
            <Radio.Group 
              value={outputType} 
              onChange={(e) => setOutputType(e.target.value)} 
              optionType="button" 
              buttonStyle="solid"
              style={{ marginTop: 8 }}
            >
              <Radio.Button value="video">Վիդեո (D-ID)</Radio.Button>
              <Radio.Button value="audio">Աուդիո (Browser)</Radio.Button>
            </Radio.Group>
          </div>

          {/* Լեզվի ընտրություն */}
          <div>
            <Text strong>Ընտրեք լեզուն՝</Text>
            <Select 
              style={{ width: '100%', marginTop: 8 }} 
              value={selectedVoice.value}
              onChange={(val) => setSelectedVoice(languageOptions.find(o => o.value === val))}
              options={languageOptions}
            />
          </div>

          {outputType === 'video' && (
            <div>
              <Text strong>Image URL:</Text>
              <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} style={{ marginTop: 8 }} />
            </div>
          )}

          <div>
            <Text strong>Տեքստ:</Text>
            <TextArea 
              rows={4} 
              value={scriptText} 
              onChange={(e) => setScriptText(e.target.value)} 
              style={{ marginTop: 8 }}
            />
          </div>

          <Button type="primary" block size="large" onClick={outputType === 'video' ? handleCreateVideo : handleTextToAudio} loading={loading}>
            {outputType === 'video' ? 'Ստեղծել Վիդեո' : 'Լսել Աուդիոն'}
          </Button>

          {loading && <div style={{ textAlign: 'center' }}><Spin tip={status} /></div>}

          {videoUrl && outputType === 'video' && (
            <video src={videoUrl} controls style={{ width: '100%', borderRadius: '8px', marginTop: 15 }} />
          )}

        </Space>
      </Card>
    </div>
  );
};

export default DIDVideoCreator;