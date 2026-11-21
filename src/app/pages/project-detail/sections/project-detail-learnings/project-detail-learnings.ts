import { Component, input } from '@angular/core';
import { CheckCircle, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-project-detail-learnings',
  imports: [LucideAngularModule],
  templateUrl: './project-detail-learnings.html',
  styleUrl: './project-detail-learnings.css',
})
export class ProjectDetailLearnings {
  learnings = input<string[]>([])

  readonly CheckCircle = CheckCircle
}
