import { Component, input } from '@angular/core';
import { CheckCircle, LucideAngularModule } from 'lucide-angular';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-project-detail-learnings',
  imports: [LucideAngularModule, ScrollRevealDirective],
  templateUrl: './project-detail-learnings.html',
  styleUrl: './project-detail-learnings.css',
})
export class ProjectDetailLearnings {
  learnings = input<string[]>([])

  readonly CheckCircle = CheckCircle
}
