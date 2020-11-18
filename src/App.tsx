import React from 'react';
import './App.css';
import { useGesture } from 'react-use-gesture';

function App() {
   const gestures = useGesture({
    onDragEnd: (data) => {
      console.log({data});
    },
  });
  return (
    <div 
    className="App"
    {...gestures()}
    >
      <header className="App-header">
        <p>
          Data is logged to console for every drag gesture (onDragEnd)
        </p>
      </header>
    </div>
  );
}

export default App;
