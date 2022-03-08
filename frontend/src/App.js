
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CRUD</h1>
      </header>
      <div className='add-user'>
        <input type="text" name="username" placeholder="UserName" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="Post" placeholder="User Post" />
        </div>
    </div>
  );
}

export default App;
