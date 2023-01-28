import logo from './logo.svg';
import './App.css';
import ColorPicker from './colorPicker';
import Clock from './Clock';
import ProfileForm from './profileForm';
import {styles} from './styles';

function App() {
  return (
    <div className="App">
      
      <header style={styles.lightStyles} className="App-header">
      <ColorPicker />
        <ProfileForm />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          J H Howell
        </h1>
        <h2>
          Web Dev / Software Engineer
        </h2>
        
      </header>
    </div>
  );
}

export default App;
