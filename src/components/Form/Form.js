import React,{useRef} from "react";
import "./form.css";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const form = useRef();


  const sendEmail=(e)=>{

    e.preventDefault();
    emailjs.sendForm('service_2y1o83c', 'template_0922kgm', form.current, 'z1E0FQZQYA_3o3TSC')
    .then((result) => {
        alert("FORM SUBMITTED");
    }, (error) => {
        alert("ERROR OCCURED");
    });
    form.current.reset();
  }

  const notify = () => toast.success("Thank Your response has recorded");

  return (
    <div>
      <form className="form" ref={form} >
        <div className="input-group">
          <label htmlFor="name">Your Name:</label>
          <br />
          <input
            type="text"
            className="input-name"
            placeholder=" Eg : Siddharth Yadav"
            name = "user_name"
          ></input>
        </div>

        <div className="input-group">
          <label htmlFor="email">Your Email:</label>
          <br />
          <input
            type="email"
            className="input-email"
            placeholder=" Eg : siddharth@gmail.com"
            name="user_email"
          ></input>
        </div>

        <div className="input-group">
          <label htmlFor="subject">Your Subject:</label>
          <br />
          <input
            type="text"
            className="input-subject"
            placeholder="Eg : Type the subject"
            name="subject"
          ></input>
        </div>

        <div className="input-group">
          <label htmlFor="message">Your Message:</label>
          <br />
          <input
            type="text"
            className="input-message"
            placeholder="Eg : Type the Message"
            name='message'
          ></input>
        </div>
        <button className="submit-button" onClick={sendEmail}>Send Message</button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Form;
