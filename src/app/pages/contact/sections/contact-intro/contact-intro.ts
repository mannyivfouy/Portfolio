import { Component } from '@angular/core';
import { ArrowUpRight, LucideAngularModule, Mail } from 'lucide-angular';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact-intro',
  imports: [LucideAngularModule, ScrollRevealDirective],
  templateUrl: './contact-intro.html',
  styleUrl: './contact-intro.css',
})
export class ContactIntro {
  readonly Mail = Mail;
  readonly ArrowUpRight = ArrowUpRight;
}
