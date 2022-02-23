import React from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Form from "./components/form/form";
import FindComponent from "./components/findComponent/findComponent";

class App extends React.Component {
  state = {
      contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
      name: '',
      number: '',
      filter: ''
  };
  render() {
    // const newId = nanoid();
   // console.log("newId=", newId);
    return (
      <>
      <FindComponent />
        <Form />
      </>
    );
  }
}

export default App;
