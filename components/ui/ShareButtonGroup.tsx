
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import NativeShareButton from './NativeShareButton';
import SocialShareButtons from './SocialShareButtons';
import { cn } from '@/lib/utils';

interface ShareButtonGroupProps {
  title: string;
  text?: string;
  url?: string;
  showNativeShare?: boolean;
  platforms?: ('whatsapp' | 'linkedin' | 'twitter' | 'email' | 'copy')[];
  layout?: 'horizontal' | 'vertical' | 'card';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  showLabels?: boolean;
}

const ShareButtonGroup = ({
  title,
  text,
  url = window.location.href,
  showNativeShare = true,
  platforms = ['whatsapp', 'linkedin', 'twitter', 'email', 'copy'],
  layout = 'horizontal',
  size = 'default',
  className,
  showLabels = false
}: ShareButtonGroupProps) => {
  const shareProps = { title, text, url, size, showText: showLabels };

  if (layout === 'card') {
    return (
      <Card className={cn('p-4', className)}>
        <div className="space-y-3">
          <h4 className="font-medium text-sm text-gray-700">Share this article</h4>
          <div className="flex flex-col gap-3">
            {showNativeShare && <NativeShareButton {...shareProps} />}
            {showNativeShare && platforms.length > 0 && <Separator />}
            {platforms.length > 0 && (
              <SocialShareButtons 
                {...shareProps} 
                platforms={platforms}
                layout="horizontal"
              />
            )}
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className={cn(
      'flex gap-3 items-center',
      layout === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
      className
    )}>
      {showNativeShare && <NativeShareButton {...shareProps} />}
      {showNativeShare && platforms.length > 0 && (
        <Separator orientation={layout === 'vertical' ? 'horizontal' : 'vertical'} className="h-6" />
      )}
      {platforms.length > 0 && (
        <SocialShareButtons 
          {...shareProps} 
          platforms={platforms}
          layout={layout}
        />
      )}
    </div>
  );
};

export default ShareButtonGroup;
