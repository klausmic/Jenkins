import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000')
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Vedanth’s Portfolio</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
