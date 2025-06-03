
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle, Clock, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface ComplianceAlert {
  id: string;
  alert_type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  status: string;
  due_date: string;
  client_id: string;
}

const ComplianceAlertsWidget = () => {
  const [alerts, setAlerts] = useState<ComplianceAlert[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    try {
      const { data, error } = await supabase
        .from('compliance_alerts')
        .select('*')
        .eq('status', 'open')
        .order('severity', { ascending: false })
        .limit(5);

      if (error) throw error;
      
      const typedData = (data || []).map(item => ({
        id: item.id,
        alert_type: item.alert_type,
        severity: (item.severity === 'low' || item.severity === 'medium' || item.severity === 'high' || item.severity === 'critical')
          ? item.severity
          : 'medium' as const,
        title: item.title,
        description: item.description || '',
        status: item.status,
        due_date: item.due_date,
        client_id: item.client_id
      }));
      
      setAlerts(typedData);
    } catch (error) {
      console.error('Error fetching compliance alerts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical':
      case 'high':
        return <AlertTriangle className="h-4 w-4" />;
      case 'medium':
        return <Clock className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Compliance Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-orange-500" />
          Compliance Alerts
        </CardTitle>
        <Badge variant="secondary">{alerts.length}</Badge>
      </CardHeader>
      <CardContent>
        {alerts.length === 0 ? (
          <div className="text-center py-4">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
            <p className="text-gray-600">No pending compliance alerts</p>
          </div>
        ) : (
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className="border rounded-lg p-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className={getSeverityColor(alert.severity)}>
                        {getSeverityIcon(alert.severity)}
                        {alert.severity.toUpperCase()}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        Due: {new Date(alert.due_date).toLocaleDateString()}
                      </span>
                    </div>
                    <h4 className="font-medium text-sm">{alert.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{alert.description}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ComplianceAlertsWidget;
