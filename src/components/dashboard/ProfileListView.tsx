
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import ProfileListStats from './profile-list/ProfileListStats';
import ProfileListActions from './profile-list/ProfileListActions';
import ProfileListFilters from './profile-list/ProfileListFilters';
import ProfileListTable from './profile-list/ProfileListTable';
import { UCCProfile, ProfileStats } from './profile-list/types';
import { mockProfiles } from './profile-list/mockData';

const ProfileListView = () => {
  const { toast } = useToast();
  const [profiles, setProfiles] = useState<UCCProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [uccAvailableOnly, setUccAvailableOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    // For now, using mock data. In real implementation, fetch from Supabase
    setProfiles(mockProfiles);
    setLoading(false);
  }, []);

  const filteredProfiles = profiles.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         profile.ucc_code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         profile.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesAvailability = !uccAvailableOnly || profile.is_available;
    
    return matchesSearch && matchesAvailability;
  });

  const stats: ProfileStats = {
    activeUCC: profiles.filter(p => p.ucc_status === 'Active').length,
    pendingUCC: profiles.filter(p => p.ucc_status === 'Inactive' || p.kyc_status === 'Pending').length,
    totalProfiles: profiles.length,
    availableUCC: profiles.filter(p => p.is_available).length
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'mandate' | 'ucc') => {
    const file = event.target.files?.[0];
    if (file) {
      toast({
        title: "File Upload",
        description: `${type === 'mandate' ? 'Mandate' : 'UCC'} list file uploaded: ${file.name}`,
      });
      // In real implementation, process the file here
    }
  };

  const handleSync = () => {
    setLoading(true);
    toast({
      title: "Syncing Data",
      description: "Synchronizing with BSE portal...",
    });
    
    // Simulate sync operation
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Sync Complete",
        description: "Data synchronized successfully with BSE portal.",
      });
    }, 2000);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profile List (UCC Management)</h1>
          <p className="text-gray-600">Manage BSE UCC profiles and client accounts</p>
        </div>
        <ProfileListActions loading={loading} onSync={handleSync} />
      </div>

      {/* Stats Cards */}
      <ProfileListStats stats={stats} />

      {/* Search and Upload Section */}
      <ProfileListFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        uccAvailableOnly={uccAvailableOnly}
        setUccAvailableOnly={setUccAvailableOnly}
        onFileUpload={handleFileUpload}
      />

      {/* Profile Table */}
      <ProfileListTable
        profiles={filteredProfiles}
        loading={loading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
    </div>
  );
};

export default ProfileListView;
