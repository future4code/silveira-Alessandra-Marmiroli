import React from "react";
import GlobalState from "./context/GlobalState";
import Router from './routes/Router';

function App() {
  return (
    <div>
      <GlobalState>
        <Router/>
      </GlobalState>
      
    </div>
  );
}

export default App

