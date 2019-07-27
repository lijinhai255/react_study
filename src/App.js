import React from 'react';
import JxsText from "./component/JxsText"
import StateMgt from './component/StateMgt';
import EventHandle from './component/EventHandle';
import ScrollingList from './component/ScrollingList';
import ContextText from './component/ContextText';
import HocTest from './component/HocText.tsx';
import Composition from './component/Composition';
import HockText from "./component/HockText"
function App(props) {
  return (
    <div className="App">
        {/* <JxsText /> */}
      {/* 状态管理 */}
      {/* <StateMgt /> */}
      {/* 事件处理 */}
      {/* <EventHandle /> */}
      {/* 上下文 */}
      {/* <ContextText /> */}
      {/* Hoc */}
      {/* <HocTest /> */}
      {/* 组件复合 */}
      {/* <Composition /> */}
      <HockText/>
    </div>
  );
}

export default App;
