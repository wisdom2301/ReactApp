import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Button2 from './Button2';
import Card from './Card';
import UserCard from './UserCard';
import First from './App Component/First';
import './App Component/First.css';
import Product from './App Component/Product';
import Products from './App Component/Products'
import { useState } from 'react';

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
  };
  const [count, setCount] = useState(0);
  const [isLog, setIsLog] = useState(true);

  const handleClick = () =>{
    setCount(count + 1);
  };
  const handleLogClick = () => {
    setIsLog(!isLog);
  }

  return (
    <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
      <p>
          <b>Hello Wisdom!</b>
          
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
        <First />

        <Product />
        {isLog ? <p>Thank You for coming</p> : <p>We will miss you</p>}
        <button onClick = {handleLogClick}>{isLog ? <span>Log Out</span> : <span>Log In</span>}</button>
        <Products myCount = {count} handleClick = {handleClick} />

        <br></br>

    </div>
  );
}

export default App;
