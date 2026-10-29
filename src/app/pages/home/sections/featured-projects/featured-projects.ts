import { Component } from '@angular/core';
import { PROJECTS } from '../../../../core/data/project.data';
import { RouterLink } from '@angular/router';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-featured-projects',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.css',
})
export class FeaturedProjects {
  readonly projects = PROJECTS.filter((project) => project.featured);
  readonly ArrowRight = ArrowRight
}
