import "./contact.scss"
import { useState } from "react"

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className='contact' id="contact">
        <div className="left">
            <img src="assests/shake.svg" alt="shake" />
        </div>

        <div className="right">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" />
                <textarea placeholder="Message" ></textarea>
                <button type="submit">Send</button>
            </form>
            {message && <span>Thanks, I'll reply as soon as possible :)</span>}
        </div>
    </div>
  )
}
