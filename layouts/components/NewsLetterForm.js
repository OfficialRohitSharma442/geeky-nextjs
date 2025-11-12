import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

function CustomForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // "idle" | "sending" | "success" | "error"
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setEmail("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || email.indexOf("@") === -1) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setMessage("");

    // Simulate an API call
    setTimeout(() => {
      // Example success simulation (you can replace with real API)
      if (email === "test@example.com") {
        setStatus("error");
        setMessage("This email is already subscribed.");
      } else {
        setStatus("success");
        setMessage("Subscribed successfully!");
        resetForm();
      }
    }, 1200);
  };

  return (
    <>
      <form action="#" className="py-6" onSubmit={handleSubmit}>
        <fieldset className="relative">
          <input
            className="newsletter-input form-input h-12 w-full rounded-3xl border-none bg-theme-light px-5 py-3 pr-12 text-dark placeholder:text-xs dark:bg-darkmode-theme-dark"
            type="text"
            placeholder="Type and hit enter"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaEnvelope className="absolute top-1/2 right-5 -translate-y-1/2 text-xl transition duration-75" />
        </fieldset>
        <button className="d-block btn btn-primary mt-4 w-full" type="submit">
          Sign In
        </button>
      </form>

      {status === "sending" && (
        <div className="mt-4 text-primary">Sending...</div>
      )}
      {status === "error" && (
        <div className="mt-4 text-red-700">{message}</div>
      )}
      {status === "success" && (
        <div className="mt-4 text-green-700">{message}</div>
      )}
    </>
  );
}

export default CustomForm;
