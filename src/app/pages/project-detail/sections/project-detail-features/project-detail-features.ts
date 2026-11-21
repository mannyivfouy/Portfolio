import { Component, input } from '@angular/core';
import { CheckCircle, LucideAngularModule } from 'lucide-angular';
import { ProjectFeature } from '../../../../core/models/project-detail.model';

@Component({
  selector: 'app-project-detail-features',
  imports: [LucideAngularModule],
  templateUrl: './project-detail-features.html',
  styleUrl: './project-detail-features.css',
})
export class ProjectDetailFeatures {
  features = input<ProjectFeature[]>([])

  readonly CheckCircle = CheckCircle
}
