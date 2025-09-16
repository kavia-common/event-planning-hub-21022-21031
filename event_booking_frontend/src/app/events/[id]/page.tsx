import Link from "next/link";

const EVENTS = {
  e1: { id: "e1", title: "Elegant Wedding Package", category: "Wedding", price: 4500, location: "Riverside Hall", date: "2025-10-20", details: "Comprehensive wedding package: venue design, flower arrangements, coordinator, and banquet setup." },
  e2: { id: "e2", title: "Corporate Gala Setup", category: "Corporate", price: 3200, location: "Downtown Convention", date: "2025-11-05", details: "Complete gala experience with stage design, lighting, catering coordination, and host management." },
  e3: { id: "e3", title: "Birthday Bash Essentials", category: "Party", price: 1200, location: "Oceanview Lounge", date: "2025-09-12", details: "Decorations, cake, DJ playlist, and games setup for a memorable birthday." },
  e4: { id: "e4", title: "Outdoor Festival Coordination", category: "Festival", price: 8000, location: "Bayfront Park", date: "2025-08-02", details: "Permits, staging, staffing, security liaison, and vendor coordination for festivals." },
  e5: { id: "e5", title: "Product Launch Experience", category: "Corporate", price: 6000, location: "Tech Hub Center", date: "2025-07-14", details: "Audience experience strategy, AV production, media invites, and post-event analytics." },
} as const;

export default function EventDetails({ params }: { params: { id: keyof typeof EVENTS }}) {
  const data = EVENTS[params.id];
  if (!data) {
    return (
      <div className="card">
        <div className="card-body">
          <h2 className="text-lg font-semibold">Event not found</h2>
          <p className="text-sm text-gray-600 mt-2">The event you are looking for may have been removed.</p>
          <Link className="btn btn-primary mt-4" href="/events">Back to events</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-[1fr_360px] gap-8">
      <section className="card">
        <div className="card-header">
          <div className="flex items-center justify-between">
            <span className="badge">{data.category}</span>
            <span className="text-sm text-gray-500">{new Date(data.date).toLocaleDateString()}</span>
          </div>
          <h1 className="mt-3 text-2xl font-semibold">{data.title}</h1>
        </div>
        <div className="card-body space-y-4">
          <p className="text-gray-700">{data.details}</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Professional planning and coordination</li>
            <li>Transparent inclusions and pricing</li>
            <li>Trusted vendors and venues</li>
          </ul>
        </div>
      </section>

      <aside className="card h-fit">
        <div className="card-body">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-gray-500">Starting from</span>
            <span className="text-2xl font-semibold text-primary">${data.price.toLocaleString()}</span>
          </div>
          <div className="mt-2 text-sm text-gray-600">{data.location}</div>
          <Link href={`/book/${data.id}`} className="btn btn-primary w-full mt-5">Book this service</Link>
          <Link href="/events" className="btn btn-outline w-full mt-2">Back to events</Link>
        </div>
      </aside>
    </div>
  );
}
