
import { useState } from 'react';
import { supabaseBlogService, type SupabaseBlogPost } from '@/services/supabaseBlogService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle, XCircle, Info, TrendingUp } from 'lucide-react';

interface SEOAnalyzerProps {
  post: SupabaseBlogPost;
}

interface SEOCheck {
  name: string;
  status: 'pass' | 'warning' | 'fail';
  score: number;
  message: string;
  suggestion?: string;
}

const SEOAnalyzer = ({ post }: SEOAnalyzerProps) => {
  const [seoChecks] = useState<SEOCheck[]>(() => {
    const checks: SEOCheck[] = [];
    
    // Title checks
    if (post.title) {
      if (post.title.length >= 30 && post.title.length <= 60) {
        checks.push({
          name: 'Title Length',
          status: 'pass',
          score: 20,
          message: `Title length is optimal (${post.title.length} characters)`,
        });
      } else if (post.title.length > 0) {
        checks.push({
          name: 'Title Length',
          status: 'warning',
          score: 10,
          message: `Title length is ${post.title.length} characters`,
          suggestion: 'Optimal length is 30-60 characters',
        });
      } else {
        checks.push({
          name: 'Title Length',
          status: 'fail',
          score: 0,
          message: 'No title provided',
          suggestion: 'Add a compelling title',
        });
      }
    }

    // Meta description checks
    if (post.meta_description) {
      if (post.meta_description.length >= 120 && post.meta_description.length <= 160) {
        checks.push({
          name: 'Meta Description',
          status: 'pass',
          score: 20,
          message: `Meta description length is optimal (${post.meta_description.length} characters)`,
        });
      } else if (post.meta_description.length > 0) {
        checks.push({
          name: 'Meta Description',
          status: 'warning',
          score: 10,
          message: `Meta description is ${post.meta_description.length} characters`,
          suggestion: 'Optimal length is 120-160 characters',
        });
      }
    } else {
      checks.push({
        name: 'Meta Description',
        status: 'fail',
        score: 0,
        message: 'No meta description provided',
        suggestion: 'Add a compelling meta description',
      });
    }

    // Content length checks
    if (post.content) {
      const contentLength = post.content.replace(/<[^>]*>/g, '').length;
      if (contentLength >= 1500) {
        checks.push({
          name: 'Content Length',
          status: 'pass',
          score: 20,
          message: `Content length is excellent (${contentLength} characters)`,
        });
      } else if (contentLength >= 800) {
        checks.push({
          name: 'Content Length',
          status: 'warning',
          score: 10,
          message: `Content length is ${contentLength} characters`,
          suggestion: 'Consider adding more comprehensive content (1500+ characters recommended)',
        });
      } else {
        checks.push({
          name: 'Content Length',
          status: 'fail',
          score: 5,
          message: `Content is too short (${contentLength} characters)`,
          suggestion: 'Add more detailed content (1500+ characters recommended)',
        });
      }
    } else {
      checks.push({
        name: 'Content Length',
        status: 'fail',
        score: 0,
        message: 'No content provided',
        suggestion: 'Add comprehensive content',
      });
    }

    // Focus keywords check
    if (post.focus_keywords && post.focus_keywords.length > 0) {
      checks.push({
        name: 'Focus Keywords',
        status: 'pass',
        score: 15,
        message: `${post.focus_keywords.length} focus keywords defined`,
      });
    } else {
      checks.push({
        name: 'Focus Keywords',
        status: 'fail',
        score: 0,
        message: 'No focus keywords defined',
        suggestion: 'Add 1-3 focus keywords that represent your content',
      });
    }

    // Featured image check
    if (post.featured_image) {
      checks.push({
        name: 'Featured Image',
        status: 'pass',
        score: 10,
        message: 'Featured image is set',
      });
    } else {
      checks.push({
        name: 'Featured Image',
        status: 'fail',
        score: 0,
        message: 'No featured image provided',
        suggestion: 'Add an attractive featured image',
      });
    }

    // Social media optimization check
    if (post.og_title && post.og_description) {
      checks.push({
        name: 'Social Media Tags',
        status: 'pass',
        score: 10,
        message: 'Open Graph tags are configured',
      });
    } else {
      checks.push({
        name: 'Social Media Tags',
        status: 'warning',
        score: 5,
        message: 'Some social media tags are missing',
        suggestion: 'Add Open Graph title and description for better social sharing',
      });
    }

    // Read time check
    if (post.read_time) {
      checks.push({
        name: 'Read Time',
        status: 'pass',
        score: 5,
        message: 'Read time is provided',
      });
    } else {
      checks.push({
        name: 'Read Time',
        status: 'warning',
        score: 2,
        message: 'No read time provided',
        suggestion: 'Add estimated read time',
      });
    }

    return checks;
  });

  const totalScore = seoChecks.reduce((sum, check) => sum + check.score, 0);
  const passCount = seoChecks.filter(check => check.status === 'pass').length;
  const warningCount = seoChecks.filter(check => check.status === 'warning').length;
  const failCount = seoChecks.filter(check => check.status === 'fail').length;

  const getStatusIcon = (status: 'pass' | 'warning' | 'fail') => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'fail':
        return <XCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            SEO Analysis
          </CardTitle>
          <div className="flex items-center gap-2">
            <span className={`text-2xl font-bold ${getScoreColor(totalScore)}`}>
              {totalScore}/100
            </span>
            <Badge 
              variant={totalScore >= 80 ? 'default' : totalScore >= 60 ? 'secondary' : 'destructive'}
            >
              {getScoreLabel(totalScore)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Progress Bar */}
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>SEO Score</span>
            <span>{totalScore}/100</span>
          </div>
          <Progress value={totalScore} className="h-2" />
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="font-bold text-green-500">{passCount}</span>
            </div>
            <div className="text-sm text-gray-500">Passed</div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1">
              <AlertCircle className="h-4 w-4 text-yellow-500" />
              <span className="font-bold text-yellow-500">{warningCount}</span>
            </div>
            <div className="text-sm text-gray-500">Warnings</div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1">
              <XCircle className="h-4 w-4 text-red-500" />
              <span className="font-bold text-red-500">{failCount}</span>
            </div>
            <div className="text-sm text-gray-500">Failed</div>
          </div>
        </div>

        {/* Detailed Checks */}
        <div className="space-y-3">
          <h4 className="font-medium flex items-center gap-2">
            <Info className="h-4 w-4" />
            Detailed Analysis
          </h4>
          
          {seoChecks.map((check, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
              {getStatusIcon(check.status)}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="font-medium text-sm">{check.name}</h5>
                  <span className="text-xs text-gray-500">{check.score} pts</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{check.message}</p>
                {check.suggestion && (
                  <p className="text-xs text-gray-500 italic">{check.suggestion}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        {totalScore < 80 && (
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Quick Wins</h4>
            <div className="space-y-1 text-sm text-blue-800">
              {seoChecks
                .filter(check => check.status === 'fail')
                .slice(0, 3)
                .map((check, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>{check.suggestion || check.message}</span>
                  </div>
                ))
              }
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SEOAnalyzer;
