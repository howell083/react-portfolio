import logo from './logo.svg';
import './App.css';
import ColorPicker from './colorPicker';
import Clock from './Clock';
import ProfileForm from './profileForm';

function App() {
  return (
    <div className="App">
      <ColorPicker />
      <header className="App-header">
        <Clock />
        <ProfileForm />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wazzup!
        </p>
        
      </header>
    </div>
  );
}

export default App;
