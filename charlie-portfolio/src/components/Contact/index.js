import { React, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const refSubmit = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vf5sfdm",
        "Portfolio_email",
        refSubmit.current,
        "h403M-Ds404aJl0mu"
      )
      .then(
        () => {
          alert("Email Sent!");
          window.location.reload(false);
        },
        () => {
          alert("Email Failed to send!");
        }
      );
  };
  return (
    <section className="row">
      <div className="d-flex align-items-center  flex-column mt-5">
        <h1>Contact me</h1>
        <div className="contact">
          <form ref={refSubmit} onSubmit={sendEmail}>
            <ul>
              <li>
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Connect"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <button className="navItems shadow">Submit</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
