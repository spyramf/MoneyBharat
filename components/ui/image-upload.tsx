
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, X, Link, Loader2, Image } from 'lucide-react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import type { Database } from '@/integrations/supabase/types';
import { toast } from 'sonner';

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  placeholder?: string;
}

export const ImageUpload = ({ value, onChange, placeholder = "Upload image or enter URL" }: ImageUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [urlValue, setUrlValue] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const supabase = useSupabaseClient<Database>();

  const generateFileName = (file: File) => {
    const timestamp = new Date().toISOString().split('T')[0];
    const randomString = Math.random().toString(36).substring(2, 8);
    const fileExtension = file.name.split('.').pop();
    return `${timestamp}/${randomString}.${fileExtension}`;
  };

  const handleFileUpload = async (file: File) => {
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      toast.error('Please upload a valid image file (JPG, PNG, or WebP)');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    setIsUploading(true);

    try {
      const fileName = generateFileName(file);
      
      if (!supabase) {
        throw new Error('Supabase client unavailable. Please refresh and log in again.');
      }

      const { data, error } = await supabase.storage
        .from('blog-images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        console.error('Upload error:', error);
        throw error;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(fileName);

      onChange(publicUrl);
      toast.success('Image uploaded successfully!');
    } catch (error: any) {
      console.error('Upload error:', error);
      toast.error(error?.message || 'Failed to upload image');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleUrlSubmit = () => {
    if (urlValue.trim()) {
      onChange(urlValue.trim());
      setUrlValue('');
      setShowUrlInput(false);
    }
  };

  const handleRemove = () => {
    onChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      {value ? (
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <img
                src={value}
                alt="Preview"
                className="w-full h-48 object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={handleRemove}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2 truncate">{value}</p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-6">
            <div
              className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-muted-foreground/50 transition-colors"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {isUploading ? (
                <div className="flex flex-col items-center space-y-2">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Uploading...</p>
                </div>
              ) : (
                <div className="flex flex-col items-center space-y-2">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">{placeholder}</p>
                  <p className="text-xs text-muted-foreground">
                    Drag & drop or click to select (JPG, PNG, WebP - Max 5MB)
                  </p>
                </div>
              )}
            </div>

            <div className="flex gap-2 mt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="flex-1"
              >
                <Image className="h-4 w-4 mr-2" />
                Upload Image
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowUrlInput(!showUrlInput)}
                disabled={isUploading}
              >
                <Link className="h-4 w-4 mr-2" />
                URL
              </Button>
            </div>

            {showUrlInput && (
              <div className="flex gap-2 mt-2">
                <Input
                  placeholder="Enter image URL"
                  value={urlValue}
                  onChange={(e) => setUrlValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleUrlSubmit()}
                />
                <Button type="button" onClick={handleUrlSubmit} size="sm">
                  Add
                </Button>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
};
