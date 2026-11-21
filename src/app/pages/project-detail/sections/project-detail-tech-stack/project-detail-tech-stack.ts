import { Component, input } from '@angular/core';
import { ProjectTechnology } from '../../../../core/models/project-detail.model';

@Component({
  selector: 'app-project-detail-tech-stack',
  imports: [],
  templateUrl: './project-detail-tech-stack.html',
  styleUrl: './project-detail-tech-stack.css',
})
export class ProjectDetailTechStack {
  technologies = input<ProjectTechnology[]>([])
}
