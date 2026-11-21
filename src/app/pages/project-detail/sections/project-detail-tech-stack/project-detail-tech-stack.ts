import { Component, input } from '@angular/core';
import { ProjectTechnology } from '../../../../core/models/project-detail.model';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-project-detail-tech-stack',
  imports: [ScrollRevealDirective],
  templateUrl: './project-detail-tech-stack.html',
  styleUrl: './project-detail-tech-stack.css',
})
export class ProjectDetailTechStack {
  technologies = input<ProjectTechnology[]>([])
}
