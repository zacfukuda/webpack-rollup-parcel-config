// Set 'allowSyntheticDefaultImports: true' in tsconfig.json
// if you want to use the syntax below
// import React from "react"

import * as React from "react";
import { createRoot } from "react-dom/client";
import square from "./modules/square";
import type { ReactElement } from "react";

function App(): ReactElement {
  return <h1>2 * 2 = {square(2)}</h1>;
}

document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById("app") as Element);
root.render(<App />);
