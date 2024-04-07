export type SubscriptionStatus = 'incomplete' | 'incomplete_expired' | 'trialing' | 'active' | 'past_due' | 'canceled' | 'unpaid' | 'paused' | undefined;
export type SubscriptionItem = {
  priceId: string,
  quantity: number
}
export type SubscriptionItems = Array<SubscriptionItem>


export type Product = {
  id?: string | null;
  object?: string | null;
  active?: boolean;
  attributes?: any[];
  created?: number;
  default_price?: any | null;
  description?: string | null;
  features?: any[];
  images?: any[];
  livemode?: boolean;
  metadata?: { [key: string]: any };
  name?: string | null;
  package_dimensions?: any;
  shippable?: boolean | null;
  statement_descriptor?: string | null;
  tax_code?: any;
  type?: string | null;
  unit_label?: string | null;
  updated?: number;
  url?: string | null;
}

export interface ProductListProps {
  products?: Product[];
}


export type Customer = {
  id?: string | null;
  object?: string | null;
  address?: any;
  balance?: number;
  created?: number;
  currency?: any;
  default_source?: any;
  delinquent?: boolean;
  description?: any;
  discount?: number | null;
  email?: string | null;
  invoice_prefix?: string | null;
  invoice_settings?: {
    custom_fields?: any;
    default_payment_method?: any;
    footer?: any;
    rendering_options?: any;
  };
  livemode?: boolean;
  metadata?: { [key: string]: string };
  name?: any;
  next_invoice_sequence?: number;
  phone?: string | null;
  preferred_locales?: string[];
  shipping?: any;
  tax_exempt?: 'none' | 'subscriber' | 'item' | 'all';
  test_clock?: any;
}

