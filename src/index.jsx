import React from "react";
import { createRoot } from 'react-dom/client';
import square from "./modules/square";

function App() {
  return <h1>2 * 2 = {square(2)}</h1>;
}

document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById('app'));
root.render(<App />);
