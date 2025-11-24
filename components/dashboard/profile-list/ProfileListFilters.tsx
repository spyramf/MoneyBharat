
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Search, Upload, Download } from 'lucide-react';

interface ProfileListFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  uccAvailableOnly: boolean;
  setUccAvailableOnly: (value: boolean) => void;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>, type: 'mandate' | 'ucc') => void;
}

const ProfileListFilters = ({
  searchQuery,
  setSearchQuery,
  uccAvailableOnly,
  setUccAvailableOnly,
  onFileUpload
}: ProfileListFiltersProps) => {
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by Name or UCC..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              id="ucc-available"
              checked={uccAvailableOnly}
              onCheckedChange={setUccAvailableOnly}
            />
            <label htmlFor="ucc-available" className="text-sm font-medium">
              UCC Available Only
            </label>
          </div>

          <div className="flex gap-2">
            <label className="cursor-pointer">
              <input
                type="file"
                accept=".xlsx,.xls,.csv"
                className="hidden"
                onChange={(e) => onFileUpload(e, 'mandate')}
              />
              <Button variant="outline" size="sm" asChild>
                <span>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Mandate List
                </span>
              </Button>
            </label>

            <label className="cursor-pointer">
              <input
                type="file"
                accept=".xlsx,.xls,.csv"
                className="hidden"
                onChange={(e) => onFileUpload(e, 'ucc')}
              />
              <Button variant="outline" size="sm" asChild>
                <span>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload UCC List
                </span>
              </Button>
            </label>

            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileListFilters;
