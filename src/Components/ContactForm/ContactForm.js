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
   errors: {
    subject: "Wybierz temat",
    name: "",
    surname: "",
    email: "",
    message: ""
   }
  };
 }

 validateField = e => {
  const subject = $(e.target.parent().find("input[name=subject]"));
  const name = $(e.target.parent().find("input[name=name]"));
  const surname = $(e.target.parent().find("input[name=surname]"));
  const email = $(e.target.parent().find("input[name=email]"));
  const message = $(e.target.parent().find("input[name=message]"));
  const input = $(e.target.parent().find("input"));

  const inputVal = input.value;
  const inputName = input.name;

  if (
   subject.length ||
   name.length ||
   surname.length ||
   email.length ||
   message.length <= 1
  ) {
  }

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
  //   Grab input value
  const input = e.target;
  const { name, value } = e.target;

  this.setState({
   [name]: value
  });

  value.length !== 0
   ? $(input)
      .parent()
      .find("p")
      .addClass("input__text--added")
      .removeClass("input__text--removed")
   : $(input)
      .parent()
      .find("p")
      .addClass("input__text--removed")
      .removeClass("input__text--added");

  console.log(
   name,
   this.state[name].length,
   this.state[name],
   this.state.errors[name]
  );

  //   Validate fields
  const { errors } = this.state;
  const validEmailRegex = RegExp(
   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  switch (name) {
   case "subject":
    errors.subject = value === "empty" ? "Wybierz odpowiedni temat" : "";
    break;
   case "name":
    errors.name = value.length <= 1 ? "Wpisz poprawne imię" : "";
    break;
   case "surname":
    errors.surname = value.length <= 1 ? "Wpisz poprawne nazwisko" : "";
    break;
   case "email":
    errors.email = validEmailRegex.test(value)
     ? ""
     : "Wpisz poprawny adres email";
    break;
   case "message":
    errors.message =
     value.length <= 1 ? "Nie możesz wysłać pustej wiadomości" : "";
    break;
   default:
    break;
  }

  // Update state with errors
  this.setState({ errors, [name]: value });
 };

 handleSubmit = e => {
  e.preventDefault();

  const validateForm = errors => {
   let valid = true;
   Object.values(errors).forEach(
    // if we have an error string set valid to false
    val => val.length > 0 && (valid = false)
   );
   return valid;
  };

  if (validateForm(this.state.errors)) {
   console.info("Valid Form");
   console.log("Form submitted");
  } else {
   console.error("Invalid Form");
   console.log("Form not submitted");
  }
 };

 render() {
  const { subject, name, surname, email, message } = this.state.errors;
  return (
   <form onSubmit={this.handleSubmit}>
    <h2>
     <span>S</span>ound <span>E</span>nglish
    </h2>
    <div name='name' className='error__msg'>
     {subject}
    </div>
    <label>
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
    <div name='name' className='error__msg'>
     {name}
    </div>
    <label>
     <p>Imię</p>
     <input onChange={this.onChangeBehavior} type='text' name='name' />
     {console.log(this.state.name, this.state.name.length)}
    </label>
    <div name='surname' className='error__msg'>
     {surname}
    </div>
    <label>
     <p>Nazwisko</p>
     <input onChange={this.onChangeBehavior} type='text' name='surname' />
    </label>
    <div name='email' className='error__msg'>
     {email}
    </div>
    <label>
     <p>E-mail</p>
     <input onChange={this.onChangeBehavior} type='email' name='email' />
    </label>
    <div name='message' className='error__msg'>
     {message}
    </div>
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
