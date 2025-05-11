import './App.css';
import React from 'react';
import { Button } from './Components/atoms/Button';

const App = () => {

  function sendReq() {
    fetch('http://localhost:8000/api/cors')
    .then(response => response.json())
    .then(data => console.log(data));
  }

  return (
    <div>
      <h1 className='text-4xl font-bold'>MyClinic - Frontend</h1>
      <p className='text-neutral-500'>Nashe</p>

      <Button size='xl' type='button' style='danger' fn={sendReq}>Test</Button>
    </div>
  );
};

export default App;
