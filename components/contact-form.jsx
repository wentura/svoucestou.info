"use client";

import { useState } from "react";
import { INTEREST_OPTIONS } from "@/lib/contact-interest";
import { SITE } from "@/lib/site-config";
import Link from "next/link";
import TurnstileWidget from "./turnstile-widget";

export default function ContactForm() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [childAge, setChildAge] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          childAge,
          interest,
          message,
          website,
          turnstileToken,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg(data.error || "Odeslání se nepovedlo.");
        setStatus("idle");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setChildAge("");
      setInterest("");
      setMessage("");
      setWebsite("");
      setTurnstileToken("");
    } catch {
      setErrorMsg("Chyba spojení. Zkuste to znovu.");
      setStatus("idle");
    }
  }

  return (
    <div id="dotaz" className="scroll-mt-28">
      <h2 className="textNadpis text-3xl mb-2">Napište nám</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Zpráva se odešle přímo z webu. Odpovídáme obvykle do několika pracovních
        dnů; naléhavě volejte{" "}
        <a href={`tel:${SITE.contactPhoneHref}`} className="text-monte-100 underline">
          {SITE.contactPhoneDisplay}
        </a>
        . Odesláním souhlasíte se zpracováním dle{" "}
        <Link href="/ochrana-soukromi" className="text-monte-100 underline">
          ochrany soukromí
        </Link>
        .
      </p>
      {status === "success" && (
        <p className="mb-4 rounded-md bg-monte-150/50 px-4 py-3 text-gray-800">
          Děkujeme, zpráva byla odeslána. Brzy se vám ozveme.
        </p>
      )}
      {errorMsg && (
        <p className="mb-4 rounded-md bg-red-50 px-4 py-3 text-red-800" role="alert">
          {errorMsg}
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-lg"
      >
        <label className="sr-only" aria-hidden="true">
          Web
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-800">Jméno</span>
          <input
            required
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === "loading"}
            className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-monte-100 focus:outline-none focus:ring-1 focus:ring-monte-100 disabled:opacity-60"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-800">Váš e-mail</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-monte-100 focus:outline-none focus:ring-1 focus:ring-monte-100 disabled:opacity-60"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-800">
            Věk dítěte nebo ročník
          </span>
          <input
            type="text"
            name="childAge"
            placeholder="např. 4 roky / 2. třída"
            value={childAge}
            onChange={(e) => setChildAge(e.target.value)}
            disabled={status === "loading"}
            className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-monte-100 focus:outline-none focus:ring-1 focus:ring-monte-100 disabled:opacity-60"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-800">
            Školka nebo škola?
          </span>
          <select
            required
            name="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            disabled={status === "loading"}
            className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-monte-100 focus:outline-none focus:ring-1 focus:ring-monte-100 bg-white disabled:opacity-60"
          >
            {INTEREST_OPTIONS.map((o) => (
              <option key={o.value || "empty"} value={o.value} disabled={o.value === ""}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-800">Zpráva</span>
          <textarea
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={status === "loading"}
            placeholder="Krátce napište, co potřebujete vědět nebo proč nás kontaktujete."
            className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-monte-100 focus:outline-none focus:ring-1 focus:ring-monte-100 disabled:opacity-60"
          />
        </label>
        <div className="flex flex-col gap-1">
          {turnstileSiteKey ? (
            <TurnstileWidget
              siteKey={turnstileSiteKey}
              onVerify={setTurnstileToken}
              onExpire={() => setTurnstileToken("")}
            />
          ) : null}
        </div>
        <button
          type="submit"
          disabled={status === "loading" || (Boolean(turnstileSiteKey) && !turnstileToken)}
          className="mt-2 px-6 py-3 rounded-md bg-monte-100 text-white font-semibold shadow-md hover:opacity-95 transition-opacity w-fit disabled:opacity-60"
        >
          {status === "loading" ? "Odesílám…" : "Odeslat"}
        </button>
      </form>
    </div>
  );
}
