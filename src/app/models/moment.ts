export interface Moment {
  id?: number;
  title: string;
  description: string;
  imagem: string;
  created_at?: string;
  updated_at?: string;
  comentarios?: Comment[];
}
