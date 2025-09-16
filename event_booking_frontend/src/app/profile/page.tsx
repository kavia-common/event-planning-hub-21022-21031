"use client";
import { useState } from "react";

export default function ProfilePage() {
  const [saving, setSaving] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => setSaving(false), 900);
  };

  return (
    <div className="grid lg:grid-cols-[1fr_360px] gap-8">
      <section className="card">
        <div className="card-header">
          <h1 className="text-2xl font-semibold">Profile</h1>
          <p className="text-sm text-gray-600 mt-1">Manage your personal information</p>
        </div>
        <form className="card-body space-y-4" onSubmit={submit}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label" htmlFor="firstName">First name</label>
              <input className="input" id="firstName" defaultValue="Jane" required />
            </div>
            <div>
              <label className="label" htmlFor="lastName">Last name</label>
              <input className="input" id="lastName" defaultValue="Doe" required />
            </div>
          </div>
          <div>
            <label className="label" htmlFor="email">Email</label>
            <input className="input" id="email" type="email" defaultValue="jane@example.com" required />
          </div>
          <div>
            <label className="label" htmlFor="phone">Phone</label>
            <input className="input" id="phone" type="tel" defaultValue="+1 555 123 4567" />
          </div>
          <div className="pt-2">
            <button className="btn btn-primary" type="submit" disabled={saving}>
              {saving ? "Saving..." : "Save changes"}
            </button>
          </div>
        </form>
      </section>

      <aside className="card h-fit">
        <div className="card-body">
          <h3 className="text-lg font-semibold">Quick actions</h3>
          <div className="mt-3 grid gap-2">
            <button className="btn btn-outline w-full" onClick={() => alert("Password reset link sent.")}>Reset password</button>
            <button className="btn btn-outline w-full" onClick={() => alert("Two-factor authentication coming soon.")}>Enable 2FA</button>
          </div>
        </div>
      </aside>
    </div>
  );
}
