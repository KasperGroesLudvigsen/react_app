import logo from './logo.svg';
import './App.css';
import './Table.css'
import Table from './components/Table';
import MealsList from './components/MealsList';
import RegisterForm from './components/RegisterForm';
import MealsProvider from './components/DataProvider';
import Multiple from './components/Form';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      < Table />

      <Input defaultValue="Hello world" />
    </div>
  );
}
*/

// FLOW
// App.js displays:
  // InputComponent, which takes input from user and sends it to:
    // RetrieveData, which queries the DB based on user input and sends the data to
      // Table, which displays the data 

function App() {

  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum)
    let userInput = prompt("type a number");
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  return (
    <div>

      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}> Guess a number between 1 and 3 </button>
      <RegisterForm />
      <MealsProvider>
        <MealsList />
      </MealsProvider>
      <Multiple />
      <Table />
    </div>
  );
}
export default App;
