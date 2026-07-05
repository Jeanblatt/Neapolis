export type StockStatus = "in_stock" | "out_of_stock" | "on_order";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price?: number;
  images: string[];
  stockStatus: StockStatus;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface QuoteRequest {
  name: string;
  phone: string;
  need: string;
  message: string;
}
