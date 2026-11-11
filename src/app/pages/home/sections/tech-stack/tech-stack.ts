import { Component } from '@angular/core';
import { TECH_STACK } from '../../../../core/data/tech-stack.data';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-tech-stack',
  imports: [ScrollRevealDirective],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.css',
})
export class TechStack {
  readonly categories = TECH_STACK
}
