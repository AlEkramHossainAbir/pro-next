import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div>
        <ul className="flex gap-5 p-4">
          <li><Link href="/dashboard/analytics">Analytics</Link></li>
          <li><Link href="/dashboard/settings">Settings</Link></li>
        </ul>
      </div>

      {children}
    </div>
  );
}
