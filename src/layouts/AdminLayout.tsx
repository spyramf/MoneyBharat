
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Calendar, 
  FileText, 
  LogOut,
  Database,
  BarChart3
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Bookings', href: '/admin/bookings', icon: Calendar },
    { 
      name: 'Blog Management', 
      icon: FileText,
      subItems: [
        { name: 'Legacy Blog', href: '/admin/blogs', icon: FileText },
        { name: 'Supabase Blog', href: '/admin/blogs/supabase', icon: Database },
      ]
    },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isParentActive = (subItems: any[]) => subItems.some(item => location.pathname.startsWith(item.href.split('/').slice(0, -1).join('/')));

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
            <div key={index} className="mb-1">
              {item.subItems ? (
                <div className="space-y-1">
                  <div className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isParentActive(item.subItems)
                      ? "bg-fintech-purple/10 text-fintech-purple"
                      : "text-gray-700 hover:bg-gray-100"
                  )}>
                    <item.icon className="mr-3 h-4 w-4" />
                    {item.name}
                  </div>
                  <div className="ml-6 space-y-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        className={cn(
                          "flex items-center px-3 py-2 text-sm rounded-md transition-colors",
                          isActive(subItem.href) || location.pathname.startsWith(subItem.href)
                            ? "bg-fintech-purple text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        )}
                      >
                        <subItem.icon className="mr-3 h-3 w-3" />
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive(item.href)
                      ? "bg-fintech-purple text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.name}
                </Link>
              )}
            </div>
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
