import React from 'react';
import JxsText from "./component/JxsText"
import StateMgt from './component/StateMgt';
import EventHandle from './component/EventHandle';
import ScrollingList from './component/ScrollingList';
import ContextText from './component/ContextText';

function App(props) {
  return (
    <div className="App">
      <ScrollingList/>
      <ContextText/>
    </div>
  );
}

export default App;
