
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarProvider } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { LucideIcon, Home, FileText, Calendar, LogOut } from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  title: string;
  isActive: boolean;
}

const NavItem = ({ href, icon: Icon, title, isActive }: NavItemProps) => (
  <Link to={href}>
    <Button 
      variant={isActive ? "secondary" : "ghost"} 
      className={`w-full justify-start mb-1 ${isActive ? 'text-fintech-green' : ''}`}
    >
      <Icon className="mr-2 h-4 w-4" />
      {title}
    </Button>
  </Link>
);

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r">
          <SidebarHeader className="p-4 border-b">
            <div className="flex items-center">
              <div className="h-8 w-8 mr-2">
                <img 
                  src="/lovable-uploads/91d78f6e-991f-4f65-883d-f9962eb33219.png" 
                  alt="Money Bharat Logo" 
                  className="h-full w-full object-contain" 
                />
              </div>
              <h2 className="text-xl font-bold">
                <span className="text-[#F97316]">MONEY</span>
                <span className="text-[#2EB883]">BHARAT</span> CMS
              </h2>
            </div>
          </SidebarHeader>
          <SidebarContent className="p-4">
            <nav className="flex flex-col">
              <NavItem 
                href="/admin" 
                icon={Home} 
                title="Dashboard" 
                isActive={currentPath === "/admin"}
              />
              <NavItem 
                href="/admin/blogs" 
                icon={FileText} 
                title="Blog Management" 
                isActive={currentPath.startsWith("/admin/blogs")}
              />
              <NavItem 
                href="/admin/bookings" 
                icon={Calendar} 
                title="Bookings" 
                isActive={currentPath.startsWith("/admin/bookings")}
              />
            </nav>
          </SidebarContent>
          <SidebarFooter className="p-4 border-t">
            <Button variant="ghost" className="w-full justify-start text-red-500">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
