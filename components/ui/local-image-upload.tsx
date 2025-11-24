
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, Image as ImageIcon, X } from 'lucide-react';

interface LocalImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const LocalImageUpload = ({ value, onChange, placeholder }: LocalImageUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    
    try {
      // For now, we'll create a local URL for the image
      const imageUrl = URL.createObjectURL(file);
      onChange(imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleUrlInput = (url: string) => {
    onChange(url);
  };

  const clearImage = () => {
    onChange('');
  };

  return (
    <div className="space-y-4">
      {value && (
        <div className="relative inline-block">
          <img 
            src={value} 
            alt="Preview" 
            className="h-32 w-48 object-cover rounded-lg border"
          />
          <Button
            type="button"
            variant="destructive"
            size="sm"
            className="absolute -top-2 -right-2"
            onClick={clearImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
      
      <div className="flex gap-4">
        <div className="flex-1">
          <Input
            type="url"
            placeholder="Enter image URL"
            value={value}
            onChange={(e) => handleUrlInput(e.target.value)}
          />
        </div>
        
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={isUploading}
          />
          <Button type="button" variant="outline" disabled={isUploading}>
            {isUploading ? (
              'Uploading...'
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload
              </>
            )}
          </Button>
        </div>
      </div>
      
      {placeholder && (
        <p className="text-sm text-muted-foreground">{placeholder}</p>
      )}
    </div>
  );
};
