import { CSSProperties } from 'react';

export const skillsStyles = {
  section: {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  } as CSSProperties,

  eyebrow: {
    color: '#6366f1',
    fontWeight: 800,
    letterSpacing: '1px',
    fontSize: '12px',
    display: 'block',
    marginBottom: '8px',
    textTransform: 'uppercase',
  } as CSSProperties,

  title: {
    marginTop: 0,
    fontWeight: 700,
    marginBottom: '40px',
  } as CSSProperties,

  card: {
    background: '#ffffff',
    border: '1px solid #f0f0f0',
    borderRadius: '20px',
    padding: '30px',
    height: '100%',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
    display: 'flex',
    flexDirection: 'column',
  } as CSSProperties,

  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '30px',
  } as CSSProperties,

  groupIconImg: {
    width: '32px',
    height: '32px',
    padding: '6px',
    background: '#f5f3ff',
    borderRadius: '8px',
    objectFit: 'contain',
  } as CSSProperties,

   item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50px', 
    textAlign: 'center',
    marginBottom: '10px',
  } as CSSProperties,

  iconBox: {
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8px',
  } as CSSProperties,

  skillIcon: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  } as CSSProperties,

  skillName: {
    fontSize: '10px', 
    color: '#8c8c8c',
    lineHeight: '1.2',
  } as CSSProperties,
  
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px', 
    justifyContent: 'flex-start',
  } as CSSProperties,
};



