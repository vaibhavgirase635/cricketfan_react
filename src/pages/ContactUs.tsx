import React, { useState } from "react";
import { motion } from "framer-motion";
import LegalPageLayout from '../components/LegalPageLayout';

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message cannot be empty.";
    if (form.phone && !/^\+?[0-9\- ]{7,20}$/.test(form.phone)) e.phone = "Enter a valid phone number.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setStatus("sending");
    setServerMessage("");

    try {
      const resp = await fetch("https://api.cricketfanapp.com/api/reports/contact", {
        method: "POST",
        headers: {"x-api-key": "cricketfanapp_secret_key_2024", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!resp.ok) {
        const json = await resp.json().catch(() => ({}));
        // console.log(json);
        setStatus("error");
        setServerMessage(json?.message || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setServerMessage("Thanks! Your message has been sent.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setServerMessage("Network error. Please check your connection and try again.");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }
  return (
    <LegalPageLayout
      title="Contact Us"
      subtitle="Have a question, feedback or want to work together? Send us a message and we'll get back to you within 1-2 business days."
      lastUpdated=""
    >
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Left: contact info */}
          <div className="flex flex-col justify-between">
            <div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:hello@example.com" className="text-sm text-blue-600">support@cricketfanapp.com</a>
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:+911234567890" className="text-sm text-blue-600">+918595875410</a>
                </div>

              </div>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <p>Or reach out on social media:</p>
              <div className="flex gap-3 mt-3">
                <a href="https://x.com/cricketfanapp" aria-label="Twitter" className="underline">Twitter</a>
                <a href="https://www.instagram.com/cricketfanapp/" aria-label="Instagram" className="underline">Instagram</a>
                <a href="https://www.tiktok.com/@cricketfanapp" aria-label="Facebook" className="underline">Tiktok</a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium">Name <span className="text-red-500">*</span></span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`mt-1 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-1 ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                  placeholder="Your full name"
                />
                {errors.name && <span id="name-error" className="text-xs text-red-600 mt-1">{errors.name}</span>}
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium">Email <span className="text-red-500">*</span></span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`mt-1 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-1 ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                  placeholder="you@company.com"
                />
                {errors.email && <span id="email-error" className="text-xs text-red-600 mt-1">{errors.email}</span>}
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium">Phone</span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={`mt-1 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-1 ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
                  placeholder="Optional"
                />
                {errors.phone && <span id="phone-error" className="text-xs text-red-600 mt-1">{errors.phone}</span>}
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium">Subject</span>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1"
                  placeholder="Short summary"
                />
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-sm font-medium">Message <span className="text-red-500">*</span></span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`mt-1 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-1 ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
                placeholder="Tell us a bit more about your request."
              />
              {errors.message && <span id="message-error" className="text-xs text-red-600 mt-1">{errors.message}</span>}
            </label>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-blue-600 text-white font-medium disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              <button
                type="button"
                onClick={() => { setForm({ name: "", email: "", phone: "", subject: "", message: "" }); setErrors({}); setStatus("idle"); setServerMessage(""); }}
                className="px-4 py-2 rounded-lg border bg-white"
              >
                Reset
              </button>
            </div>

            {status === "success" && (
              <div role="status" className="text-sm text-green-700">{serverMessage}</div>
            )}
            {status === "error" && (
              <div role="alert" className="text-sm text-red-700">{serverMessage}</div>
            )}

            <p className="text-xs text-gray-400">By sending this message you agree to our <a href="/privacy" className="underline">privacy policy</a>.</p>
          </form>
        </motion.div>
      </div>
      
    </LegalPageLayout>
  )
}
