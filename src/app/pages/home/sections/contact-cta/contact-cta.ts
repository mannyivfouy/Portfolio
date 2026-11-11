import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact-cta',
  imports: [LucideAngularModule, RouterLink, ScrollRevealDirective],
  templateUrl: './contact-cta.html',
  styleUrl: './contact-cta.css',
})
export class ContactCta {
  readonly ArrowRight = ArrowRight
}
