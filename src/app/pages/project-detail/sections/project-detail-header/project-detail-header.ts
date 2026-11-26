import { Component, input } from '@angular/core';
import { ArrowLeft, LucideAngularModule } from 'lucide-angular';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-detail-header',
  imports: [LucideAngularModule, ScrollRevealDirective, RouterLink],
  templateUrl: './project-detail-header.html',
  styleUrl: './project-detail-header.css',
})
export class ProjectDetailHeader {
  title = input.required<string>();
  overview = input.required<string>();

  readonly ArrowLeft = ArrowLeft
}
