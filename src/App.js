import './App.css';

function App() {
  const calcAge = event => {
    event.preventDefault();
    const bday = new Date(event.target.querySelector('input[type="date"]').value);
    const age = Math.floor((new Date() - bday) / (1000 * 60 * 60 * 24 * 365.25));
    event.target.querySelector('span').innerText = age;
  }
  return (
    <>
      <h1>Age Calculator</h1>
      <br />
      <h4>Enter your date of birth</h4>
      <form onSubmit={calcAge}>
        <input type="date" max="2023-01-01" />
        <br /> <br />
        <input type="submit" value="Calculate Age" />
        <br /> <br />
        <h2>You are <span></span> years old</h2>
      </form>
    </>
  );
}

export default App;
