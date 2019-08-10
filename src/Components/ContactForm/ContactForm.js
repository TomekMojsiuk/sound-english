import React from "react";
import "./ContactForm.scss";
import $ from "jquery";

class ContactForm extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   recipient: "",
   name: "",
   surname: "",
   email: "",
   subject: "",
   message: "",
   error: {
    name: "",
    surname: "",
    email: "",
    message: ""
   }
  };
 }

 validateField = e => {
  // const input = e.target;
  const input = $(e.target.parent().find("input"));
  // const inputVal = e.target.value;
  // const inputName = e.target.name;
  const inputVal = input.value;
  const inputName = input.name;

  if (inputVal === "") {
   this.setState({
    error: {
     [inputName]: "To pole nie może być puste."
    }
   });
  } else {
   this.setState({
    error: {
     [inputName]: ""
    }
   });
  }

  const errorMsg = this.state.error[inputName];

  const showError = $(".error__msg[name=" + inputName + "]");

  showError.html(errorMsg);

  console.log(this.state.error[inputName], showError);
 };

 onChangeBehavior = e => {
  const inputName = e.target.name;

  this.setState({
   [inputName]: e.target.value
  });

  e.target.value.length !== 0
   ? $(e.target)
      .parent()
      .find("p")
      .addClass("input__text--added")
      .removeClass("input__text--removed")
   : $(e.target)
      .parent()
      .find("p")
      .addClass("input__text--removed")
      .removeClass("input__text--added");

  console.log(
   e.target.name,
   this.state[inputName].length,
   this.state[inputName],
   this.state.error[inputName]
  );
 };

 handleSubmit = e => {
  e.preventDefault();
  this.validateField(e);
  console.log("Form submitted");
 };

 render() {
  const { errorname, errorsurname, erroremail, errormessage } = this.state;

  return (
    <form onSubmit={this.handleSubmit}>
     <h2>
      <span>S</span>ound <span>E</span>nglish
     </h2>
     <label>
      {/* <p>Temat</p> */}
      <select onChange={this.onChangeBehavior} type='text' name='subject'>
       <option defaultValue value='empty'>
        Wybierz temat
       </option>
       <option value='Zapytanie ogólne'>Mam pytanie ogólne</option>
       <option value='Zapisy na zajęcia'>Chcę zapisać się na zajęcia</option>
       <option value='Odwołanie zajęć'>Chcę odwołać zajęcia</option>
       <option value='Copywriting'>Copywriting</option>
       <option value='Studio'>Nagrania, wynajęcie studio</option>
      </select>
     </label>
     <div name='name' className='error__msg' />
     <label>
      <p>Imię</p>
      <input onChange={this.onChangeBehavior} type='text' name='name' />
      {console.log(this.state.name, this.state.name.length)}
     </label>
     <div name='surname' className='error__msg' />
     <label>
      <p>Nazwisko</p>
      <input onChange={this.onChangeBehavior} type='text' name='surname' />
     </label>
     <div name='email' className='error__msg' />
     <label>
      <p>E-mail</p>
      <input onChange={this.onChangeBehavior} type='email' name='email' />
     </label>
     <div name='message' className='error__msg' />
     <label>
      <p>Twoja wiadomość</p>
      <textarea onChange={this.onChangeBehavior} type='text' name='message' />
     </label>
     <button
      className='btn__submit'
      type='submit'
      name='submit'
      onClick={this.handleSubmit}
     >
      Wyślij wiadomość
     </button>
    </form>
  );
 }
}

export default ContactForm;
