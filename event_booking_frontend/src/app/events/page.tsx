"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

type EventItem = {
  id: string;
  title: string;
  category: string;
  price: number;
  location: string;
  date: string;
  short: string;
};

const EVENTS: EventItem[] = [
  { id: "e1", title: "Elegant Wedding Package", category: "Wedding", price: 4500, location: "Riverside Hall", date: "2025-10-20", short: "Full-service wedding planning with décor and coordination." },
  { id: "e2", title: "Corporate Gala Setup", category: "Corporate", price: 3200, location: "Downtown Convention", date: "2025-11-05", short: "Premium gala ambience with stage, lighting, and seating." },
  { id: "e3", title: "Birthday Bash Essentials", category: "Party", price: 1200, location: "Oceanview Lounge", date: "2025-09-12", short: "Fun party package with music, cake, and decorations." },
  { id: "e4", title: "Outdoor Festival Coordination", category: "Festival", price: 8000, location: "Bayfront Park", date: "2025-08-02", short: "End-to-end outdoor event management and staffing." },
  { id: "e5", title: "Product Launch Experience", category: "Corporate", price: 6000, location: "Tech Hub Center", date: "2025-07-14", short: "Immersive brand launch with AV and media management." },
];

const categories = ["All", "Wedding", "Corporate", "Party", "Festival"];

export default function EventsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("date");

  const results = useMemo(() => {
    let list = EVENTS.filter(e =>
      (cat === "All" || e.category === cat) &&
      (q.trim().length === 0 || `${e.title} ${e.location} ${e.category}`.toLowerCase().includes(q.toLowerCase()))
    );
    if (sort === "date") list = list.sort((a, b) => +new Date(a.date) - +new Date(b.date));
    if (sort === "price") list = list.sort((a, b) => a.price - b.price);
    return list;
  }, [q, cat, sort]);

  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-8">
      <aside className="sidebar">
        <div className="card">
          <div className="card-body">
            <h3 className="text-sm font-semibold text-gray-700">Search</h3>
            <input
              className="input mt-2"
              placeholder="Search events, locations..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <h3 className="text-sm font-semibold text-gray-700 mt-5">Category</h3>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  className={`px-3 py-2 rounded-xl border text-sm ${cat === c ? "bg-primary text-white" : "border-default hover:bg-gray-50"}`}
                  onClick={() => setCat(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <h3 className="text-sm font-semibold text-gray-700 mt-5">Sort by</h3>
            <select className="input mt-2" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="date">Date</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>
      </aside>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Available Services</h1>
          <span className="text-sm text-gray-500">{results.length} results</span>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {results.map((ev) => (
            <div className="card" key={ev.id}>
              <div className="card-header">
                <div className="flex items-center justify-between">
                  <span className="badge">{ev.category}</span>
                  <span className="text-sm text-gray-500">{new Date(ev.date).toLocaleDateString()}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{ev.title}</h3>
              </div>
              <div className="card-body">
                <p className="text-sm text-gray-600">{ev.short}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-600">{ev.location}</div>
                  <div className="text-base font-semibold text-primary">${ev.price.toLocaleString()}</div>
                </div>
                <div className="mt-5 flex gap-3">
                  <Link href={`/events/${ev.id}`} className="btn btn-outline w-full">Details</Link>
                  <Link href={`/book/${ev.id}`} className="btn btn-primary w-full">Book</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
