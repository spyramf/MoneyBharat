
import React from 'react';
import { Book, Calendar, User, Tag, Search, Layout } from 'lucide-react';

export const categoriesWithIcons = [
  {
    name: "Mutual Funds",
    icon: <Layout className="h-5 w-5 text-fintech-purple" />,
    count: 2
  },
  {
    name: "Insurance",
    icon: <User className="h-5 w-5 text-fintech-purple" />,
    count: 2
  },
  {
    name: "Loans",
    icon: <Calendar className="h-5 w-5 text-fintech-purple" />,
    count: 1
  },
  {
    name: "Financial Planning",
    icon: <Book className="h-5 w-5 text-fintech-purple" />,
    count: 2
  },
  {
    name: "Tax Planning",
    icon: <Tag className="h-5 w-5 text-fintech-purple" />,
    count: 1
  },
  {
    name: "Healthcare",
    icon: <Search className="h-5 w-5 text-fintech-purple" />,
    count: 1
  },
  {
    name: "Real Estate",
    icon: <Search className="h-5 w-5 text-fintech-purple" />,
    count: 1
  },
  {
    name: "Investments",
    icon: <Book className="h-5 w-5 text-fintech-purple" />,
    count: 3
  }
];
