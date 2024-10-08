import React from 'react';
import './App.css';
import FunctionalComp from "./component/functioncomponent";
import {ClassComponent,ClassComponent1} from"./component/classcomponent";
import Click from './component/Click';
import Counter from './component/counter';
import Functionprops from './Functionprops';
import Parentcomp from './component/ParentComp';
import Classprops from './Classprops';
function App() {
  return (
    <div>
      <h1>Hello world!</h1>
      <h1>hi how are you</h1>
      <FunctionalComp></FunctionalComp>
      <ClassComponent></ClassComponent>
      <ClassComponent1></ClassComponent1>
      <Click></Click>
      <Counter></Counter>
      <Parentcomp></Parentcomp>
      <Classprops name='learner 1' place='palcex'><p>this is child component</p></Classprops>
      <Classprops name='learner 2' place='placey'><p>hi how are you</p></Classprops>
      <Classprops name='learner 3' place='placez'>
        <button>Click</button>
      </Classprops>
      <Functionprops name='learner 4' place='PlaceA'></Functionprops>
    </div>
  );
}

export default App;
