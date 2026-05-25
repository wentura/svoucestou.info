import React from "react";
import styles from "./runningText.module.css";

export default function RunningText() {
  const newsText =
    // "DEN OTEVŘENÝCH DVEŘÍ - 21. 5. 2026 od 15:00 do 17:00, více informací na Facebookové stránce a události. Těšíme se na Vás";
    "Provoz celý týden - možnost docházky 3-5 dní v týdnu od září 2026";

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.ticker}>
        <span>
        {newsText}
        </span>
        <span>
        {newsText}
        </span><span>
        {newsText}
        </span><span>
        {newsText}
        </span><span>
        {newsText}
        </span>
        <span>
        {newsText}
        </span><span>
        {newsText}
        </span><span>
        {newsText}
        </span><span>
        {newsText}
        </span>
      </div>
    </div>
  );
}
