const parse = (iso: string) => new Date(`${iso}T12:00:00`);

export const longDate = (iso: string) =>
  parse(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export const monthYear = (iso: string) => parse(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });

export const dayParts = (iso: string) => {
  const d = parse(iso);
  return {
    weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
    month: d.toLocaleDateString("en-US", { month: "short" }),
    day: d.getDate(),
  };
};

export const initials = (name: string) =>
  name
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
