import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import EmailList from "./EmailList";
import Compose from "./Compose";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
        <EmailList />
        <Compose/>
      </div>
    </div>
  );
}

export default App;
