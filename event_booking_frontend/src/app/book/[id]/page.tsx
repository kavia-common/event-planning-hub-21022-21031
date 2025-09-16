"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EVENTS = {
  e1: "Elegant Wedding Package",
  e2: "Corporate Gala Setup",
  e3: "Birthday Bash Essentials",
  e4: "Outdoor Festival Coordination",
  e5: "Product Launch Experience",
} as const;

export default function BookPage(props: any) {
  const id = props?.params?.id as string;
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const name = EVENTS[id as keyof typeof EVENTS];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate booking success and redirect to confirmation with a query
    setTimeout(() => {
      router.push(`/bookings?new=${id}`);
    }, 900);
  };

  if (!name) {
    return (
      <div className="card">
        <div className="card-body">
          <h2 className="text-lg font-semibold">Service not found</h2>
          <Link className="btn btn-primary mt-4" href="/events">Back to events</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="card">
        <div className="card-header">
          <h1 className="text-2xl font-semibold">Book: {name}</h1>
          <p className="text-sm text-gray-600 mt-1">Fill in your details and preferred schedule.</p>
        </div>
        <form className="card-body space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="label" htmlFor="fullName">Full Name</label>
            <input className="input" id="fullName" name="fullName" placeholder="Jane Doe" required />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label" htmlFor="email">Email</label>
              <input className="input" id="email" name="email" type="email" placeholder="jane@example.com" required />
            </div>
            <div>
              <label className="label" htmlFor="phone">Phone</label>
              <input className="input" id="phone" name="phone" type="tel" placeholder="+1 555 123 4567" required />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label" htmlFor="date">Preferred Date</label>
              <input className="input" id="date" name="date" type="date" required />
            </div>
            <div>
              <label className="label" htmlFor="guests">Guests</label>
              <input className="input" id="guests" name="guests" type="number" min={1} placeholder="100" required />
            </div>
          </div>
          <div>
            <label className="label" htmlFor="notes">Notes</label>
            <textarea className="input min-h-28" id="notes" name="notes" placeholder="Share special requests or preferences..." />
          </div>
          <div className="pt-2 flex gap-3">
            <Link href={`/events/${id}`} className="btn btn-outline">Back</Link>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Processing..." : "Confirm Booking"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
