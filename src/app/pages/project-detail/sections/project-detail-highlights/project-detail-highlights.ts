import { Component, input } from '@angular/core';
import { CheckCircle, LucideAngularModule } from 'lucide-angular';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-project-detail-highlights',
  imports: [LucideAngularModule, ScrollRevealDirective],
  templateUrl: './project-detail-highlights.html',
  styleUrl: './project-detail-highlights.css',
})
export class ProjectDetailHighlights {
  highlights = input<string[]>([]);

  readonly CheckCircle = CheckCircle
}
