import React from "react";
import Form from "./components/form/form";
import { nanoid } from "nanoid";
import "./App.css";

class App extends React.Component {
  state = {
    contacts: [],
    name: "",
  };
  render() {
    const newId = nanoid();
    console.log("newId=", newId);
    return (
      <>
        <Form />
      </>
    );
  }
}

export default App;
