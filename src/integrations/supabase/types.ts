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
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
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
    Enums: {},
  },
} as const
