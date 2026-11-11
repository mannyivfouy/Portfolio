import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArrowRight, Github, Linkedin, LucideAngularModule } from 'lucide-angular';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, RouterLink, ScrollRevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly ArrowRight = ArrowRight
  readonly Github = Github
  readonly Linkedin = Linkedin
}
