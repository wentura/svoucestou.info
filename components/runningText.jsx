import React from "react";
import styles from "./runningText.module.css";

export default function RunningText() {
  const newsText =
    "DEN OTEVŘENÝCH DVEŘÍ - 22. 5. 2025 od 15:00 do 18:00, více informací na Facebookové stránce a události. Těšíme se na Vás";

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.ticker}>
        <span>
          DEN OTEVŘENÝCH DVEŘÍ - 22. 5. 2025 od 15:00 do 18:00,{" "}
          <a
            href="https://www.facebook.com/svoucestoumontessori"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            více informací na Facebooku.
          </a>{" "}
          Těšíme se na Vás.
        </span>
        <span>
          DEN OTEVŘENÝCH DVEŘÍ - 22. 5. 2025 od 15:00 do 18:00,{" "}
          <a
            href="https://www.facebook.com/svoucestoumontessori"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            více informací na Facebooku.
          </a>{" "}
          Těšíme se na Vás.
        </span>
        <span>
          DEN OTEVŘENÝCH DVEŘÍ - 22. 5. 2025 od 15:00 do 18:00,{" "}
          <a
            href="https://www.facebook.com/svoucestoumontessori"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            více informací na Facebooku.
          </a>{" "}
          Těšíme se na Vás.
        </span>
        <span>
          DEN OTEVŘENÝCH DVEŘÍ - 22. 5. 2025 od 15:00 do 18:00,{" "}
          <a
            href="https://www.facebook.com/svoucestoumontessori"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            více informací na Facebooku.
          </a>{" "}
          Těšíme se na Vás.
        </span>
        <span>
          DEN OTEVŘENÝCH DVEŘÍ - 22. 5. 2025 od 15:00 do 18:00,{" "}
          <a
            href="https://www.facebook.com/svoucestoumontessori"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            více informací na Facebooku.
          </a>{" "}
          Těšíme se na Vás.
        </span>
      </div>
    </div>
  );
}
