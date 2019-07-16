import React from 'react';

import {ChatProvider} from './ChatContext'

import Messages from './Messages'
import Input from './Input'
import './App.css'
// import Profile from './Profile'

function App() {
  return (
    <div className="App">
      <ChatProvider>
        <Messages />
        <Input />
      </ChatProvider>
    </div>
  )
}

export default App
