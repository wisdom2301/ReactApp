import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Button2 from './Button2';
import Card from './Card';
import UserCard from './UserCard';

function App() {
  const products = {
    Title: 'Bag',
    Description: 'This is my bag',
    Price: 3000,

  };
  const handleProduct = () => {
alert(`${products.Title}, ${products.Price} added to cart`);
  };

  const user = {
    name: 'Wisdom',
    age: 17,
    height: '68ft',
  }

  return (
    <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
 z       <p>
          Hello Wisdom!
          
        </p>
        <Button text = "Sign In"/>
        <Button text = "Learn More" />
        <Button text = "Sign Out" />
<br></br>
<br></br>
        <Button2 text = "Sign In" />
        <Button2 text = "Sign Out" />
        
        <Card myProducts = {products} myClick = {handleProduct} />
        <UserCard userS = {user}/>
      
    </div>
  );
}

export default App;
