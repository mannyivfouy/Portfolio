import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PROJECT_DETAILS } from '../../core/data/project-detail.data';
import { ProjectDetailModel } from '../../core/models/project-detail.model';
import { ArrowLeft, CheckCircle, LucideAngularModule } from 'lucide-angular';
import { ProjectDetailGallery } from './sections/project-detail-gallery/project-detail-gallery';
import { ProjectDetailHeader } from './sections/project-detail-header/project-detail-header';
import { ProjectDetailPurpose } from './sections/project-detail-purpose/project-detail-purpose';
import { ProjectDetailFeatures } from './sections/project-detail-features/project-detail-features';
import { ProjectDetailTechStack } from './sections/project-detail-tech-stack/project-detail-tech-stack';
import { ProjectDetailHighlights } from './sections/project-detail-highlights/project-detail-highlights';
import { ProjectDetailLearnings } from './sections/project-detail-learnings/project-detail-learnings';
import { NotFound } from '../not-found/not-found';

@Component({
  selector: 'app-project-detail',
  imports: [
    LucideAngularModule,
    RouterLink,
    ProjectDetailGallery,
    ProjectDetailHeader,
    ProjectDetailPurpose,
    ProjectDetailFeatures,
    ProjectDetailTechStack,
    ProjectDetailHighlights,
    ProjectDetailLearnings,
    NotFound
  ],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);

  readonly ArrowLeft = ArrowLeft;
  readonly CheckCircle = CheckCircle;

  project: ProjectDetailModel | undefined = PROJECT_DETAILS.find(
    (item) => item.slug === this.route.snapshot.paramMap.get('slug'),
  );
}
