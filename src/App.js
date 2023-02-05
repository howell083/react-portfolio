import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
//import ColorPicker from './colorPicker';
import ThemePicker from './components/ThemePicker';
import Clock from './Clock';
import ProfileForm from './profileForm';
import {styles} from './styles';

function App() {
  const [theme, setTheme] = useState('Light');
  const styleTheme = theme === 'Light' ? styles.light : theme === 'Dark' ? styles.dark : styles.medium;
  
  return (
    <div className="App">
      
      <header style={styleTheme} className="App-header">

        <div style={{width: '48%'}}>
        <ThemePicker theme={theme} setTheme={setTheme} />
                <img style={{border: '3px solid #FFFDD0', borderRadius: '50%', maxWidth: 300}}src="profileSmall.jpg" alt="" />
        </div>
        <div style={{width: '48%'}}>
          <h1>
            J H Howell 
          </h1>
          <h2>
            Web Dev / Software Engineer
          </h2>
        </div>
      </header>
      <main>
        
        <ProfileForm />
            

            <aside className="sidebar">
                
                    
                <h3>Projects</h3>
                
                <p><a href="https://github.com/howell083">Github</a></p>
                <p><a href="https://howell083.github.io">Github Pages</a></p>
                            
                <p>...</p>
                            
                
            </aside>


        </main>
    </div>
  );
}

export default App;
