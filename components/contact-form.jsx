"use client";

import { useCallback, useEffect, useState } from "react";
import { INTEREST_OPTIONS } from "@/lib/contact-interest";
import { SITE } from "@/lib/site-config";
import Link from "next/link";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [childAge, setChildAge] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [antiSpamAnswer, setAntiSpamAnswer] = useState("");
  const [antiSpamPrompt, setAntiSpamPrompt] = useState("");
  const [antiSpamToken, setAntiSpamToken] = useState("");
  const [antiSpamLoading, setAntiSpamLoading] = useState(true);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const loadChallenge = useCallback(async (showError = true) => {
    setAntiSpamLoading(true);
    try {
      const res = await fetch("/api/contact/challenge", { cache: "no-store" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.prompt || !data?.token) {
        throw new Error("challenge_load_failed");
      }
      setAntiSpamPrompt(data.prompt);
      setAntiSpamToken(data.token);
      if (showError) {
        setErrorMsg("");
      }
    } catch {
      setAntiSpamPrompt("");
      setAntiSpamToken("");
      if (showError) {
        setErrorMsg("Bezpečnostní kontrolu se nepodařilo načíst. Obnovte prosím stránku.");
      }
    } finally {
      setAntiSpamLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadChallenge(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [loadChallenge]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!antiSpamToken) {
      setErrorMsg("Bezpečnostní kontrolu se nepodařilo načíst. Obnovte prosím stránku.");
      return;
    }
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
          antiSpamAnswer,
          antiSpamToken,
          website,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg(data.error || "Odeslání se nepovedlo.");
        if (res.status === 400) {
          setAntiSpamAnswer("");
          await loadChallenge(false);
        }
        setStatus("idle");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setChildAge("");
      setInterest("");
      setMessage("");
      setAntiSpamAnswer("");
      setWebsite("");
      await loadChallenge(false);
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
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-800">
            Bezpečnostní otázka:{" "}
            {antiSpamPrompt || (antiSpamLoading ? "načítám..." : "dočasně nedostupná")}
          </span>
          <input
            required
            type="text"
            name="antiSpamAnswer"
            inputMode="numeric"
            value={antiSpamAnswer}
            onChange={(e) => setAntiSpamAnswer(e.target.value)}
            disabled={status === "loading" || antiSpamLoading || !antiSpamToken}
            className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-monte-100 focus:outline-none focus:ring-1 focus:ring-monte-100 disabled:opacity-60"
          />
        </label>
        <button
          type="button"
          onClick={() => {
            setAntiSpamAnswer("");
            loadChallenge(true);
          }}
          disabled={status === "loading" || antiSpamLoading}
          className="w-fit text-sm text-monte-100 underline disabled:opacity-60"
        >
          Jiná otázka
        </button>
        <button
          type="submit"
          disabled={status === "loading" || antiSpamLoading || !antiSpamToken}
          className="mt-2 px-6 py-3 rounded-md bg-monte-100 text-white font-semibold shadow-md hover:opacity-95 transition-opacity w-fit disabled:opacity-60"
        >
          {status === "loading" ? "Odesílám…" : "Odeslat"}
        </button>
      </form>
    </div>
  );
}
