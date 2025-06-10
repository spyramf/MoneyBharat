export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      blogs: {
        Row: {
          author: Json | null
          category: string | null
          content: string | null
          created_at: string | null
          excerpt: string | null
          featuredimage: string | null
          id: number
          isfeatured: boolean | null
          publisheddate: string | null
          readtime: string | null
          slug: string
          tags: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author?: Json | null
          category?: string | null
          content?: string | null
          created_at?: string | null
          excerpt?: string | null
          featuredimage?: string | null
          id?: number
          isfeatured?: boolean | null
          publisheddate?: string | null
          readtime?: string | null
          slug: string
          tags?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: Json | null
          category?: string | null
          content?: string | null
          created_at?: string | null
          excerpt?: string | null
          featuredimage?: string | null
          id?: number
          isfeatured?: boolean | null
          publisheddate?: string | null
          readtime?: string | null
          slug?: string
          tags?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
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
        Returns: Database["public"]["Enums"]["app_role"]
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
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
