
import { useState, useEffect } from 'react';
import { TableOfContentsItem } from '@/types/blog';

interface TableOfContentsProps {
  headings: TableOfContentsItem[];
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [activeHeading, setActiveHeading] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(h => 
        document.getElementById(h.id)
      ).filter(Boolean) as HTMLElement[];
      
      const scrollY = window.scrollY;
      
      // Find the current heading
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (element && element.offsetTop <= scrollY + 100) {
          setActiveHeading(element.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);
  
  if (!headings || headings.length === 0) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
      <h3 className="text-lg font-semibold mb-3">Table of Contents</h3>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li 
              key={heading.id}
              className={`pl-${heading.level * 2} transition-colors`}
            >
              <a
                href={`#${heading.id}`}
                className={`block py-1 text-sm hover:text-fintech-purple ${
                  activeHeading === heading.id
                    ? 'text-fintech-purple font-medium'
                    : 'text-gray-600'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
