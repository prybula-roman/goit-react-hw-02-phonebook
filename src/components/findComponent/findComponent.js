import React from "react";
import baseStyle from "./Base.module.css"
class FindComponent extends React.Component{
    state={}

    render(){
        return(
            <div className={baseStyle.container}>
<h2>Contacts</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
</div>
        )
    }
}
export default FindComponent