"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { programs, services } from "@/content/services";
import { plans, site } from "@/content/site";
import { buttonClass } from "./ui";

/*
  Booking form from the Figma "Reserve Your Appointment" / Contact form.
  There is no server yet, so submitting opens the visitor's email app with
  the details filled in, addressed to Dr. Singh.
  TODO: replace with a real booking backend (database, email or WhatsApp API).
*/

const NOT_SURE = "Not sure, help me choose";
const planOptions = plans.map((p) => `${p.name} (${p.price})`);
const options = [...services.map((s) => s.title), ...programs, ...planOptions];

const field =
  "mt-2 w-full rounded-lg border border-cream/30 bg-white px-4 py-3 text-base text-ink placeholder:text-ink/70 focus:border-sky focus:outline-2 focus:outline-sky";
const labelCls = "text-base font-semibold text-white lg:text-[22px]";

export default function BookingForm({ defaultService = "" }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);
  // Pre-select a plan when arriving from a "Book Now" button (e.g. /contact?plan=Personal%20Report)
  // ?service=<slug>&topic=<id> comes from a topic card's "Book this topic"; ?plan wins if both are present
  const params = useSearchParams();
  const plan = params.get("plan");
  const fromPlan = plan ? options.find((o) => o.startsWith(plan)) : undefined;
  const fromService = fromPlan ? undefined : services.find((s) => s.slug === params.get("service"));
  const [service, setService] = useState(fromPlan ?? fromService?.title ?? defaultService);
  const [topic, setTopic] = useState(fromService?.topics.find((t) => t.id === params.get("topic"))?.title ?? "");
  const topics = services.find((s) => s.title === service)?.topics;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Name: ${d.get("firstName")} ${d.get("lastName")}`,
      `Phone: ${d.get("phone")}`,
      `Email: ${d.get("email")}`,
      `Service: ${d.get("service")}`,
      ...(d.has("topic") ? [`Topic: ${d.get("topic") || NOT_SURE}`] : []),
    ].join("\n");
    const subject = `Consultation request: ${d.get("service")}`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-7">
      <label className="block">
        <span className={labelCls}>First Name</span>
        <input name="firstName" required autoComplete="given-name" className={field} />
      </label>
      <label className="block">
        <span className={labelCls}>Last Name</span>
        <input name="lastName" required autoComplete="family-name" className={field} />
      </label>
      <label className="block">
        <span className={labelCls}>Phone</span>
        <input name="phone" type="tel" required autoComplete="tel" className={field} />
      </label>
      <label className="block">
        <span className={labelCls}>Email</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block sm:col-span-2">
        <span className={labelCls}>Choose Service</span>
        <select
          name="service"
          required
          value={service}
          onChange={(e) => {
            setService(e.target.value);
            setTopic("");
          }}
          className={`${field} cursor-pointer`}
        >
          <option value="" disabled>
            Select a service
          </option>
          <optgroup label="Services">
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </optgroup>
          <optgroup label="Consultation programs">
            {programs.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </optgroup>
          <optgroup label="Plans">
            {planOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </optgroup>
        </select>
      </label>
      {topics && (
        <label className="block sm:col-span-2">
          <span className={labelCls}>Choose Topic</span>
          <select name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} className={`${field} cursor-pointer`}>
            <option value="">{NOT_SURE}</option>
            {topics.map((t) => (
              <option key={t.id} value={t.title}>
                {t.title}
              </option>
            ))}
          </select>
        </label>
      )}
      <div className="flex flex-wrap items-center justify-end gap-4 sm:col-span-2">
        {sent && (
          <p role="status" className="text-base text-sky-soft">
            Your email app should open with your request ready to send.
          </p>
        )}
        <button type="submit" className={buttonClass("filled")}>
          Submit
        </button>
      </div>
    </form>
  );
}
