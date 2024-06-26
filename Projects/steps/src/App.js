import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

// What is State?

// Most important concept in React, it's basically memory of a component, it can be held over time
// Updating state triggers React to re-render the component

// PRACTICAL GUIDELINES
// 1) Use a state variable for any data that the component should keep track of over time
// 2) Whenever you want something in the component to be dynamic, create a piece of state related to that
//    and update the state when the thing should change
// 3) If you want to change the way a component looks, or the data it displays, update its state, using event handler function
// 4) For data that should not trigger component re-renders, don't use state

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Read children prop</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  // useState is a hook, can only be called top level
  const [step, setStep] = useState(1); // The deafult value is 1, always use const and always use setter function
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Calvin" });

  function handlePrevious() {
    // Always a good idea to use callback functions when updating state based on current value of the state
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);

    // BAD PRACTICE
    // test.name = "Fred";
    // GOOD PRACTICE
    // setTest({ name: "Fred" });
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

// Creating a reusable button
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {/* The children prop acts like an empty hole that can befilled with any JSX markup that the component receives,
      it has to be in-between html tags */}
      {/* It is really useful for generic components that don't know their content before being used */}
      {children}
    </button>
  );
}
