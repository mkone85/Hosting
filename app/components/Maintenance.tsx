import React from 'react';

export default function Maintenance() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #eef2f7 0%, #cfd9df 100%)',
      color: '#222',
      textAlign: 'center',
      padding: '4rem'
    }}>
      <span style={{fontSize: 70, marginBottom: 24}} role="img" aria-label="Wartung">🚧</span>
      <h1 style={{fontSize: '2.4rem', fontWeight: 700, marginBottom: 16}}>Wartungsarbeiten</h1>
      <p style={{fontSize: '1.2rem', maxWidth: 400}}>
        Unsere Webseite wird gerade gewartet oder aktualisiert.<br />Wir sind in Kürze wieder für Sie da!
      </p>
    </div>
  );
}
