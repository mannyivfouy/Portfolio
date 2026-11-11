import { Component } from '@angular/core';
import { Download, LucideAngularModule } from 'lucide-angular';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about-intro',
  imports: [LucideAngularModule, ScrollRevealDirective],
  templateUrl: './about-intro.html',
  styleUrl: './about-intro.css',
})
export class AboutIntro {
  readonly Download = Download
}
