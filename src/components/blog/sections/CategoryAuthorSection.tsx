
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
  console.log('CategoryAuthorSection - Categories:', categories);
  console.log('CategoryAuthorSection - Authors:', authors);

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
              <SelectContent className="bg-white border border-gray-200 shadow-lg z-50 max-h-60 overflow-y-auto">
                {categories && categories.length > 0 ? (
                  categories.map((category) => (
                    <SelectItem 
                      key={category.id} 
                      value={category.id}
                      className="cursor-pointer hover:bg-gray-100 px-3 py-2"
                    >
                      {category.name}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="no-categories" disabled className="text-gray-500">
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
              <SelectContent className="bg-white border border-gray-200 shadow-lg z-50 max-h-60 overflow-y-auto">
                {authors && authors.length > 0 ? (
                  authors.map((author) => (
                    <SelectItem 
                      key={author.id} 
                      value={author.id}
                      className="cursor-pointer hover:bg-gray-100 px-3 py-2"
                    >
                      {author.name}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="no-authors" disabled className="text-gray-500">
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
