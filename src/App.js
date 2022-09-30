import { useState } from 'react';
import './App.css';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>

function App() {
  const [age, setAge] = useState(0);
  const [urate, setUpper] = useState();
  const [lrate, setLower] = useState();

    function calculate() {
      setUpper((220-age)*0.85);
      setLower((220-age)*0.65+"-");
    }
  return (
    <div>
      <h1>Heart rate limits calculator</h1>
      <form>
        <div id='x'>
          <label>Age</label><br />
          <input type="number" value={age} onChange={e => setAge(e.target.value)}/> <br />
          <label>Heart rate limits</label><br />
          <output>{lrate}{urate}</output>
        </div>
        <button type="button" onClick={calculate}>Laske</button>
      </form>
    </div>
  );
}

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>

export default App;
