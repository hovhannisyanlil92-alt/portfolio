import { CSSProperties } from 'react';

export const styles = {
  layout: {
    minHeight: '100vh',
    background: '#F3F4FB',
    display: 'flex',
  } as CSSProperties,

  sidebar: {
    background: 'linear-gradient(180deg, #4F5282 0%, #2D2F54 100%)',
    width: '300px',
    padding: '40px 24px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0 32px 32px 0',
    height: '100vh',
    position: 'sticky',
    top: 0,
  } as CSSProperties,

  mainContent: {
    flex: 1,
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'hidden',
  } as CSSProperties,

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
  } as CSSProperties,

  chatContainer: {
    flex: 1,
    overflowY: 'auto',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  } as CSSProperties,

  aiBubble: {
    alignSelf: 'flex-start',
    background: 'white',
    padding: '16px 20px',
    borderRadius: '4px 24px 24px 24px',
    maxWidth: '80%',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    color: '#333',
  } as CSSProperties,

  userBubble: {
    alignSelf: 'flex-end',
    background: '#6366F1',
    padding: '12px 20px',
    borderRadius: '24px 24px 4px 24px',
    maxWidth: '80%',
    color: 'white',
  } as CSSProperties,

  inputArea: {
    marginTop: '24px',
    background: 'white',
    padding: '8px 8px 8px 24px',
    borderRadius: '40px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
  } as CSSProperties,

  socialIcon: {
    fontSize: '20px',
    color: 'rgba(255,255,255,0.7)',
    padding: '8px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '8px',
    cursor: 'pointer',
  } as CSSProperties,

  sidebarFooter: {
    color: 'rgba(255,255,255,0.7)',
    margin: '10px 0px',
  } as CSSProperties
};