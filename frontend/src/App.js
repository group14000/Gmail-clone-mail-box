import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import EmailList from "./EmailList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
        <EmailList />
      </div>
    </div>
  );
}

export default App;
