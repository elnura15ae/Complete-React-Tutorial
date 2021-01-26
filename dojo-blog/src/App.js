import logo from './logo.svg';
import Navbar from './Navbar'
import Home from './Home' 

function App() {
const title= 'Welcome to the new blog!'
const likes = 50;
// const person = { name:'yoshi', age:30} error
const link ="http://www.google.com"

  return (
    <div className="App">
      <Navbar />
      <div className="content"></div>
      <Home />
    </div>
  );
}

export default App;
