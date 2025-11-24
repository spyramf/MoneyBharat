
import React, { useState } from 'react';
import { MessageCircle, Linkedin, Twitter, Mail, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ShareButtonProps {
  title: string;
  text?: string;
  url?: string;
  className?: string;
  size?: 'default' | 'sm' | 'lg';
  showText?: boolean;
}

interface SocialShareButtonsProps extends ShareButtonProps {
  platforms?: ('whatsapp' | 'linkedin' | 'twitter' | 'email' | 'copy')[];
  layout?: 'horizontal' | 'vertical';
}

const SocialShareButtons = ({ 
  title, 
  text, 
  url = window.location.href,
  platforms = ['whatsapp', 'linkedin', 'twitter', 'email', 'copy'],
  layout = 'horizontal',
  className,
  size = 'default',
  showText = false
}: SocialShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  const shareData = {
    title,
    text: text || title,
    url
  };

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(`${shareData.text}\n\n${shareData.url}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=600');
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}&hashtags=MoneyBharat,Finance,Investment`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent(shareData.title);
    const body = encodeURIComponent(`${shareData.text}\n\n${shareData.url}\n\nShared from Money Bharat Finance`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const buttonConfigs = {
    whatsapp: {
      icon: MessageCircle,
      label: 'WhatsApp',
      onClick: handleWhatsAppShare,
      className: 'hover:bg-green-50 hover:text-green-600 hover:border-green-200'
    },
    linkedin: {
      icon: Linkedin,
      label: 'LinkedIn',
      onClick: handleLinkedInShare,
      className: 'hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200'
    },
    twitter: {
      icon: Twitter,
      label: 'Twitter',
      onClick: handleTwitterShare,
      className: 'hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200'
    },
    email: {
      icon: Mail,
      label: 'Email',
      onClick: handleEmailShare,
      className: 'hover:bg-gray-50 hover:text-gray-600 hover:border-gray-200'
    },
    copy: {
      icon: copied ? Check : Copy,
      label: copied ? 'Copied!' : 'Copy Link',
      onClick: handleCopyLink,
      className: copied ? 'text-green-600 border-green-200' : 'hover:bg-gray-50 hover:text-gray-600 hover:border-gray-200'
    }
  };

  return (
    <div className={cn(
      'flex gap-2',
      layout === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
      className
    )}>
      {platforms.map((platform) => {
        const config = buttonConfigs[platform];
        const Icon = config.icon;
        
        return (
          <Button
            key={platform}
            variant="outline"
            size={size}
            onClick={config.onClick}
            className={cn(
              'transition-all duration-200',
              config.className
            )}
          >
            <Icon className="h-4 w-4" />
            {showText && <span className="ml-2">{config.label}</span>}
          </Button>
        );
      })}
    </div>
  );
};

export default SocialShareButtons;
