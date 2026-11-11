import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects-header',
  imports: [ScrollRevealDirective],
  templateUrl: './projects-header.html',
  styleUrl: './projects-header.css',
})
export class ProjectsHeader {}
