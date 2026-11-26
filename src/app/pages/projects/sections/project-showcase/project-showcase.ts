import { Component, input } from '@angular/core';
import { Project } from '../../../../core/models/project.model';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-showcase',
  imports: [RouterLink, ScrollRevealDirective, CommonModule],
  templateUrl: './project-showcase.html',
  styleUrl: './project-showcase.css',
})
export class ProjectShowcase {
  readonly projects = input.required<Project[]>()
}
