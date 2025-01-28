import React, { useState } from "react";
import "./App.css";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;
  return (
    <>
      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Average: {average.toFixed(2)}</p>
          <p>Positive: {positivePercentage.toFixed(2)}%</p>
        </div>
      )}
    </>
  );
};

const App = () => {
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
