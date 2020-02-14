import React from 'react';
import ClassStateDemo from './components/State/ClassStateDemo';
import UseStateDemo from './components/State/UseStateDemo';
import ClassStateDemoII from './components/State/ClassStateDemoII';
import UseStateDemoII from './components/State/UseStateDemoII';
import ClassStateDemoIII from './components/State/ClassStateDemoIII';
import UseStateDemoIII from './components/State/UseStateDemoIII';
import ClassLifeCicleDemo from './components/Effect/ClassLifeCicleDemo';
import UseEffectDemo from './components/Effect/UseEffectDemo';
import ClassLifeCicleDemoII from './components/Effect/ClassLifeCicleDemoII';
import UseEffectDemoII from './components/Effect/UseEffectDemoII';
import CustomHookDemo from './components/Custom/CustomHookDemo';
import UseContextDemo from './components/Context/UseContextDemo';
import ClassContextDemo from './components/Context/ClassContextDemo';
import { ThemeContext, themes } from './components/Context/ThemeContext';

const divStyle = { 
  display: 'flex', 
  justifyContent: 'space-around'
}

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <div className="App">
        <h1>React Hooks</h1>
        <section>
        <div style={divStyle}>
          <ClassStateDemo />
          <UseStateDemo />
        </div>
        <div style={divStyle}>
          <ClassStateDemoII />
          <UseStateDemoII />
        </div>
        <div style={divStyle}>
          <ClassStateDemoIII />
          <UseStateDemoIII />
        </div>
        </section>
        <section>
        <div style={divStyle}>
          <ClassLifeCicleDemo />
          <UseEffectDemo />
        </div>
        <div style={divStyle}>
          <ClassLifeCicleDemoII />
          <UseEffectDemoII />
        </div>
        </section>
        <section>
        <div style={divStyle}>
          <ClassContextDemo/>
          <UseContextDemo />
        </div>
        </section>
        <section>
        <div style={divStyle}>
          <CustomHookDemo />
        </div>
        </section>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
