import React, { useState } from 'react';

const BackendTest: React.FC = () => {
  const [response, setResponse] = useState<string>('');

  const testBackend = () => {
    fetch('http://localhost:8000/api/echo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: 'Test prompt' }),
    })
      .then(res => res.json())
      .then(data => setResponse(data.response))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <button onClick={testBackend}>Test Backend</button>
      <p>Response: {response}</p>
    </div>
  );
};

export default BackendTest;