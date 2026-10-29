export interface Project {
  title: string;
  slug: string;
  description: string;
  image: string;
  technologies: string[];
  frontendUrl?: string
  backendUrl?:string
  liveUrl?: string;
  featured: boolean;
}
