import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about-preview',
  imports: [LucideAngularModule, RouterLink, ScrollRevealDirective],
  templateUrl: './about-preview.html',
  styleUrl: './about-preview.css',
})
export class AboutPreview {
  readonly ArrowRight = ArrowRight
}
