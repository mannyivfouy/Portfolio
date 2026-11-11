import { Component } from '@angular/core';
import { ArrowUpRight, Github, Linkedin, LucideAngularModule } from 'lucide-angular';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact-links',
  imports: [LucideAngularModule, ScrollRevealDirective],
  templateUrl: './contact-links.html',
  styleUrl: './contact-links.css',
})
export class ContactLinks {
  readonly ArrowUpRight = ArrowUpRight
  readonly Github = Github
  readonly Linkedin = Linkedin
}
