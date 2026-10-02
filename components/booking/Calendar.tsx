"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { earliestBookableDate, isDateBooked } from "@/lib/booking";
import { formatLongDate, parseISODate, toISODate } from "@/lib/format";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Month calendar showing (simulated) booked dates. */
export function Calendar({
  value,
  onChange,
  describedBy,
}: {
  value: string;
  onChange: (iso: string) => void;
  describedBy?: string;
}) {
  const min = earliestBookableDate();
  const initial = parseISODate(value || min);
  const [month, setMonth] = useState(new Date(initial.getFullYear(), initial.getMonth(), 1));
  const minMonth = parseISODate(min);
  const atFirstMonth =
    month.getFullYear() === minMonth.getFullYear() && month.getMonth() === minMonth.getMonth();

  const firstDay = month.getDay();
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells: (string | null)[] = [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => toISODate(new Date(month.getFullYear(), month.getMonth(), i + 1))),
  ];
  const label = month.toLocaleDateString("en-PH", { month: "long", year: "numeric" });

  return (
    <div
      id="date"
      tabIndex={-1}
      className="max-w-md scroll-mt-28 rounded-2xl border-2 border-espresso bg-paper p-4"
      aria-describedby={describedBy}
      aria-label="Event date calendar"
      role="group"
    >
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}
          disabled={atFirstMonth}
          className="grid size-11 place-items-center rounded-lg hover:bg-butter disabled:opacity-30"
          aria-label="Previous month"
        >
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <p className="font-display text-lg font-semibold" aria-live="polite">
          {label}
        </p>
        <button
          type="button"
          onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}
          className="grid size-11 place-items-center rounded-lg hover:bg-butter"
          aria-label="Next month"
        >
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center" role="group" aria-label={`Dates in ${label}`}>
        {WEEKDAYS.map((d) => (
          <span key={d} className="pb-1 text-xs font-semibold text-espresso-soft" aria-hidden>
            {d}
          </span>
        ))}
        {cells.map((iso, i) => {
          if (!iso) return <span key={`blank-${i}`} />;
          const past = iso < min;
          const booked = !past && isDateBooked(iso);
          const selected = iso === value;
          const day = Number(iso.slice(-2));
          return (
            <button
              key={iso}
              type="button"
              disabled={past || booked}
              aria-pressed={selected}
              aria-label={`${formatLongDate(iso)}${booked ? ", booked" : past ? ", unavailable" : ""}`}
              onClick={() => onChange(iso)}
              className={`relative grid aspect-square min-h-11 place-items-center rounded-lg font-semibold tabular ${
                selected
                  ? "border-2 border-espresso bg-booth-yellow"
                  : booked
                    ? "text-espresso/40 line-through"
                    : past
                      ? "text-espresso/25"
                      : "hover:bg-butter"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-espresso-soft">
        <span className="line-through">12</span> Booked
      </p>
    </div>
  );
}
