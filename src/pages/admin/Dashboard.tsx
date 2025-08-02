
import AdminLayout from '@/layouts/AdminLayout';
import { CMSDashboard } from '@/components/cms/CMSDashboard';

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500">Welcome to your CMS dashboard</p>
        </div>
        
        <CMSDashboard />
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
