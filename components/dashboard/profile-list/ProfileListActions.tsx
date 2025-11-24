
import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, ExternalLink, Plus } from 'lucide-react';

interface ProfileListActionsProps {
  loading: boolean;
  onSync: () => void;
  onCreateUCC: () => void;
}

const ProfileListActions = ({ loading, onSync, onCreateUCC }: ProfileListActionsProps) => {
  return (
    <div className="flex items-center gap-3">
      <Button onClick={onSync} variant="outline" size="sm" disabled={loading}>
        <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
        Sync
      </Button>
      <Button variant="outline" size="sm" asChild>
        <a href="https://bsestarmf.in" target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-4 w-4 mr-2" />
          Login to BSE Portal
        </a>
      </Button>
      <Button onClick={onCreateUCC} size="sm" className="bg-blue-600 hover:bg-blue-700">
        <Plus className="h-4 w-4 mr-2" />
        Create UCC
      </Button>
    </div>
  );
};

export default ProfileListActions;
