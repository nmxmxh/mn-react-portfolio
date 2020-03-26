import React from 'react';
import './App.css';

import Menu from './components/menu/menu.component';
import EntryView from './components/entry-view/entry-view.component';

function App() {
  return (
    <div className="App">
      <Menu className='menu'/>
      <div className="content">
        <EntryView />
      </div>
    </div>
  );
}

export default App;
