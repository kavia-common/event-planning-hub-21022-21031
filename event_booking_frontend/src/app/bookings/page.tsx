"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const NAMES: Record<string, string> = {
  e1: "Elegant Wedding Package",
  e2: "Corporate Gala Setup",
  e3: "Birthday Bash Essentials",
  e4: "Outdoor Festival Coordination",
  e5: "Product Launch Experience",
};

type Booking = {
  id: string;
  eventId: string;
  date: string;
  status: "confirmed" | "pending" | "cancelled";
};

function useQueryParam(name: string) {
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      setValue(url.searchParams.get(name));
    }
  }, [name]);
  return value;
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([
    { id: "b1", eventId: "e2", date: "2025-06-21", status: "confirmed" },
    { id: "b2", eventId: "e3", date: "2025-08-07", status: "pending" },
  ]);

  const newParam = useQueryParam("new");

  useEffect(() => {
    // If redirected from booking flow, append a new "confirmed" booking.
    if (newParam && NAMES[newParam]) {
      const add: Booking = {
        id: `b-${Date.now()}`,
        eventId: newParam,
        date: new Date().toISOString().slice(0, 10),
        status: "confirmed",
      };
      setBookings((prev) => [add, ...prev]);
      // Remove query param
      const url = new URL(window.location.href);
      url.searchParams.delete("new");
      window.history.replaceState({}, "", url.toString());
    }
  }, [newParam]);

  const grouped = useMemo(() => {
    return {
      active: bookings.filter((b) => b.status !== "cancelled"),
      past: [] as Booking[],
    };
  }, [bookings]);

  return (
    <div className="grid lg:grid-cols-[1fr_360px] gap-8">
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">My Bookings</h1>
        {grouped.active.length === 0 ? (
          <div className="card">
            <div className="card-body text-center">
              <p className="text-gray-600">No bookings yet. Start by exploring our curated services.</p>
              <Link href="/events" className="btn btn-primary mt-4">Discover events</Link>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {grouped.active.map((b) => (
              <div className="card" key={b.id}>
                <div className="card-header">
                  <div className="flex items-center justify-between">
                    <span className="badge capitalize">{b.status}</span>
                    <span className="text-sm text-gray-500">{new Date(b.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{NAMES[b.eventId] ?? b.eventId}</h3>
                </div>
                <div className="card-body">
                  <div className="flex gap-3">
                    <Link href={`/events/${b.eventId}`} className="btn btn-outline w-full">View details</Link>
                    <button className="btn btn-secondary w-full" onClick={() => alert("Contact support to modify your booking.")}>Modify</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <aside className="card h-fit">
        <div className="card-body">
          <h3 className="text-lg font-semibold">Need help?</h3>
          <p className="text-sm text-gray-600 mt-1">Our team can assist you with changes and special requests.</p>
          <button className="btn btn-outline w-full mt-3" onClick={() => alert("Support request sent!")}>Contact support</button>
        </div>
      </aside>
    </div>
  );
}
