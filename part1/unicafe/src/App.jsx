import { useState } from "react";
import "./App.css";

const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div className="container">
      <h1>Give Feedback</h1>

      <div>
        <button onClick={() => setGood(good + 1)} className="button">
          Good
        </button>
        <button onClick={() => setNeutral(neutral + 1)} className="button">
          Neutral
        </button>
        <button onClick={() => setBad(bad + 1)} className="button">
          Bad
        </button>
      </div>

      <h2>Statistics</h2>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
    </div>
  );
};

export default App;
