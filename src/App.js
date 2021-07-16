import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Button2 from './Button2';

function App() {
  return (
    <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Wisdom!
          
        </p>
        <Button text = "Sign In"/>
        <Button text = "Learn More" />
        <Button text = "Sign Out" />
<br></br>
<br></br>
        <Button2 text = "Sign In" />
        <Button2 text = "Sign Out" />
        
        
      
    </div>
  );
}

export default App;
