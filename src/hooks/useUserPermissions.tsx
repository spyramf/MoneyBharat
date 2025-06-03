
import { useState, useEffect } from 'react';
import { useInvestorAuth } from '@/context/InvestorAuthContext';
import { useUserRole } from '@/hooks/useUserRole';
import { supabase } from '@/integrations/supabase/client';

interface UserPermission {
  feature_name: string;
  is_enabled: boolean;
  access_level: 'read' | 'write' | 'admin';
}

export const useUserPermissions = () => {
  const [permissions, setPermissions] = useState<UserPermission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useInvestorAuth();
  const { userRole } = useUserRole();

  useEffect(() => {
    const fetchPermissions = async () => {
      if (!user || !userRole) {
        setPermissions([]);
        setIsLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('user_permissions')
          .select('feature_name, is_enabled, access_level')
          .eq('user_role', userRole)
          .eq('is_enabled', true);

        if (error) {
          console.error('Error fetching user permissions:', error);
          setPermissions([]);
        } else {
          const typedData = (data || []).map(item => ({
            feature_name: item.feature_name,
            is_enabled: item.is_enabled,
            access_level: (item.access_level === 'read' || item.access_level === 'write' || item.access_level === 'admin') 
              ? item.access_level as 'read' | 'write' | 'admin'
              : 'read' as 'read' | 'write' | 'admin'
          }));
          setPermissions(typedData);
        }
      } catch (error) {
        console.error('Error fetching permissions:', error);
        setPermissions([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPermissions();
  }, [user, userRole]);

  const hasPermission = (featureName: string, requiredLevel: 'read' | 'write' | 'admin' = 'read') => {
    const permission = permissions.find(p => p.feature_name === featureName);
    if (!permission) return false;

    const levels = { read: 1, write: 2, admin: 3 };
    return levels[permission.access_level] >= levels[requiredLevel];
  };

  return { permissions, hasPermission, isLoading };
};
