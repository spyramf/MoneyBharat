
import React from 'react';
import { Controller } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { type SupabaseBlogCategory, type SupabaseBlogAuthor } from '@/services/supabaseBlogService';

interface CategoryAuthorSectionProps {
  control: any;
  errors: any;
  hasUserInteracted: boolean;
  setHasUserInteracted: (value: boolean) => void;
  categories: SupabaseBlogCategory[];
  authors: SupabaseBlogAuthor[];
}

export const CategoryAuthorSection: React.FC<CategoryAuthorSectionProps> = ({
  control,
  errors,
  hasUserInteracted,
  setHasUserInteracted,
  categories,
  authors,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="category_id">Category *</Label>
        <Controller
          name="category_id"
          control={control}
          rules={{ required: 'Category is required' }}
          render={({ field }) => (
            <Select 
              value={field.value || ""} 
              onValueChange={(value) => {
                console.log('Category selected:', value);
                field.onChange(value);
                setHasUserInteracted(true);
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className="bg-white z-50">
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="no-categories" disabled>
                    No categories available
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          )}
        />
        {hasUserInteracted && errors.category_id && (
          <p className="text-red-500 text-sm mt-1">{errors.category_id.message as string}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="author_id">Author *</Label>
        <Controller
          name="author_id"
          control={control}
          rules={{ required: 'Author is required' }}
          render={({ field }) => (
            <Select 
              value={field.value || ""} 
              onValueChange={(value) => {
                console.log('Author selected:', value);
                field.onChange(value);
                setHasUserInteracted(true);
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an author" />
              </SelectTrigger>
              <SelectContent className="bg-white z-50">
                {authors.length > 0 ? (
                  authors.map((author) => (
                    <SelectItem key={author.id} value={author.id}>
                      {author.name}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="no-authors" disabled>
                    No authors available
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          )}
        />
        {hasUserInteracted && errors.author_id && (
          <p className="text-red-500 text-sm mt-1">{errors.author_id.message as string}</p>
        )}
      </div>
    </div>
  );
};
