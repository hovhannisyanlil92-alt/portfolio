import type { CSSProperties } from 'react';

export const didStyles = {
  page: {
    padding: '40px',
    maxWidth: '600px',
    margin: '0 auto',
  } satisfies CSSProperties,
  card: {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  } satisfies CSSProperties,
  radioGroup: {
    marginTop: 8,
  } satisfies CSSProperties,
  field: {
    marginTop: 8,
  } satisfies CSSProperties,
  loading: {
    textAlign: 'center',
  } satisfies CSSProperties,
  video: {
    width: '100%',
    borderRadius: '8px',
    marginTop: 15,
  } satisfies CSSProperties,
};
