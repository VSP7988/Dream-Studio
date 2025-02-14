export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}