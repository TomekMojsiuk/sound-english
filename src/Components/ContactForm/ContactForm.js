import React from "react";
import "./ContactForm.scss";
import * as emailjs from "emailjs-com";
import $ from "jquery";

class ContactForm extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   formSent: false,
   name: "",
   surname: "",
   email: "",
   phoneNumber: "",
   subject: "",
   message: "",
   errors: {
    errSubject: "Wybierz temat",
    errName: "",
    errSurname: "",
    errEmail: "",
    errPhoneNumber: "",
    errMessage: ""
   }
  };
 }

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

  //   Validate fields
  const { errors } = this.state;
  const validEmailRegex = RegExp(
   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  switch (name) {
   case "subject":
    errors.errSubject = value === "empty" ? "Wybierz odpowiedni temat" : "";
    break;
   case "name":
    errors.errName = value.length <= 1 ? "Wpisz poprawne imię" : "";
    break;
   case "surname":
    errors.errSurname = value.length <= 1 ? "Wpisz poprawne nazwisko" : "";
    break;
   case "email":
    errors.errEmail = validEmailRegex.test(value)
     ? ""
     : "Wpisz poprawny adres email";
    break;
   case "phoneNumber":
    errors.errPhoneNumber =
     value.length <= 0
      ? ""
      : (errors.errPhoneNumber =
         isNaN(value) || value.length < 9 || value.length > 9
          ? "Wpisz poprawny numer"
          : "");
    break;
   case "message":
    errors.errMessage =
     value.length <= 1 ? "Nie możesz wysłać pustej wiadomości" : "";
    break;
   default:
    break;
  }
  // Update state with errors
  this.setState({ errors, [name]: value });
 }

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
   const { subject, name, surname, email, phoneNumber, message } = this.state;
   console.info("Valid Form");
   console.log("Form submitted");

   let tmeplateParams = {
    from_name: subject + " od: " + name + " " + surname + " (" + email + ") przez formularz www SE",
    to_name: "Bartek",
    message_html: subject + ":" + "<br>" + message,
    reply_to: name + " " + surname + "<br>" + email + "<br>" + phoneNumber
   };

   emailjs
    .send(
     "gmail",
     "template_quJaKsaU",
     tmeplateParams,
     "user_2vc8gy0BAJr6Mjy0ZkG7D"
    )
    .then(
     res => {
      toString(res);
      console.log("Success!", res.status, res.text);

      this.setState({
       formSent: true
      });

      setTimeout(() => {
       this.setState({
        subject: "Wybierz temat",
        name: "",
        surname: "",
        email: "",
        phoneNumber: "",
        message: "",
        formSent: false
       });
      }, 9000);
     },
     err => {
      toString(err);
      console.log(err);
     }
    );
  } else {
   console.error("Invalid Form");
   console.log("Form not submitted");
   this.setState({
    formSent: "error"
   });
   setTimeout(() => {
    this.setState({
     subject: "Wybierz temat",
     name: "",
     surname: "",
     email: "",
     phoneNumber: "",
     message: "",
     formSent: false
    });
   }, 9000);
  }
 };

 render() {
  const {
   errSubject,
   errName,
   errSurname,
   errEmail,
   errPhoneNumber,
   errMessage
  } = this.state.errors;
  const { subject, name, surname, email, phoneNumber, message } = this.state;
  return (
   <form onSubmit={this.handleSubmit}>
    <h2>
     <span className='initial'>S</span>ound <span>E</span>nglish
    </h2>
    <p>Masz pytanie? Napisz do nas</p>
    <div name='name' className='error__msg'>
     {errSubject}
    </div>
    <label>
     <select
      onChange={this.onChangeBehavior}
      type='text'
      name='subject'
      value={subject}
     >
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
     {errName}
    </div>
    <label>
     <p>Imię</p>
     <input
      onChange={this.onChangeBehavior}
      type='text'
      name='name'
      value={name}
     />
    </label>
    <div name='surname' className='error__msg'>
     {errSurname}
    </div>
    <label>
     <p>Nazwisko</p>
     <input
      onChange={this.onChangeBehavior}
      type='text'
      name='surname'
      value={surname}
     />
    </label>
    <div name='email' className='error__msg'>
     {errEmail}
    </div>
    <label>
     <p>E-mail</p>
     <input
      onChange={this.onChangeBehavior}
      type='email'
      name='email'
      value={email}
     />
    </label>
    <div name='text' className='error__msg'>
     {errPhoneNumber}
    </div>
    <label>
     <p>Numer telefonu</p>
     <input
      onChange={this.onChangeBehavior}
      type='text'
      name='phoneNumber'
      value={phoneNumber}
     />
    </label>
    <div name='message' className='error__msg'>
     {errMessage}
    </div>
    <label className='textarea__label'>
     <p>Twoja wiadomość</p>
     <textarea
      onChange={this.onChangeBehavior}
      type='text'
      name='message'
      value={message}
     />
    </label>
    <button
     className='btn__submit'
     type='submit'
     name='submit'
     onClick={this.handleSubmit}
    >
     Wyślij wiadomość
    </button>

    {this.state.formSent ? (
     <div className='success__msg'>
      <div className='success__msg__content'>
       <h2>{name},</h2>
       <p>
        Dziękuję za kontakt. Najprawdopodobniej właśnie dostałem od Ciebie
        wiadomość. Zwykle odpowiadam w przeciągu kilku godzin, więc do
        usłyszenia.
       </p>
       <div className='signature'>
        <p>Pozdrawiam</p>
        <p>Bartłomiej Piwowarczyk</p>
        <p>
         <span className='initial'>S</span>ound <span>E</span>nglish School
        </p>
       </div>
      </div>
     </div>
    ) : (
     ""
    )}

    {this.state.formSent === "error" ? (
     <div className='success__msg'>
      <div className='success__msg__content'>
       <h2>Ups...</h2>
       <p>
        Wystąpił błąd i nie udało się wysłać formularza. Skontaktuj się ze mną
        telefonicznie, lub pod adresem email: soundenglishschool@gmail.com.
       </p>
       <p>Przepraszam Cię za utrudnienia.</p>
       <div className='signature'>
        <p>Pozdrawiam</p>
        <p>Bartłomiej Piwowarczyk</p>
        <p>
         <span className='initial'>S</span>ound <span>E</span>nglish School
        </p>
       </div>
      </div>
     </div>
    ) : (
     ""
    )}
   </form>
  );
 }
}

export default ContactForm;
