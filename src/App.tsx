import React, { ChangeEvent } from "react";
import { Counter } from "./components";

const App = () => {
  const [step, setStep] = React.useState(1);
  const [error, setError] = React.useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const stepInput = parseInt(event.target.value);

    if (!isNaN(stepInput)) {
      setStep(stepInput);
      setError("");
    } else {
      setError("Please enter only numbers");
    }
  };

  // Controlled input
  return (
    <>
      <div>
        <label htmlFor="step">Enter the step value:</label>
        <input
          type="text"
          name="step"
          id="step"
          value={step} // Syncs UI state to App state
          onChange={handleChange} // Syncs App state to UI changes
        />
        <div>
          <span>
            You can also increment step using this counter:
            <Counter
              increment={() => {
                setStep(step + 1);
              }}
              decrement={() => {
                setStep(step - 1);
              }}
            >
              {step}
            </Counter>
          </span>
        </div>
        {error && <p>{error}</p>}
      </div>

      <Counter />
      <br />
      <Counter step={step} />
    </>
  );
};

export default App;
