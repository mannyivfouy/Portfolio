import { Component } from '@angular/core';
import { ArrowUpRight, Github, Linkedin, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-contact-links',
  imports: [LucideAngularModule],
  templateUrl: './contact-links.html',
  styleUrl: './contact-links.css',
})
export class ContactLinks {
  readonly ArrowUpRight = ArrowUpRight
  readonly Github = Github
  readonly Linkedin = Linkedin
}
