"use client";

import { useId, useState } from "react";

/** Demo lead capture: validates and shows success, sends nothing. */
export function NewsletterForm() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="mt-6 rounded-xl border-2 border-booth-yellow p-4" role="status">
        You&apos;re on the list. We&apos;ll email you when we run a promo.
      </p>
    );
  }

  return (
    <form
      className="mt-6 max-w-sm"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (!/^\S+@\S+\.\S+$/.test(email)) {
          setError("Enter an email like name@gmail.com.");
          return;
        }
        setDone(true);
      }}
    >
      <label htmlFor={id} className="font-semibold">
        Get promo alerts by email
      </label>
      <div className="mt-2 flex gap-2">
        <input
          id={id}
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-err` : undefined}
          className="min-h-12 w-full min-w-0 rounded-xl border-2 border-paper/60 bg-transparent px-3 text-paper placeholder:text-paper/50 focus:border-booth-yellow focus:outline-none"
          placeholder="you@email.com"
        />
        <button type="submit" className="min-h-12 shrink-0 rounded-xl bg-booth-yellow px-4 font-display font-semibold text-espresso">
          Sign up
        </button>
      </div>
      {error ? (
        <p id={`${id}-err`} className="mt-2 text-sm text-booth-yellow">
          {error}
        </p>
      ) : null}
    </form>
  );
}
