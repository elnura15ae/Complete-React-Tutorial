import logo from './logo.svg';
import './App.css';

function App() {
const title= 'Welcome to the new blog!'
const likes = 50;
// const person = { name:'yoshi', age:30} error
const link ="http://www.google.com"

  return (
    <div className="App">
      <div className="content"></div>
      <h1>App Component</h1>
      <h1>{ title }</h1>
      <p>Liked { likes }</p>

      {/* <p> { person } */}

      <p>{ 10 }</p>
      <p>{ "hello, Ninjas" }</p>
      <p>{ [1,2,3,4,5] }</p>
      <p>{ Math.random() * 10 }</p>

      <a href={link}>Google Site</a>
    </div>
  );
}

export default App;
