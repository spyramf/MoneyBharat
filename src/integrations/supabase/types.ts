export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      blog_analytics: {
        Row: {
          blog_id: string | null
          created_at: string | null
          id: string
          metric_data: Json | null
          metric_name: string
          metric_value: number | null
          recorded_date: string | null
        }
        Insert: {
          blog_id?: string | null
          created_at?: string | null
          id?: string
          metric_data?: Json | null
          metric_name: string
          metric_value?: number | null
          recorded_date?: string | null
        }
        Update: {
          blog_id?: string | null
          created_at?: string | null
          id?: string
          metric_data?: Json | null
          metric_name?: string
          metric_value?: number | null
          recorded_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_analytics_blog_id_fkey"
            columns: ["blog_id"]
            isOneToOne: false
            referencedRelation: "blogs"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_authors: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          email: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          name: string
          role: string | null
          slug: string
          social_links: Json | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          name: string
          role?: string | null
          slug: string
          social_links?: Json | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          name?: string
          role?: string | null
          slug?: string
          social_links?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      blog_categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          name: string
          seo_keywords: string[] | null
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          name: string
          seo_keywords?: string[] | null
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          name?: string
          seo_keywords?: string[] | null
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      blog_post_tags: {
        Row: {
          blog_id: string | null
          created_at: string | null
          id: string
          tag_id: string | null
        }
        Insert: {
          blog_id?: string | null
          created_at?: string | null
          id?: string
          tag_id?: string | null
        }
        Update: {
          blog_id?: string | null
          created_at?: string | null
          id?: string
          tag_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_post_tags_blog_id_fkey"
            columns: ["blog_id"]
            isOneToOne: false
            referencedRelation: "blogs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_post_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "blog_tags"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_seo_settings: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          setting_key: string
          setting_value: Json | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          setting_key: string
          setting_value?: Json | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          setting_key?: string
          setting_value?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      blog_tags: {
        Row: {
          color: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      blogs: {
        Row: {
          author_id: string | null
          canonical_url: string | null
          category_id: string | null
          content: string | null
          content_score: Json | null
          created_at: string | null
          excerpt: string | null
          featured_image: string | null
          focus_keywords: string[] | null
          id: string
          is_featured: boolean | null
          meta_description: string | null
          meta_title: string | null
          og_description: string | null
          og_image: string | null
          og_title: string | null
          published_date: string | null
          read_time: string | null
          robots_directive: string | null
          seo_score: number | null
          slug: string
          status: string | null
          title: string
          twitter_description: string | null
          twitter_image: string | null
          twitter_title: string | null
          updated_at: string | null
          updated_date: string | null
        }
        Insert: {
          author_id?: string | null
          canonical_url?: string | null
          category_id?: string | null
          content?: string | null
          content_score?: Json | null
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          focus_keywords?: string[] | null
          id?: string
          is_featured?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          og_description?: string | null
          og_image?: string | null
          og_title?: string | null
          published_date?: string | null
          read_time?: string | null
          robots_directive?: string | null
          seo_score?: number | null
          slug: string
          status?: string | null
          title: string
          twitter_description?: string | null
          twitter_image?: string | null
          twitter_title?: string | null
          updated_at?: string | null
          updated_date?: string | null
        }
        Update: {
          author_id?: string | null
          canonical_url?: string | null
          category_id?: string | null
          content?: string | null
          content_score?: Json | null
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          focus_keywords?: string[] | null
          id?: string
          is_featured?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          og_description?: string | null
          og_image?: string | null
          og_title?: string | null
          published_date?: string | null
          read_time?: string | null
          robots_directive?: string | null
          seo_score?: number | null
          slug?: string
          status?: string | null
          title?: string
          twitter_description?: string | null
          twitter_image?: string | null
          twitter_title?: string | null
          updated_at?: string | null
          updated_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blogs_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "blog_authors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blogs_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "blog_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings: {
        Row: {
          created_at: string | null
          date: string
          email: string
          id: number
          message: string | null
          name: string
          phone: string
          service: string
          status: string
          time: string
        }
        Insert: {
          created_at?: string | null
          date: string
          email: string
          id?: number
          message?: string | null
          name: string
          phone: string
          service: string
          status?: string
          time: string
        }
        Update: {
          created_at?: string | null
          date?: string
          email?: string
          id?: number
          message?: string | null
          name?: string
          phone?: string
          service?: string
          status?: string
          time?: string
        }
        Relationships: []
      }
      business_metrics: {
        Row: {
          branch_id: string | null
          created_at: string
          id: string
          metric_type: string
          metric_value: number | null
          percentage_change: number | null
          period_end: string
          period_start: string
          period_type: string
          rm_id: string | null
          target_value: number | null
        }
        Insert: {
          branch_id?: string | null
          created_at?: string
          id?: string
          metric_type: string
          metric_value?: number | null
          percentage_change?: number | null
          period_end: string
          period_start: string
          period_type: string
          rm_id?: string | null
          target_value?: number | null
        }
        Update: {
          branch_id?: string | null
          created_at?: string
          id?: string
          metric_type?: string
          metric_value?: number | null
          percentage_change?: number | null
          period_end?: string
          period_start?: string
          period_type?: string
          rm_id?: string | null
          target_value?: number | null
        }
        Relationships: []
      }
      clients: {
        Row: {
          aadhar: string | null
          account_number: string | null
          account_type: string | null
          address: string | null
          annual_income: number | null
          aum: number | null
          city: string | null
          created_at: string
          date_of_birth: string | null
          email: string | null
          family_head_id: string | null
          family_relationship: string | null
          holding_type: string | null
          id: string
          identity_type: string | null
          ifsc_code: string | null
          investment_amount: number | null
          investment_experience: string | null
          investor_category: string | null
          investor_id: string
          is_default_payout: boolean | null
          kyc_status: string | null
          name: string
          occupation: string | null
          onboarding_status: string | null
          pan_card: string | null
          pan_number: string | null
          phone: string | null
          pincode: string | null
          relationship_manager: string | null
          residential_status: string | null
          risk_profile: string | null
          sip_amount: number | null
          state: string | null
          updated_at: string
          user_role: Database["public"]["Enums"]["app_role"] | null
        }
        Insert: {
          aadhar?: string | null
          account_number?: string | null
          account_type?: string | null
          address?: string | null
          annual_income?: number | null
          aum?: number | null
          city?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          family_head_id?: string | null
          family_relationship?: string | null
          holding_type?: string | null
          id?: string
          identity_type?: string | null
          ifsc_code?: string | null
          investment_amount?: number | null
          investment_experience?: string | null
          investor_category?: string | null
          investor_id: string
          is_default_payout?: boolean | null
          kyc_status?: string | null
          name: string
          occupation?: string | null
          onboarding_status?: string | null
          pan_card?: string | null
          pan_number?: string | null
          phone?: string | null
          pincode?: string | null
          relationship_manager?: string | null
          residential_status?: string | null
          risk_profile?: string | null
          sip_amount?: number | null
          state?: string | null
          updated_at?: string
          user_role?: Database["public"]["Enums"]["app_role"] | null
        }
        Update: {
          aadhar?: string | null
          account_number?: string | null
          account_type?: string | null
          address?: string | null
          annual_income?: number | null
          aum?: number | null
          city?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          family_head_id?: string | null
          family_relationship?: string | null
          holding_type?: string | null
          id?: string
          identity_type?: string | null
          ifsc_code?: string | null
          investment_amount?: number | null
          investment_experience?: string | null
          investor_category?: string | null
          investor_id?: string
          is_default_payout?: boolean | null
          kyc_status?: string | null
          name?: string
          occupation?: string | null
          onboarding_status?: string | null
          pan_card?: string | null
          pan_number?: string | null
          phone?: string | null
          pincode?: string | null
          relationship_manager?: string | null
          residential_status?: string | null
          risk_profile?: string | null
          sip_amount?: number | null
          state?: string | null
          updated_at?: string
          user_role?: Database["public"]["Enums"]["app_role"] | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_family_head_id_fkey"
            columns: ["family_head_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      compliance_alerts: {
        Row: {
          alert_type: string
          client_id: string | null
          created_at: string
          description: string | null
          due_date: string | null
          id: string
          resolved_by: string | null
          resolved_date: string | null
          severity: string
          status: string | null
          title: string
          updated_at: string
        }
        Insert: {
          alert_type: string
          client_id?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          resolved_by?: string | null
          resolved_date?: string | null
          severity: string
          status?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          alert_type?: string
          client_id?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          resolved_by?: string | null
          resolved_date?: string | null
          severity?: string
          status?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "compliance_alerts_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      kyc_details: {
        Row: {
          client_id: string | null
          created_at: string
          document_number: string | null
          expiry_date: string | null
          id: string
          kyc_type: string
          remarks: string | null
          updated_at: string
          verification_status: string | null
          verified_date: string | null
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          document_number?: string | null
          expiry_date?: string | null
          id?: string
          kyc_type: string
          remarks?: string | null
          updated_at?: string
          verification_status?: string | null
          verified_date?: string | null
        }
        Update: {
          client_id?: string | null
          created_at?: string
          document_number?: string | null
          expiry_date?: string | null
          id?: string
          kyc_type?: string
          remarks?: string | null
          updated_at?: string
          verification_status?: string | null
          verified_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "kyc_details_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      portfolios: {
        Row: {
          client_id: string | null
          created_at: string
          current_value: number | null
          folio_number: string | null
          fund_name: string
          gain_loss: number | null
          gain_loss_percentage: number | null
          id: string
          invested_amount: number | null
          nav: number | null
          scheme_code: string | null
          units: number | null
          updated_at: string
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          current_value?: number | null
          folio_number?: string | null
          fund_name: string
          gain_loss?: number | null
          gain_loss_percentage?: number | null
          id?: string
          invested_amount?: number | null
          nav?: number | null
          scheme_code?: string | null
          units?: number | null
          updated_at?: string
        }
        Update: {
          client_id?: string | null
          created_at?: string
          current_value?: number | null
          folio_number?: string | null
          fund_name?: string
          gain_loss?: number | null
          gain_loss_percentage?: number | null
          id?: string
          invested_amount?: number | null
          nav?: number | null
          scheme_code?: string | null
          units?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "portfolios_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      sip_registrations: {
        Row: {
          bank_account: string | null
          client_id: string | null
          created_at: string
          end_date: string | null
          frequency: string
          fund_name: string
          id: string
          installments_completed: number | null
          mandate_id: string | null
          next_installment_date: string | null
          scheme_code: string | null
          sip_amount: number
          sip_date: number
          start_date: string
          status: string | null
          total_installments: number | null
          updated_at: string
        }
        Insert: {
          bank_account?: string | null
          client_id?: string | null
          created_at?: string
          end_date?: string | null
          frequency: string
          fund_name: string
          id?: string
          installments_completed?: number | null
          mandate_id?: string | null
          next_installment_date?: string | null
          scheme_code?: string | null
          sip_amount: number
          sip_date: number
          start_date: string
          status?: string | null
          total_installments?: number | null
          updated_at?: string
        }
        Update: {
          bank_account?: string | null
          client_id?: string | null
          created_at?: string
          end_date?: string | null
          frequency?: string
          fund_name?: string
          id?: string
          installments_completed?: number | null
          mandate_id?: string | null
          next_installment_date?: string | null
          scheme_code?: string | null
          sip_amount?: number
          sip_date?: number
          start_date?: string
          status?: string | null
          total_installments?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sip_registrations_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          amount: number | null
          client_id: string | null
          created_at: string
          folio_number: string | null
          fund_name: string
          id: string
          nav: number | null
          order_id: string | null
          remarks: string | null
          scheme_code: string | null
          settlement_date: string | null
          status: string | null
          transaction_date: string
          transaction_type: string
          units: number | null
        }
        Insert: {
          amount?: number | null
          client_id?: string | null
          created_at?: string
          folio_number?: string | null
          fund_name: string
          id?: string
          nav?: number | null
          order_id?: string | null
          remarks?: string | null
          scheme_code?: string | null
          settlement_date?: string | null
          status?: string | null
          transaction_date: string
          transaction_type: string
          units?: number | null
        }
        Update: {
          amount?: number | null
          client_id?: string | null
          created_at?: string
          folio_number?: string | null
          fund_name?: string
          id?: string
          nav?: number | null
          order_id?: string | null
          remarks?: string | null
          scheme_code?: string | null
          settlement_date?: string | null
          status?: string | null
          transaction_date?: string
          transaction_type?: string
          units?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      user_permissions: {
        Row: {
          access_level: string | null
          created_at: string
          feature_name: string
          id: string
          is_enabled: boolean | null
          updated_at: string
          user_role: string
        }
        Insert: {
          access_level?: string | null
          created_at?: string
          feature_name: string
          id?: string
          is_enabled?: boolean | null
          updated_at?: string
          user_role: string
        }
        Update: {
          access_level?: string | null
          created_at?: string
          feature_name?: string
          id?: string
          is_enabled?: boolean | null
          updated_at?: string
          user_role?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_role: {
        Args: Record<PropertyKey, never> | { _user_id: string }
        Returns: string
      }
      has_role: {
        Args:
          | { _user_id: string; _role: Database["public"]["Enums"]["app_role"] }
          | { user_id: number; role_name: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "rm" | "subbroker" | "client"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "rm", "subbroker", "client"],
    },
  },
} as const
