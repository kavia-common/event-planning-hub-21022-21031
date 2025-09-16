import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto">
      <section className="card">
        <div className="card-body text-center">
          <div className="mx-auto h-14 w-14 rounded-2xl bg-red-50 text-red-600 grid place-items-center text-2xl">⚠️</div>
          <h1 className="mt-4 text-2xl font-semibold">404 – Page Not Found</h1>
          <p className="mt-2 text-gray-600">The page you’re looking for doesn’t exist or was moved.</p>
          <Link href="/" className="btn btn-primary mt-6">Back to home</Link>
        </div>
      </section>
    </div>
  );
}
