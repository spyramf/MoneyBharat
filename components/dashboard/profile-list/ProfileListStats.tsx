
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Users } from 'lucide-react';

interface ProfileListStatsProps {
  stats: {
    activeUCC: number;
    pendingUCC: number;
    totalProfiles: number;
    availableUCC: number;
  };
}

const ProfileListStats = ({ stats }: ProfileListStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active UCC</p>
              <p className="text-2xl font-bold text-green-600">{stats.activeUCC}</p>
            </div>
            <div className="p-3 rounded-full bg-green-50">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending UCC</p>
              <p className="text-2xl font-bold text-yellow-600">{stats.pendingUCC}</p>
            </div>
            <div className="p-3 rounded-full bg-yellow-50">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Profiles</p>
              <p className="text-2xl font-bold text-blue-600">{stats.totalProfiles}</p>
            </div>
            <div className="p-3 rounded-full bg-blue-50">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Available UCC</p>
              <p className="text-2xl font-bold text-purple-600">{stats.availableUCC}</p>
            </div>
            <div className="p-3 rounded-full bg-purple-50">
              <CheckCircle className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileListStats;
