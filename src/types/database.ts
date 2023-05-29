export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string;
          id: number;
          name: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
          updated_at?: string;
        };
      };
      images: {
        Row: {
          category_id: number;
          created_at: string;
          id: number;
          updated_at: string;
          url: string;
        };
        Insert: {
          category_id: number;
          created_at?: string;
          id?: number;
          updated_at?: string;
          url: string;
        };
        Update: {
          category_id?: number;
          created_at?: string;
          id?: number;
          updated_at?: string;
          url?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
