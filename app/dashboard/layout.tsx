export default function DashboardLayout({ children }) {
  return (
    <div>
      <div>
        <ul className="flex gap-5 p-4">
          <li><a href="/dashboard/analytics">Analytics</a></li>
          <li><a href="/dashboard/settings">Settings</a></li>
        </ul>
      </div>

      {children}
    </div>
  );
}
