"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();
    setLoading(false);

    if (result.success) {
      setStatus("✅ Message sent successfully!");
      form.reset();
    } else {
      setStatus("❌ Failed to send message. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 max-w-2xl mx-auto space-y-6">
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        className="w-full p-4 border rounded-lg bg-neutral-900 text-white"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        className="w-full p-4 border rounded-lg bg-neutral-900 text-white"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        className="w-full p-4 border rounded-lg bg-neutral-900 text-white"
        required
      ></textarea>
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
      {status && <p className="text-center mt-2">{status}</p>}
    </form>
  );
}
