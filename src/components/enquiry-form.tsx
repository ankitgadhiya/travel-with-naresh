"use client";

import { FormEvent, useMemo, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

const enquiryTypes = [
  "Visa Consultancy",
  "Plan an International Holiday",
  "Europe Holiday",
  "Customize a Sample Itinerary",
  "Group Tour",
  "Flights & Hotels",
  "Personal Travel Consultation",
  "Other",
];

function value(form: FormData, key: string) {
  return String(form.get(key) ?? "").trim();
}

export function EnquiryForm() {
  const [type, setType] = useState(enquiryTypes[0]);
  const visaFlow = type === "Visa Consultancy";
  const subject = useMemo(() => `Travel enquiry: ${type}`, [type]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const details = visaFlow
      ? [
          ["Country", value(data, "country")],
          ["Visa type", value(data, "visaType")],
          ["Nationality", value(data, "nationality")],
          ["Applicants", value(data, "applicants")],
          ["Tentative date", value(data, "date")],
          ["Previous refusal", value(data, "refusal")],
        ]
      : [
          ["Destination", value(data, "destination")],
          ["Departure city", value(data, "departure")],
          ["Tentative dates", value(data, "date")],
          ["Travellers", `${value(data, "adults")} adult(s), ${value(data, "children") || "0"} child(ren)`],
          ["Approx. budget", value(data, "budget")],
          ["Travel type", value(data, "travelType")],
        ];

    const lines = [
      "Hello Mr. Gadhiya, I found you through your website.",
      "",
      `Enquiry: ${type}`,
      `Name: ${value(data, "name")}`,
      ...details.filter(([, item]) => item).map(([label, item]) => `${label}: ${item}`),
      `Current city: ${value(data, "city")}`,
      `Preferred contact time: ${value(data, "contactTime") || "Any suitable time"}`,
      `Message: ${value(data, "message") || "Please contact me to discuss."}`,
    ];
    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="field"><label htmlFor="name">Your full name</label><input id="name" name="name" autoComplete="name" required /></div>
      <div className="field"><label htmlFor="city">Current city</label><input id="city" name="city" autoComplete="address-level2" required /></div>
      <div className="field full">
        <label htmlFor="enquiryType">How can I help you?</label>
        <select id="enquiryType" value={type} onChange={(event) => setType(event.target.value)}>
          {enquiryTypes.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>
      {visaFlow ? (
        <>
          <div className="field"><label htmlFor="country">Country</label><input id="country" name="country" required /></div>
          <div className="field"><label htmlFor="visaType">Visa type</label><input id="visaType" name="visaType" placeholder="Tourist, business, family…" /></div>
          <div className="field"><label htmlFor="nationality">Nationality</label><input id="nationality" name="nationality" required /></div>
          <div className="field"><label htmlFor="applicants">Number of applicants</label><input id="applicants" name="applicants" type="number" min="1" defaultValue="1" /></div>
          <div className="field"><label htmlFor="refusal">Previous refusal</label><select id="refusal" name="refusal"><option>No</option><option>Yes</option></select></div>
        </>
      ) : (
        <>
          <div className="field"><label htmlFor="destination">Destination</label><input id="destination" name="destination" required /></div>
          <div className="field"><label htmlFor="departure">Departure city</label><input id="departure" name="departure" /></div>
          <div className="field"><label htmlFor="adults">Adults</label><input id="adults" name="adults" type="number" min="1" defaultValue="2" /></div>
          <div className="field"><label htmlFor="children">Children</label><input id="children" name="children" type="number" min="0" defaultValue="0" /></div>
          <div className="field"><label htmlFor="budget">Approximate budget</label><input id="budget" name="budget" placeholder="₹ or range" /></div>
          <div className="field"><label htmlFor="travelType">Travel type</label><select id="travelType" name="travelType">{["Family", "Couple", "Honeymoon", "Friends", "Group", "Senior Citizens", "Luxury", "Special Interest", "Not Sure – Need Naresh's Advice"].map((item) => <option key={item}>{item}</option>)}</select></div>
        </>
      )}
      <div className="field"><label htmlFor="date">Tentative travel date(s)</label><input id="date" name="date" placeholder="Month or dates" /></div>
      <div className="field"><label htmlFor="contactTime">Preferred contact time</label><input id="contactTime" name="contactTime" placeholder="For example, after 6 PM" /></div>
      <div className="field full"><label htmlFor="message">Special requirements / message</label><textarea id="message" name="message" rows={4} /></div>
      <div className="form-actions full">
        <button className="button button-gold" type="submit"><MessageCircle size={18} /> Send via WhatsApp</button>
        <a className="button button-outline" href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}`}><Mail size={18} /> Send by email</a>
      </div>
      <p className="form-note full">Submitting opens WhatsApp with your details. Nothing is stored by this form.</p>
    </form>
  );
}
