import React from 'react';

export const styles: { [key: string]: React.CSSProperties } = {
  pageWrapper: {
    background: '#f0f2f5',
    padding: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
  },
  topDownloadBar: {
    width: '95%',
    maxWidth: '1000px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  container: {
    width: '95%',
    maxWidth: '1000px',
    background: '#fff',
    boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
    borderRadius: '24px',
    overflow: 'hidden',
  },
  sidebar: {
    background: '#1A1C2E', // Navy color
    color: '#fff',
    padding: '30px 20px',
  },
  avatarWrapper: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  sidebarTitle: {
    color: '#fff',
    fontSize: '16px',
    marginBottom: '15px',
  },
  sidebarText: {
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '8px',
    fontSize: '12px',
  },
  sidebarDivider: {
    borderColor: 'rgba(255,255,255,0.1)',
    margin: '20px 0',
  },
  quoteBox: {
    marginTop: '40px',
    background: 'rgba(255,255,255,0.05)',
    padding: '15px',
    borderRadius: '12px',
  },
  quoteIcon: {
    fontSize: '30px',
    color: '#6366F1',
    display: 'block',
  },
  quoteText: {
    color: '#fff',
    fontStyle: 'italic',
    fontSize: '12px',
  },
  mainContent: {
    background: '#fff',
  },
  heroSection: {
    background: 'linear-gradient(135deg, #f5f7ff 0%, #e0e7ff 100%)',
    minHeight: '280px',
    padding: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
  },
  nameHeader: {
    fontSize: 'clamp(32px, 5vw, 48px)',
    margin: 0,
    lineHeight: 1.1,
    color: '#1A1C2E',
  },
  roleSubHeader: {
    fontSize: '18px',
    color: '#6366F1',
    fontWeight: 'bold',
    display: 'block',
    marginTop: '10px',
  },
  headerLinks: {
    marginTop: '20px',
    color: '#666',
  },
  heroImage: {
    height: '260px',
    position: 'absolute',
    right: '20px',
    bottom: '0',
    zIndex: 1,
  },
  sectionsContainer: {
    padding: '30px 40px',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '15px',
  },
  iconCircle: {
    width: '32px',
    height: '32px',
    background: '#EEF2FF',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#6366F1',
  },
  featureCard: {
    background: '#F9FAFB',
    borderRadius: '16px',
    textAlign: 'center',
  },
  featureIcon: {
    fontSize: '20px',
    color: '#6366F1',
    marginBottom: '10px',
  }
};