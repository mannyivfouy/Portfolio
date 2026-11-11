import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { EXPERIENCES } from '../../../../core/data/experience.data';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [LucideAngularModule, ScrollRevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  readonly experiences = EXPERIENCES
}
