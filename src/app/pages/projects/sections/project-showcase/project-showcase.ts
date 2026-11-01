import { Component, input } from '@angular/core';
import { Project } from '../../../../core/models/project.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-showcase',
  imports: [RouterLink],
  templateUrl: './project-showcase.html',
  styleUrl: './project-showcase.css',
})
export class ProjectShowcase {
  readonly projects = input.required<Project[]>()
}
