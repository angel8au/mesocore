"use client";

import { useState, type FormEvent } from "react";
import { landing } from "@/content/landing";

type ContactFormProps = {
  variant?: "dark" | "light";
};

export function ContactForm({ variant = "dark" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const { cta, emailPlaceholder, successMessage } = landing.hero;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p
        className={`text-sm md:text-base ${
          variant === "dark" ? "text-white/90" : "text-mesocore-gray-900"
        }`}
        role="status"
      >
        {successMessage}
      </p>
    );
  }

  const inputBg =
    variant === "dark"
      ? "bg-white text-mesocore-gray-900 placeholder:text-mesocore-gray-500"
      : "bg-white text-mesocore-gray-900 placeholder:text-mesocore-gray-500 border border-mesocore-gray-100";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
      noValidate
    >
      <label htmlFor="contact-email" className="sr-only">
        Correo electrónico
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder={emailPlaceholder}
        className={`min-h-12 flex-1 rounded-none px-4 text-sm outline-none focus:ring-2 focus:ring-copper ${inputBg}`}
      />
      <button
        type="submit"
        aria-label={cta}
        className="min-h-12 shrink-0 bg-copper px-6 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-copper-dark focus:ring-2 focus:ring-copper focus:ring-offset-2 focus:outline-none"
      >
        {cta}
      </button>
    </form>
  );
}
