import { Component, input } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-project-detail-purpose',
  imports: [ScrollRevealDirective],
  templateUrl: './project-detail-purpose.html',
  styleUrl: './project-detail-purpose.css',
})
export class ProjectDetailPurpose {
  purpose = input.required<string>()
}
