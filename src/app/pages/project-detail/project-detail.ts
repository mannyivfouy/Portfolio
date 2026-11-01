import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PROJECT_DETAILS } from '../../core/data/project-detail.data';
import { ProjectDetailModel } from '../../core/models/project-detail.model';
import { ArrowLeft, CheckCircle, LucideAngularModule } from 'lucide-angular';
import { MermaidDiagram } from '../../shared/components/mermaid-diagram/mermaid-diagram';

@Component({
  selector: 'app-project-detail',
  imports: [LucideAngularModule, RouterLink, MermaidDiagram],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute)

  readonly ArrowLeft = ArrowLeft
  readonly CheckCircle = CheckCircle

  project: ProjectDetailModel | undefined = PROJECT_DETAILS.find(
    (item) => item.slug === this.route.snapshot.paramMap.get('slug'),
  );
}
