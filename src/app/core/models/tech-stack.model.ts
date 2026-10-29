export interface Technology {
  name: string;
  icon: string;
}

export interface TechCategory {
  title: string;
  technologies: Technology[];
}
