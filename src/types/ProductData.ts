export interface ProductData {
  id: number;
  title: string;
  image: string;
  price: number;
  price_after_discount: number | null;
}

export interface ProductsResponse {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  products: ProductData[];
}
