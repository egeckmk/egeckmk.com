import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  MapPinIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { client } from "../../utils/axios.js";
import "./style.css";

const Contact = () => {
  // Hooks definitions
  const navigate = useNavigate();

  // Local states definitions
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    client
      .post("/api/v1/contacts", {
        email,
        name,
        phone,
        subject,
        message,
      })
      .then(() => {
        toast.success(
          "Your message has been delivered.\nThank you for your interest."
        );
      })
      .catch((err) => {
        toast.error(
          err.message + "\n\nThere's been a problem. Please try again later."
        );
      });
  };
  return (
    <div className="contact-container">
      <div className="contact-left">
        <div className="contact-left-header">
          Your thoughts are very valuable to me.
        </div>
        <p>
          You can contact me via the contact form or my e-mail addresses and let
          me know your opinions. You can be sure that I will do my best to
          support your work within the subjects I am interested in.
        </p>
        <div>
          <div class="contact-left-info-container">
            <MapPinIcon className="contact-left-info-icon" />
            <div class="contact-left-info-text">
              <h5>İstanbul / Turkey</h5>
            </div>
          </div>
          <div class="contact-left-info-container">
            <EnvelopeIcon className="contact-left-info-icon" />
            <div class="contact-left-info-text">
              <h5>egeckmk@gmail.com</h5>
            </div>
          </div>
          <div class="contact-left-info-container">
            <DevicePhoneMobileIcon className="contact-left-info-icon" />
            <div class="contact-left-info-text">
              <h5>0 555 896 8719</h5>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex mb-4">
          <input
            type="text"
            className="border border-amber-400 outline-none w-full dark:bg-black px-2 py-1 rounded-lg"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex mb-4">
          <input
            type="text"
            className="border border-amber-400 outline-none w-full dark:bg-black px-2 py-1 rounded-lg"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex mb-4">
          <input
            type="text"
            className="border border-amber-400 outline-none w-full dark:bg-black px-2 py-1 rounded-lg"
            placeholder="Enter your phone (e.g. XXX XXX XX XX)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex mb-4">
          <input
            type="text"
            className="border border-amber-400 outline-none w-full dark:bg-black px-2 py-1 rounded-lg"
            placeholder="Enter your subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <textarea
            type="text"
            className="border border-amber-400 outline-none dark:bg-black px-2 py-1 w-full rounded-lg"
            placeholder="Enter your message"
            rows={7}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex justify-between items-center duration-700 hover:scale-105 bg-amber-400 rounded-lg text-base px-2 py-2 mb-3"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
