import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xrbaeage"); // replace with your Formspree form ID

  if (state.succeeded) {
    return <p className="container">Thanks! Your message was sent.</p>;
  }

  return (
    <section className="container">
      <h1 className="page-title">Contact Me</h1>
      <br></br>

      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <div className="actions">
        <button type="submit" disabled={state.submitting} className="button primary">
          {state.submitting ? "Sending…" : "Send Message"}
        </button>
        </div>
      </form>
    </section>
  );
}
