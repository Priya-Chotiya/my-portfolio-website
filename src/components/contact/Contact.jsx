import React,  { useRef }  from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp} from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const Contact = () => {
  const form = useRef();

  const [isLoading , setIsLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.sendForm('service_kftr6vt', 'template_kkd1mxy', form.current, 'kQ1T4ZOXe_WDMlLL7')
      .then((result) => {
    setIsLoading(false);

        toast('🦄 Happy To Connect , Thank You! , We will get back to you !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }, (error) => {
          setIsLoading(false);
          console.log(error.text);
      });

      e.target.reset()
  };


 

  return (
    <>
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h3>Email</h3>
            <h4>chotiyapriya@gmail.com</h4>
            <a href="mailto:chotiyapriya@gmail.com">Send a message</a>
          </article>
         
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h3>WhatsApp</h3>
            <h4>+91-8401953865</h4>
            <a href="https://api.whatsapp.com/send?phone=919537105004" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} className="align-items-center" onSubmit={sendEmail}> 
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            
          {isLoading && (
            <i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            />
          )} {!isLoading && 'Send Message'} {isLoading && 'Sending Message...'}</button>

          </form>
      </div>
    </section>
    <ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
    </>
  );
};

export default Contact;
