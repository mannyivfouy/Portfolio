import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArrowRight, Github, Linkedin, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly ArrowRight = ArrowRight
  readonly Github = Github
  readonly Linkedin = Linkedin
}
