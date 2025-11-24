
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus } from 'lucide-react';
import { supabaseBlogService } from '@/services/supabaseBlogService';
import { toast } from 'sonner';

interface AddAuthorDialogProps {
  onAuthorCreated: (authorId: string) => void;
}

export const AddAuthorDialog = ({ onAuthorCreated }: AddAuthorDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    role: 'Content Writer'
  });

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast.error('Author name is required');
      return;
    }

    setIsLoading(true);
    try {
      const authorData = {
        name: formData.name.trim(),
        slug: generateSlug(formData.name),
        email: formData.email.trim() || null,
        bio: formData.bio.trim() || null,
        role: formData.role.trim() || 'Content Writer'
      };

      const newAuthor = await supabaseBlogService.createAuthor(authorData);
      if (newAuthor && newAuthor.id) {
        toast.success('Author created successfully!');
        onAuthorCreated(newAuthor.id);
        setOpen(false);
        setFormData({ name: '', email: '', bio: '', role: 'Content Writer' });
      } else {
        toast.error('Failed to create author');
      }
    } catch (error) {
      console.error('Error creating author:', error);
      toast.error('Failed to create author');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-8">
          <Plus className="h-3 w-3 mr-1" />
          Add Author
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Author</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="authorName">Name *</Label>
            <Input
              id="authorName"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Author name"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="authorEmail">Email</Label>
            <Input
              id="authorEmail"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="author@example.com"
            />
          </div>

          <div>
            <Label htmlFor="authorRole">Role</Label>
            <Input
              id="authorRole"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              placeholder="Content Writer"
            />
          </div>

          <div>
            <Label htmlFor="authorBio">Bio</Label>
            <Textarea
              id="authorBio"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Brief bio about the author"
              rows={3}
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Creating...' : 'Create Author'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
