
import React from 'react';
import { Controller } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RichTextEditor } from '@/components/ui/rich-text-editor';

interface BasicInfoSectionProps {
  control: any;
  errors: any;
  hasUserInteracted: boolean;
  setHasUserInteracted: (value: boolean) => void;
  editorContent: string;
  onEditorChange: (content: string) => void;
}

export const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({
  control,
  errors,
  hasUserInteracted,
  setHasUserInteracted,
  editorContent,
  onEditorChange,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title">Title *</Label>
          <Controller
            name="title"
            control={control}
            rules={{ required: 'Title is required' }}
            render={({ field }) => (
              <Input 
                id="title" 
                {...field} 
                placeholder="Enter title"
                onBlur={() => setHasUserInteracted(true)}
              />
            )}
          />
          {hasUserInteracted && errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message as string}</p>
          )}
        </div>
        <div>
          <Label htmlFor="slug">Slug</Label>
          <Controller
            name="slug"
            control={control}
            render={({ field }) => (
              <Input id="slug" {...field} placeholder="Auto-generated from title" />
            )}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="excerpt">Excerpt</Label>
        <Controller
          name="excerpt"
          control={control}
          render={({ field }) => (
            <Textarea id="excerpt" {...field} placeholder="Enter excerpt" />
          )}
        />
      </div>

      <div>
        <Label htmlFor="content">Content</Label>
        <RichTextEditor
          value={editorContent}
          onChange={onEditorChange}
          placeholder="Write your blog post content here..."
        />
      </div>
    </>
  );
};
