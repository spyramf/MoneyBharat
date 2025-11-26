import React from 'react';
import Link from 'next/link';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Settings, 
  BarChart3, 
  Search,
  TrendingUp,
  Globe,
  Target
} from 'lucide-react';

const CMSDashboard = () => {
  const dashboardCards = [
    {
      title: 'Blog Management',
      description: 'Create, edit, and manage blog posts with advanced SEO features',
      icon: FileText,
      link: '/admin/blogs/manage',
      color: 'bg-secondary',
      features: ['SEO Optimization', 'Content Editor', 'Analytics']
    },
    {
      title: 'SEO Analytics',
      description: 'Monitor and improve your website SEO performance',
      icon: TrendingUp,
      link: '/admin/seo/analytics',
      color: 'bg-primary',
      features: ['Keyword Tracking', 'Performance Metrics', 'Competitor Analysis']
    },
    {
      title: 'Content Optimization',
      description: 'Optimize your content for better search engine rankings',
      icon: Target,
      link: '/admin/content/optimize',
      color: 'bg-accent',
      features: ['Content Scoring', 'Keyword Density', 'Readability']
    },
    {
      title: 'Global SEO Settings',
      description: 'Configure site-wide SEO settings and meta tags',
      icon: Globe,
      link: '/admin/seo/settings',
      color: 'bg-destructive',
      features: ['Meta Tags', 'Schema Markup', 'XML Sitemaps']
    }
  ];

  return (
    <MainLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">SEO-Powered CMS Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your content and boost your website's search engine rankings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {dashboardCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <Card key={card.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`${card.color} p-3 rounded-lg text-white`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{card.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {card.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {card.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={card.link}>
                      Manage {card.title}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-secondary-foreground" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total Posts</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Search className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">SEO Score</p>
                  <p className="text-2xl font-bold">85%</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-accent-foreground" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Organic Traffic</p>
                  <p className="text-2xl font-bold">+23%</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-destructive" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Keywords</p>
                  <p className="text-2xl font-bold">156</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default CMSDashboard;