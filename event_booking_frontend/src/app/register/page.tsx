"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push("/bookings"), 900);
  };
  return (
    <div className="max-w-md mx-auto">
      <div className="card">
        <div className="card-header">
          <h1 className="text-2xl font-semibold">Create your account</h1>
          <p className="text-sm text-gray-600 mt-1">Start discovering and booking events today</p>
        </div>
        <form className="card-body space-y-4" onSubmit={submit}>
          <div>
            <label className="label" htmlFor="fullName">Full Name</label>
            <input className="input" id="fullName" placeholder="Jane Doe" required />
          </div>
          <div>
            <label className="label" htmlFor="email">Email</label>
            <input className="input" id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div>
            <label className="label" htmlFor="password">Password</label>
            <input className="input" id="password" type="password" placeholder="••••••••" required minLength={8} />
          </div>
          <button className="btn btn-primary w-full" type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </button>
          <p className="text-sm text-gray-600 text-center">
            Already have an account? <Link href="/login" className="text-primary hover:underline">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
