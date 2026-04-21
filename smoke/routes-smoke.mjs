const baseUrl = process.env.SMOKE_BASE_URL || "http://127.0.0.1:3000";
const canonical = "https://www.svoucestou.info";
const year = String(new Date().getFullYear());

const routeChecks = [
  { path: "/", mustContain: ["Svou"] },
  { path: "/skola", mustContain: ["Montessori škola"] },
  { path: "/skolka", mustContain: ["Montessori školka"] },
  { path: "/cenik", mustContain: ["Ceník"] },
  { path: "/kontakt", mustContain: ["Kontakt"] },
  { path: "/novinky", mustContain: ["Novinky"] },
  { path: "/sitemap.xml", mustContain: [canonical] },
  { path: "/robots.txt", mustContain: ["Sitemap:"] },
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, retries = 20, delayMs = 500) {
  let lastError;
  for (let i = 0; i < retries; i += 1) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      return res;
    } catch (error) {
      lastError = error;
      await sleep(delayMs);
    }
  }
  throw lastError;
}

async function main() {
  const failures = [];

  for (const check of routeChecks) {
    const url = `${baseUrl}${check.path}`;
    const res = await fetchWithRetry(url);
    const body = await res.text();

    if (!res.ok) {
      failures.push(`${check.path}: expected 200, got ${res.status}`);
      continue;
    }

    for (const token of check.mustContain) {
      if (!body.includes(token)) {
        failures.push(`${check.path}: missing token "${token}"`);
      }
    }

    if (check.path !== "/sitemap.xml" && check.path !== "/robots.txt") {
      if (!body.includes('rel="canonical"')) {
        failures.push(`${check.path}: missing canonical tag`);
      }
      if (!body.includes(canonical)) {
        failures.push(`${check.path}: missing canonical host ${canonical}`);
      }
    }
  }

  const homeRes = await fetchWithRetry(`${baseUrl}/`);
  const homeBody = await homeRes.text();
  if (!homeBody.includes(year)) {
    failures.push(`/ : footer year ${year} not found`);
  }
  if (!homeBody.includes("Ceník")) {
    failures.push(`/ : navigation does not contain "Ceník"`);
  }

  if (failures.length > 0) {
    console.error("Smoke test failed:");
    for (const failure of failures) {
      console.error(`- ${failure}`);
    }
    process.exit(1);
  }

  console.log("Smoke test passed.");
}

main().catch((error) => {
  console.error("Smoke script crashed:", error);
  process.exit(1);
});
