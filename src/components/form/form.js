import React from "react";
import InputTel from "../inputTel/inputTel";
import btnStyle from "./Button.module.css"
import baseStyle from "./Base.module.css"
import InputName from "../inputName/inputName.js"

class Form extends React.Component {
  state = {};
  render() {
    return (
      <div className={baseStyle.container}>
       <InputName/>
<InputTel />
        <button type="submit" className={btnStyle.btn}>Add contact</button>
      </div>
    );
  }
}
export default Form;
