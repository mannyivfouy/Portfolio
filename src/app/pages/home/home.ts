import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { FeaturedProjects } from './sections/featured-projects/featured-projects';
import { TechStack } from './sections/tech-stack/tech-stack';
import { AboutPreview } from './sections/about-preview/about-preview';
import { ContactCta } from './sections/contact-cta/contact-cta';

@Component({
  selector: 'app-home',
  imports: [Hero, FeaturedProjects, TechStack, AboutPreview, ContactCta],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
