"use client";

import { useState } from "react";
import { TextField } from "@/components/booking/fields";
import { buttonClass } from "@/components/ui";

type Errors = Partial<Record<"business" | "contact" | "mobile", string>>;

/** Demo partner enquiry: validates and shows success, sends nothing. */
export function PartnerForm() {
  const [values, setValues] = useState({ business: "", kind: "Catering", contact: "", mobile: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div role="status" className="rounded-2xl border-2 border-espresso bg-booth-yellow p-6">
        <p className="font-display text-2xl font-semibold">Enquiry sent</p>
        <p className="mt-2 text-lg">Thanks, {values.contact.split(" ")[0]}. We&apos;ll be in touch about working together.</p>
      </div>
    );
  }

  const set = (k: keyof typeof values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  return (
    <form
      noValidate
      className="grid gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        const found: Errors = {};
        if (!values.business.trim()) found.business = "Enter your business name.";
        if (!values.contact.trim()) found.contact = "Enter your name.";
        if (!/^(\+?63|0)9\d{9}$/.test(values.mobile.replace(/[\s-]/g, "")))
          found.mobile = "Use a PH mobile number, like 0917 123 4567.";
        setErrors(found);
        const first = Object.keys(found)[0];
        if (first) document.getElementById(`partner-${first}`)?.focus();
        else setSent(true);
      }}
    >
      <TextField id="partner-business" label="Business name" value={values.business} onChange={set("business")} error={errors.business} />
      <div>
        <label htmlFor="partner-kind" className="font-semibold">
          What you do
        </label>
        <select
          id="partner-kind"
          value={values.kind}
          onChange={set("kind")}
          className="mt-2 block min-h-12 w-full rounded-xl border-2 border-espresso bg-paper px-3 text-lg"
        >
          <option>Catering</option>
          <option>Event styling</option>
          <option>Event coordination</option>
          <option>Venue</option>
          <option>Other</option>
        </select>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id="partner-contact" label="Your name" autoComplete="name" value={values.contact} onChange={set("contact")} error={errors.contact} />
        <TextField
          id="partner-mobile"
          label="Mobile number"
          type="tel"
          autoComplete="tel"
          value={values.mobile}
          onChange={set("mobile")}
          error={errors.mobile}
        />
      </div>
      <div>
        <label htmlFor="partner-message" className="font-semibold">
          Message <span className="font-normal text-espresso-soft">(optional)</span>
        </label>
        <textarea
          id="partner-message"
          rows={4}
          value={values.message}
          onChange={set("message")}
          className="mt-2 block w-full rounded-xl border-2 border-espresso px-3 py-2 text-lg"
        />
      </div>
      <button type="submit" className={buttonClass("primary", "justify-self-start")}>
        Send partner enquiry
      </button>
    </form>
  );
}
