//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
//import ColorPicker from './colorPicker';
import ThemePicker from './components/ThemePicker';
//import Clock from './Clock';
import ProfileForm from './profileForm';
import {styles} from './styles';

function App() {
  const [theme, setTheme] = useState('Light');
  const styleTheme = theme === 'Light' ? styles.light : theme === 'Dark' ? styles.dark : styles.medium;
  
  return (
    <div className="App">
      
      <header style={styleTheme} className="App-header">
        
        <div className='row'>
          <ul>
            <li><ThemePicker theme={theme} setTheme={setTheme} /></li>
            <li><img src="profileSmall.jpg" alt="" /></li>
          </ul>
          
          

          <h1>
            J H Howell 
          </h1>
          <h2>
            Web Dev / Software Engineer
          </h2>
        </div>
      </header>
      <main style={styleTheme}>
        
        
            

            <aside className="sidebar">
                
                    
                <h3>Projects</h3>
                <button>Matching Coffee Beans</button>
                <button>Inventory Management</button>
                <p><a href="https://github.com/howell083">Github</a></p>
                <p><a href="https://howell083.github.io">Github Pages</a></p>
                            
                <p>...</p>
                            
                
            </aside>
            


        </main>
    </div>
  );
}

export default App;
