import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { FeaturedProjects } from './sections/featured-projects/featured-projects';
import { TechStack } from './sections/tech-stack/tech-stack';

@Component({
  selector: 'app-home',
  imports: [Hero, FeaturedProjects, TechStack],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
