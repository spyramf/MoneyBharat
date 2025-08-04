
import React from 'react';
import { Textarea } from '@/components/ui/textarea';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="min-h-[300px] font-mono text-sm"
      placeholder="Enter your content here..."
    />
  );
};

export default Editor;
