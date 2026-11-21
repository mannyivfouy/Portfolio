export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectTechnology {
  name: string;
  icon?: string
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectDetailModel {
  title: string
  slug: string;
  overview: string;
  purpose: string;
  features: ProjectFeature[];
  technologies: ProjectTechnology[];
  implementationHighlights: string[];
  challenges: ProjectChallenge[];
  learnings: string[];
  screenshots: string[];
}
