import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const adminNav = [
  { label: 'Dashboard', href: '/admin' },
  { label: 'Blog Posts', href: '/admin/blogs' },
  { label: 'New Post', href: '/admin/blog/new' },
  { label: 'Bookings', href: '/admin/bookings' },
];

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        <aside className="w-64 border-r bg-white">
          <div className="p-6 border-b">
            <p className="text-sm font-medium text-fintech-green">Money Bharat Finance</p>
            <h2 className="text-xl font-semibold text-gray-900">Admin Panel</h2>
            <p className="text-xs text-gray-500 mt-1">Manage content & bookings</p>
          </div>
          <nav className="p-4 space-y-1">
            {adminNav.map((item) => {
              const isActive = router.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-fintech-green/10 text-fintech-green'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
