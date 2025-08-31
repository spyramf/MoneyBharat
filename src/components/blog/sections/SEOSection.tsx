
import React from 'react';
import { Controller } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface SEOSectionProps {
  control: any;
}

export const SEOSection: React.FC<SEOSectionProps> = ({ control }) => {
  return (
    <div className="border-t pt-6">
      <h3 className="text-lg font-semibold mb-4">SEO Settings</h3>
      <div className="grid gap-4">
        <div>
          <Label htmlFor="meta_title">Meta Title</Label>
          <Controller
            name="meta_title"
            control={control}
            render={({ field }) => (
              <Input id="meta_title" {...field} placeholder="Enter meta title (defaults to post title)" />
            )}
          />
        </div>
        <div>
          <Label htmlFor="meta_description">Meta Description</Label>
          <Controller
            name="meta_description"
            control={control}
            render={({ field }) => (
              <Textarea id="meta_description" {...field} placeholder="Enter meta description" />
            )}
          />
        </div>
        <div>
          <Label htmlFor="focus_keywords">Focus Keywords</Label>
          <Controller
            name="focus_keywords"
            control={control}
            render={({ field }) => (
              <Input id="focus_keywords" {...field} placeholder="Enter focus keywords (comma-separated)" />
            )}
          />
        </div>
      </div>
    </div>
  );
};
