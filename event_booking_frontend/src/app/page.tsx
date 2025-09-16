import Link from "next/link";

const features = [
  { title: "Discover Events", desc: "Browse curated event planning services, venues, and packages.", icon: "🔎" },
  { title: "Book Seamlessly", desc: "Transparent pricing and modern, secure checkout.", icon: "🧾" },
  { title: "Manage Easily", desc: "View bookings, update preferences, and manage your profile.", icon: "👤" },
];

const sampleEvents = [
  { id: "e1", title: "Elegant Wedding Package", category: "Wedding", price: 4500, location: "Riverside Hall", date: "2025-10-20" },
  { id: "e2", title: "Corporate Gala Setup", category: "Corporate", price: 3200, location: "Downtown Convention", date: "2025-11-05" },
  { id: "e3", title: "Birthday Bash Essentials", category: "Party", price: 1200, location: "Oceanview Lounge", date: "2025-09-12" },
];

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl gradient-panel border border-default">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="relative px-6 py-12 md:px-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-text">
              Plan and Book Events with Confidence
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              Discover premium event planning services, book seamlessly, and manage everything in one place — all in a modern, ocean-inspired interface.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/events" className="btn btn-primary">Explore Events</Link>
              <Link href="/register" className="btn btn-outline">Create an account</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="card">
            <div className="card-body">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 grid place-items-center text-xl">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Popular Events */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Popular services</h2>
          <Link className="text-sm text-primary hover:underline" href="/events">View all</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {sampleEvents.map((ev) => (
            <div key={ev.id} className="card">
              <div className="card-header">
                <div className="flex items-center justify-between">
                  <span className="badge">{ev.category}</span>
                  <span className="text-sm text-gray-500">{new Date(ev.date).toLocaleDateString()}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{ev.title}</h3>
              </div>
              <div className="card-body">
                <div className="flex items-center justify-between">
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
