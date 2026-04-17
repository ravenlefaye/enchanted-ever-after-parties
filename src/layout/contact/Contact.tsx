import { useRef, useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import logo from './../../assets/imgs/eaelogo.png'
import './contact.css';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [response, setResponse] = useState<string>('');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(
      'service_fwnfnqe', 
      'template_km1d53w', 
      form.current,
      '13djBbWvcZ_ycviGD'
    )
    .then(() => {
      setResponse('sent');
      form.current?.reset(); // Use the ref to reset the form
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setResponse('error');
    });
  };

  return (
    <div className="layout">
      <div className="splits">
        <div className="logo">
          <img className="logo-img" src={logo} />
        </div>
        <div className="contact">
          <h2>Contact Us</h2>
          <article className='blurb'>
            {`Bringing color, sparkle, and a little magic to celebrations of all
            kinds. Enchanted Ever After Parties offers face painting, festival
            glitter, and creative event entertainment designed to make your
            gathering feel extra special. \n\n Have a party, community event, or
            special celebration coming up? I'd love to hear more. Reach out
            through Instagram or send an inquiry below.`}
          </article>

          <form
            className="contact-form"
            ref={form}
            id="form"
            onSubmit={sendEmail}
          >
            <div className="input-field">
              <label>name</label>
              <input type="text" name="name" id="name" />
            </div>

            <div className="input-field">
              <label>email</label>
              <input type="email" name="email" id="email" />
            </div>

            <div className="input-field">
              <label>message</label>
              <textarea name="message" id="message" rows={8} />
            </div>

            <input type="submit" id="button" value="Send" className="submit" />
          </form>

          {response === "sent" && (
            <p className="success">Message sent successfully!</p>
          )}
          {response === "error" && (
            <p className="error">Something went wrong. Please try again.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;