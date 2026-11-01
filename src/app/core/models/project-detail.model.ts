export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectTechnology {
  name: string;
  purpose: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectDetailModel {
  slug: string;
  overview: string;
  purpose: string;
  features: ProjectFeature[];
  technologies: ProjectTechnology[];
  architecture?: string;
  databaseDesign?: string;
  implementationHighlights: string[];
  challenges: ProjectChallenge[];
  learnings: string[];
  screenshots: string[];
}
