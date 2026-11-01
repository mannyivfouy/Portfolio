import { Component } from '@angular/core';
import { ProjectsHeader } from './sections/projects-header/projects-header';
import { ProjectShowcase } from './sections/project-showcase/project-showcase';
import { PROJECTS } from '../../core/data/project.data';
import { ContactCta } from '../home/sections/contact-cta/contact-cta';

@Component({
  selector: 'app-projects',
  imports: [ProjectsHeader, ProjectShowcase, ContactCta],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly projects = PROJECTS
}
