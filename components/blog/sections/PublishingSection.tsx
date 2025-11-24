
import React from 'react';
import { Controller } from 'react-hook-form';
import { Calendar } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { DatePicker } from "@/components/ui/date-picker";

interface PublishingSectionProps {
  control: any;
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
}

export const PublishingSection: React.FC<PublishingSectionProps> = ({
  control,
  selectedDate,
  setSelectedDate,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="published_date" className="flex items-center">
            Publish Date
            <Calendar className="ml-2 h-4 w-4 opacity-70" />
          </Label>
          <Controller
            name="published_date"
            control={control}
            render={({ field }) => (
              <DatePicker
                id="published_date"
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date);
                  field.onChange(date);
                }}
                placeholder="Select date"
              />
            )}
          />
        </div>
        <div>
          <Label htmlFor="read_time">Read Time</Label>
          <Controller
            name="read_time"
            control={control}
            render={({ field }) => (
              <Input id="read_time" {...field} placeholder="e.g., 5 min" />
            )}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="featured_image">Featured Image URL</Label>
        <Controller
          name="featured_image"
          control={control}
          render={({ field }) => (
            <Input id="featured_image" {...field} placeholder="Enter image URL" />
          )}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Label htmlFor="is_featured">Featured Post</Label>
        <Controller
          name="is_featured"
          control={control}
          render={({ field }) => (
            <Switch
              id="is_featured"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          )}
        />
      </div>

      <div>
        <Label htmlFor="status">Status</Label>
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent className="bg-white z-50">
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>
    </>
  );
};
