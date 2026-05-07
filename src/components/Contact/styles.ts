// export const contactStyles = {
//   section: 'contact-section container',
//   left: 'contact-left',
//   eyebrow: 'section-eyebrow',
//   form: 'contact-form',
//   right:'contact-right',
// } as const

import { CSSProperties } from 'react';

export const contactStyles = {
  section: {
    padding: '80px 5%',
    background: '#fff',
  } as CSSProperties,

  eyebrow: {
    color: '#6366F1',
    fontWeight: 700,
    fontSize: '12px',
    letterSpacing: '1px',
    display: 'block',
    marginBottom: '8px',
  } as CSSProperties,

  title: {
    fontSize: '32px',
    fontWeight: 800,
    margin: '0 0 16px 0',
  } as CSSProperties,

  description: {
    color: '#666',
    fontSize: '15px',
    marginBottom: '32px',
  } as CSSProperties,

  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  } as CSSProperties,

  iconCircle: {
    width: '44px',
    height: '44px',
    background: '#EEF2FF',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#6366F1',
    fontSize: '18px',
  } as CSSProperties,

  formWrapper: {
    padding: '20px',
  } as CSSProperties,

  input: {
    borderRadius: '8px',
    padding: '12px',
    border: '1px solid #F0F0F0',
    background: '#FAFAFA',
  } as CSSProperties,

  submitBtn: {
    height: '48px',
    padding: '0 32px',
    borderRadius: '12px',
    background: '#6366F1',
    border: 'none',
    fontWeight: 600,
    marginTop: '24px',
    display: 'flex',
    flexDirection: 'row-reverse', // Put icon on the right
    alignItems: 'center',
    gap: '8px',
  } as CSSProperties,

  illustration: {
    width: '100%',
    maxWidth: '280px',
    height: 'auto',
  } as CSSProperties,
};
