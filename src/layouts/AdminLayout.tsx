
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Calendar, 
  FileText, 
  LogOut,
  BarChart3
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Blog Management', href: '/admin/blogs', icon: FileText },
    { name: 'Bookings', href: '/admin/bookings', icon: Calendar },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="p-6">
          <Link to="/" className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-fintech-purple" />
            <span className="text-xl font-bold text-gray-900">Money Bharat</span>
          </Link>
          <p className="text-sm text-gray-500 mt-1">Admin Panel</p>
        </div>
        
        <nav className="mt-6 px-4">
          {navigation.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors mb-1",
                isActive(item.href)
                  ? "bg-fintech-purple text-white"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={() => {
              localStorage.removeItem('adminAuth');
              window.location.href = '/admin/login';
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
