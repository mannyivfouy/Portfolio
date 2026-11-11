import { Component } from '@angular/core';
import { ContactCta } from '../home/sections/contact-cta/contact-cta';
import { AboutIntro } from './sections/about-intro/about-intro';
import { Experience } from './sections/experience/experience';
import { Education } from './sections/education/education';
import { Currently } from './sections/currently/currently';
import { WhatIBuild } from './sections/what-i-build/what-i-build';

@Component({
  selector: 'app-about',
  imports: [ContactCta, AboutIntro, Experience, Education, Currently, WhatIBuild],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
}
