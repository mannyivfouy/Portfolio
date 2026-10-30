import { Component } from '@angular/core';
import { Download, LucideAngularModule } from 'lucide-angular';
import { EXPERIENCES } from '../../core/data/experience.data';
import { EDUCATION } from '../../core/data/education.data';
import { CAPABILITY } from '../../core/data/capability.data';
import { ContactCta } from '../home/sections/contact-cta/contact-cta';

@Component({
  selector: 'app-about',
  imports: [LucideAngularModule, ContactCta],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly experiences = EXPERIENCES;
  readonly educationList = EDUCATION;
  readonly capabilities = CAPABILITY;
  readonly Download = Download;
}
