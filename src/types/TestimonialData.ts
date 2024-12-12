export interface TestimonialData {
  id: number;
  name: string;
  message: string;
  title: string;
  image: string;
}

export interface TestimonialsResponse {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  testimonials: TestimonialData[];
}
