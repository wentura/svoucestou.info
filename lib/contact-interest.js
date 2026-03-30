/** Sdílené mapování hodnot zájmu (klient + server). */
export const INTEREST_OPTIONS = [
  { value: "", label: "Vyberte…" },
  { value: "skolka", label: "Školka (3–6 let)" },
  { value: "skola", label: "Škola / domácí vzdělávání (5–12+ let)" },
  { value: "oboji", label: "Zatím nevím / obojí" },
];

export function interestLabel(value) {
  if (!value) return "-";
  return INTEREST_OPTIONS.find((o) => o.value === value)?.label ?? value;
}
