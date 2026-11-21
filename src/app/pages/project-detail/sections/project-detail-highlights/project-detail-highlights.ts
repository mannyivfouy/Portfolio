import { Component, input } from '@angular/core';
import { CheckCircle, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-project-detail-highlights',
  imports: [LucideAngularModule],
  templateUrl: './project-detail-highlights.html',
  styleUrl: './project-detail-highlights.css',
})
export class ProjectDetailHighlights {
  highlights = input<string[]>([]);

  readonly CheckCircle = CheckCircle
}
