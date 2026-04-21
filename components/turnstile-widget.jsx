"use client";

import { useEffect, useRef } from "react";

const SCRIPT_ID = "cf-turnstile-script";
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

function ensureScriptLoaded() {
  if (document.getElementById(SCRIPT_ID)) {
    return;
  }
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.src = SCRIPT_SRC;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

export default function TurnstileWidget({ siteKey, onVerify, onExpire }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    if (!siteKey || !containerRef.current) {
      return;
    }

    ensureScriptLoaded();
    let cancelled = false;

    const renderWidget = () => {
      if (cancelled || !window.turnstile || !containerRef.current) {
        return false;
      }
      if (widgetIdRef.current !== null) {
        return true;
      }

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token) => onVerify(token),
        "expired-callback": () => onExpire(),
        "error-callback": () => onExpire(),
      });
      return true;
    };

    if (!renderWidget()) {
      const timer = window.setInterval(() => {
        if (renderWidget()) {
          window.clearInterval(timer);
        }
      }, 150);
      return () => {
        cancelled = true;
        window.clearInterval(timer);
      };
    }

    return () => {
      cancelled = true;
    };
  }, [siteKey, onExpire, onVerify]);

  if (!siteKey) {
    return null;
  }

  return <div ref={containerRef} className="mt-1" />;
}
