"use client";

import { useState, type FormEvent } from "react";
import { landing } from "@/content/landing";

type ContactFormProps = {
  variant?: "dark" | "light";
  centered?: boolean;
};

export function ContactForm({
  variant = "dark",
  centered = false,
}: ContactFormProps) {
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
          variant === "dark" ? "text-mesocore-pearl" : "text-mesocore-gray-900"
        } ${centered ? "mx-auto text-center" : ""}`}
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

  const formLayout = centered
    ? "mx-auto flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:items-stretch sm:justify-center"
    : "flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-stretch";

  const inputRadius = centered
    ? "rounded-t-md rounded-b-none sm:rounded-s-md sm:rounded-e-none sm:rounded-t-none"
    : "rounded-none";

  const buttonRadius = centered
    ? "rounded-b-md rounded-t-none sm:rounded-e-md sm:rounded-s-none sm:rounded-b-none"
    : "rounded-none";

  return (
    <form onSubmit={handleSubmit} className={formLayout} noValidate>
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
        className={`min-h-12 flex-1 px-4 text-sm outline-none focus:ring-2 focus:ring-copper ${inputRadius} ${inputBg}`}
      />
      <button
        type="submit"
        aria-label={cta}
        className={`min-h-12 shrink-0 bg-copper px-6 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-copper-dark focus:ring-2 focus:ring-copper focus:ring-offset-2 focus:outline-none ${buttonRadius}`}
      >
        {cta}
      </button>
    </form>
  );
}
