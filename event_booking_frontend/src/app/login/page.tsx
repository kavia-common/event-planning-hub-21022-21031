"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push("/bookings"), 800);
  };
  return (
    <div className="max-w-md mx-auto">
      <div className="card">
        <div className="card-header">
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-gray-600 mt-1">Sign in to manage your bookings</p>
        </div>
        <form className="card-body space-y-4" onSubmit={submit}>
          <div>
            <label className="label" htmlFor="email">Email</label>
            <input className="input" id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div>
            <label className="label" htmlFor="password">Password</label>
            <input className="input" id="password" type="password" placeholder="••••••••" required />
          </div>
          <button className="btn btn-primary w-full" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
          <p className="text-sm text-gray-600 text-center">
            New here? <Link href="/register" className="text-primary hover:underline">Create account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
