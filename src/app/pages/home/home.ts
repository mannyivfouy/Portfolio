import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { FeaturedProjects } from './sections/featured-projects/featured-projects';

@Component({
  selector: 'app-home',
  imports: [Hero, FeaturedProjects],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
