import { Component } from '@angular/core';
import { ArrowUpRight, LucideAngularModule, Mail } from 'lucide-angular';

@Component({
  selector: 'app-contact-intro',
  imports: [LucideAngularModule],
  templateUrl: './contact-intro.html',
  styleUrl: './contact-intro.css',
})
export class ContactIntro {
  readonly Mail = Mail
  readonly ArrowUpRight = ArrowUpRight
}
