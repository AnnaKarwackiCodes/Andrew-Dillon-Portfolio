import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Navigator from "./Features/Navigator";
import { Document, Page, pdfjs } from "react-pdf";

function App() {

  return (
    <div>
      <Navigator />
    </div>
  );
}

export default App;
