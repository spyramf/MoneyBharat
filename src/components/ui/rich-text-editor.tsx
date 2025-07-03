
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bold, Italic, List, Link, Image, Eye, Code } from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const RichTextEditor = ({ value, onChange, placeholder }: RichTextEditorProps) => {
  const [activeTab, setActiveTab] = React.useState('write');

  const insertMarkdown = (syntax: string, placeholder: string = '') => {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end) || placeholder;
    
    const beforeText = value.substring(0, start);
    const afterText = value.substring(end);
    
    let newText = '';
    switch (syntax) {
      case 'bold':
        newText = `${beforeText}**${selectedText}**${afterText}`;
        break;
      case 'italic':
        newText = `${beforeText}_${selectedText}_${afterText}`;
        break;
      case 'link':
        newText = `${beforeText}[${selectedText}](url)${afterText}`;
        break;
      case 'image':
        newText = `${beforeText}![${selectedText}](image-url)${afterText}`;
        break;
      case 'list':
        newText = `${beforeText}\n- ${selectedText}${afterText}`;
        break;
      case 'code':
        newText = `${beforeText}\`${selectedText}\`${afterText}`;
        break;
      default:
        return;
    }
    
    onChange(newText);
  };

  const renderPreview = (content: string) => {
    // Simple markdown to HTML conversion for preview
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/_(.*?)_/g, '<em>$1</em>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="max-w-full h-auto" />')
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 rounded">$1</code>')
      .replace(/\n- (.*)/g, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/s, '<ul class="list-disc ml-4">$1</ul>')
      .replace(/\n/g, '<br />');
  };

  return (
    <Card>
      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="border-b p-3 flex justify-between items-center">
            <TabsList className="grid w-fit grid-cols-2">
              <TabsTrigger value="write">Write</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            
            <div className="flex gap-1">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => insertMarkdown('bold', 'bold text')}
              >
                <Bold className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => insertMarkdown('italic', 'italic text')}
              >
                <Italic className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => insertMarkdown('link', 'link text')}
              >
                <Link className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => insertMarkdown('image', 'alt text')}
              >
                <Image className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => insertMarkdown('list', 'list item')}
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => insertMarkdown('code', 'code')}
              >
                <Code className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <TabsContent value="write" className="p-4 m-0">
            <Textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="min-h-[400px] resize-none border-0 focus:ring-0 focus:border-0"
            />
          </TabsContent>
          
          <TabsContent value="preview" className="p-4 m-0">
            <div 
              className="min-h-[400px] prose max-w-none"
              dangerouslySetInnerHTML={{ __html: renderPreview(value) }}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
