//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
//import ColorPicker from './colorPicker';
import ThemePicker from './components/ThemePicker';
//import Clock from './Clock';
//import ProfileForm from './profileForm';
import {styles} from './styles';
import NotTweeter from './containers/NotTweeter';

function App() {
  const [theme, setTheme] = useState('Light');
  const styleTheme = theme === 'Light' ? styles.light : theme === 'Dark' ? styles.dark : styles.medium;
  function slide (){
    
    const sidebar = document.getElementById('sidebar');
    
    sidebar.classList.toggle('change');
  }
  function swapView(){
    const head = document.getElementById('row');
    
    head.classList.toggle('visible');
  }
  return (
    <div style={styleTheme} className="App">
      <img className='menuBar' src='bars-medium.png' onClick={slide} alt='bars' />
      <header id='head' style={styleTheme} className="App-header">
     
        <div id="row" className='row'>
        
        
          <div>
            <p>Theme: <ThemePicker theme={theme} setTheme={setTheme} /></p>
          </div>
          
          

          <h1>
            J H Howell 
          </h1>
          <h2>
            Web Dev / Software Engineer
          </h2>
          <img className="profileImage" src="profileSmall.jpg" alt="" />
        </div>
        <NotTweeter />
      </header>
      <main style={styleTheme}>
      
        
            

            <aside id='sidebar' className="sidebar">
                
                    
                <h3>Menu</h3>
                <button onClick={swapView}>Profile</button>
                <button onClick={swapView}>Not Tweeter</button>
                <p><a href="https://github.com/howell083">Github</a></p>
                <p><a href="https://howell083.github.io">Github Pages</a></p>
                <ThemePicker theme={theme} setTheme={setTheme} />           
                <p>...</p>
                            
                
            </aside>
            


        </main>
    </div>
  );
}

export default App;
